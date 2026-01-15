import './Jobs.css'
import {Component} from 'react'
import Navbar from '../Navbar/Navbar'
import ProfileCard from './ProfileCard'
import JobsList from '../JobsList/JobsList'

class Jobs extends Component {
  employmentTypesList = [
    {
      label: 'Full Time',
      employmentTypeId: 'FULLTIME',
    },
    {
      label: 'Part Time',
      employmentTypeId: 'PARTTIME',
    },
    {
      label: 'Freelance',
      employmentTypeId: 'FREELANCE',
    },
    {
      label: 'Internship',
      employmentTypeId: 'INTERNSHIP',
    },
  ]

  salaryRangesList = [
    {
      salaryRangeId: '1000000',
      label: '10 LPA and above',
    },
    {
      salaryRangeId: '2000000',
      label: '20 LPA and above',
    },
    {
      salaryRangeId: '3000000',
      label: '30 LPA and above',
    },
    {
      salaryRangeId: '4000000',
      label: '40 LPA and above',
    },
  ]

  renderEmployeeTypes = () => (
    <ul className="filter-item-container">
      {this.employmentTypesList.map(each => (
        <li key={each.employmentTypeId} className="filter-item">
          <input
            type="checkbox"
            id={each.employmentTypeId}
            value={each.employmentTypeId}
          />
          <label htmlFor={each.employmentTypeId} className="filter-label">
            {each.label}
          </label>
        </li>
      ))}
    </ul>
  )

  renderSalaryRanges = () => (
    <ul className="filter-item-container">
      {this.salaryRangesList.map(each => (
        <li key={each.salaryRangeId} className="filter-item">
          <input
            type="radio"
            id={each.salaryRangeId}
            value={each.salaryRangeId}
          />
          <label htmlFor={each.salaryRangeId} className="filter-label">
            {each.label}
          </label>
        </li>
      ))}
    </ul>
  )

  render() {
    return (
      <>
        <Navbar />
        <div className="jobs-container">
          <div className="sidebar-container">
            <ProfileCard />
            <hr />
            <p className="filter-title">Type of Employment</p>
            {this.renderEmployeeTypes()}
            <hr />
            <p className="filter-title">Salary Range</p>
            {this.renderSalaryRanges()}
          </div>
          <JobsList />
        </div>
      </>
    )
  }
}

export default Jobs

