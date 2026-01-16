import './SimilarJobItem.css'
import {AiFillStar} from 'react-icons/ai'

const SimilarJobItem = props => {
  const {similarJobItem} = props
  const {companyLogoUrl, title, rating, jobDescription} = similarJobItem

  return (
    <li className="similar-job-item-container">
      <div className="job-title-container">
        <img src={companyLogoUrl} alt="company logo" className="company-logo" />
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
  )
}

export default SimilarJobItem
