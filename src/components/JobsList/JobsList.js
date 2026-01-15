import './JobsList.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdSearch} from 'react-icons/io'
import JobItem from '../JobItem/JobItem'

class JobsList extends Component {
  state = {jobsList: []}

  componentDidMount() {
    this.getJobsList()
  }

  getJobsList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/jobs'
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

  render() {
    const {jobsList} = this.state

    return (
      <div className="jobs-list">
        <div className="job-search-container">
          <input type="search" placeholder="Search" className="job-search" />
          <IoMdSearch className="search-icon" />
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

