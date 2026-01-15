import './JobsList.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdSearch} from 'react-icons/io'
import JobItem from '../JobItem/JobItem'

class JobsList extends Component {
  state = {jobsList: [], searchKey: ''}

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
    console.log(formattedJobsList)
    this.setState({jobsList: formattedJobsList})
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

  render() {
    const {jobsList, searchKey} = this.state

    return (
      <div className="jobs-list">
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
        <ul className="jobs-list-container">
          {jobsList.map(each => (
            <JobItem key={each.id} jobItem={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default JobsList
