import './SimilarJobs.css'
import SimilarJobItem from '../SimilarJobItem/SimilarJobItem'

const SimilarJobs = props => {
  const {similarJobs} = props
  return (
    <>
      <h1 className="details-title">SimilarJobs</h1>
      <ul className="similar-jobs-list-container">
        {similarJobs.map(each => (
          <SimilarJobItem key={each.id} similarJobItem={each} />
        ))}
      </ul>
    </>
  )
}

export default SimilarJobs
