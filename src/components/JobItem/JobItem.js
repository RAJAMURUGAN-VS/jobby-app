import './JobItem.css'
import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn, MdEmail} from 'react-icons/md'

const JobItem = props => {
  const {jobItem} = props
  const {
    id,
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobItem

  return (
    <Link to={`/jobs/${id}`} className="link-element">
      <li className="job-item-container">
        <div className="job-title-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="company-logo"
          />
          <div className="job-item-details">
            <h1 className="job-title">{title}</h1>
            <div className="star-container">
              <AiFillStar className="star-icon" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="job-details-container">
          <div className="job-details">
            <div className="job-details-element">
              <MdLocationOn className="details-icon" />
              <p className="details">{location}</p>
            </div>
            <div className="job-details-element">
              <MdEmail className="details-icon" />
              <p className="details">{employmentType}</p>
            </div>
          </div>
          <p className="description-title">{packagePerAnnum}</p>
        </div>
        <hr />
        <p className="description-title">Description</p>
        <p className="description">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobItem
