import './SimilarJobItem.css'
import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const SimilarJobItem = props => {
  const {similarJobItem} = props
  const {id, companyLogoUrl, title, rating, jobDescription} = similarJobItem

  return (
    <Link to={`/jobs/${id}`} className="link-element">
      <li className="similar-job-item-container">
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
        <p className="description-title">Description</p>
        <p className="description">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default SimilarJobItem
