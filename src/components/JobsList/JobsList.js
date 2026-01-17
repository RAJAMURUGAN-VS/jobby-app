import './JobsList.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdSearch} from 'react-icons/io'
import {ThreeDots} from 'react-loader-spinner'
import JobItem from '../JobItem/JobItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobsList extends Component {
  state = {jobsList: [], searchKey: '', apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getJobsList()
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.employmentTypes !== this.props.employmentTypes ||
      prevProps.salaryRange !== this.props.salaryRange
    ) {
      this.getJobsList()
    }
  }

  getJobsList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchKey} = this.state
    const {employmentTypes, salaryRange} = this.props
    const employmentType = employmentTypes.join(',')
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${salaryRange}&search=${searchKey}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const {jobs} = data
      const formattedJobsList = jobs.map(each => ({
        companyLogoUrl: each.company_logo_url,
        employmentType: each.employment_type,
        id: each.id,
        jobDescription: each.job_description,
        location: each.location,
        packagePerAnnum: each.package_per_annum,
        rating: each.rating,
        title: each.title,
      }))
      this.setState({
        jobsList: formattedJobsList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchKey = event => {
    this.setState({searchKey: event.target.value})
  }

  onClickSearchButton = () => {
    this.getJobsList()
  }

  onKeyDownSearchInput = event => {
    if (event.key === 'Enter') {
      this.getJobsList()
    }
  }

  renderSuccessView = () => {
    const {jobsList} = this.state

    console.log(jobsList.length)

    return jobsList.length === 0 ? (
      <div className="no-jobs-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no jobs"
          className="no-jobs-image"
        />
        <h1 className="failure-heading">No Jobs Found</h1>
        <p className="failure-description">
          We could not find any jobs. Try other filters.
        </p>
      </div>
    ) : (
      <ul className="jobs-list-container">
        {jobsList.map(each => (
          <JobItem key={each.id} jobItem={each} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <ThreeDots color="#f8fafc" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="no jobs"
        className="no-jobs-image"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button type="button" className="retry-button" onClick={this.getJobsList}>
        Retry
      </button>
    </>
  )

  renderJobsListView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchKey} = this.state

    return (
      <>
        <div className="job-search-container">
          <input
            type="search"
            placeholder="Search"
            value={searchKey}
            className="job-search"
            onChange={this.onChangeSearchKey}
            onKeyDown={this.onKeyDownSearchInput}
          />
          <button
            type="button"
            className="search-button"
            onClick={this.onClickSearchButton}
          >
            <IoMdSearch className="search-icon" />
          </button>
        </div>
        <div className="jobs-list">
          <div className="jobs-list-view">{this.renderJobsListView()}</div>
        </div>
      </>
    )
  }
}

export default JobsList
