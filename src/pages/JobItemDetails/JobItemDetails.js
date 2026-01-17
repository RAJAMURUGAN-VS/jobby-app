import './JobItemDetails.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn, MdEmail} from 'react-icons/md'
import {FiExternalLink} from 'react-icons/fi'
import Navbar from '../../components/Navbar/Navbar'
import SimilarJobs from '../../components/SimilarJobs/SimilarJobs'

class JobItemDetails extends Component {
  state = {jobDetails: {skills: [], lifeAtCompany: {}}, similarJobs: []}

  componentDidMount() {
    window.scrollTo(0, 0)
    this.getBlogItemdetails()
  }

  componentDidUpdate(prevProps) {
    const prevId = prevProps.match.params.id
    const {match} = this.props
    const {params} = match
    const {id} = params
    if (prevId !== id) {
      window.scrollTo(0, 0)
      this.getBlogItemdetails()
    }
  }

  getBlogItemdetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const formattedData = {
      jobDetails: data.job_details,
      similarJobs: data.similar_jobs,
    }
    const {jobDetails, similarJobs} = formattedData

    const formattedJobDetails = {
      companyLogoUrl: jobDetails.company_logo_url,
      companyWebsiteUrl: jobDetails.company_website_url,
      employmentType: jobDetails.employment_type,
      id: jobDetails.id,
      jobDescription: jobDetails.job_description,
      lifeAtCompany: {
        description: jobDetails.life_at_company.description,
        imageUrl: jobDetails.life_at_company.image_url,
      },
      location: jobDetails.location,
      packagePerAnnum: jobDetails.package_per_annum,
      rating: jobDetails.rating,
      skills: jobDetails.skills.map(each => ({
        imageUrl: each.image_url,
        name: each.name,
      })),
      title: jobDetails.title,
    }

    const formattedSimilarJobs = similarJobs.map(each => ({
      companyLogoUrl: each.company_logo_url,
      employmentType: each.employment_type,
      id: each.id,
      jobDescription: each.job_description,
      rating: each.rating,
      title: each.title,
    }))

    this.setState({
      jobDetails: formattedJobDetails,
      similarJobs: formattedSimilarJobs,
    })
  }

  renderSkills = () => {
    const {jobDetails} = this.state
    const {skills} = jobDetails

    return (
      <>
        <h1 className="details-title">Skills</h1>
        <ul className="skills-list-container">
          {skills.map(each => (
            <li key={each.name} className="skills-container">
              <img src={each.imageUrl} alt="skill" className="skill-logo" />
              <p className="description">{each.name}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }

  renderLifeAtCompany = () => {
    const {jobDetails} = this.state
    const {lifeAtCompany} = jobDetails
    const {description, imageUrl} = lifeAtCompany

    return (
      <>
        <h1 className="details-title">Life at Company</h1>
        <div className="life-at-company-container">
          <p className="details-description">{description}</p>
          <img src={imageUrl} alt="comany" className="life-at-company-image" />
        </div>
      </>
    )
  }

  render() {
    const {jobDetails, similarJobs} = this.state
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title,
    } = jobDetails

    return (
      <>
        <Navbar />
        <div className="job-item-details-container">
          <div className="job-item-details-card">
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
            <div className="description-title-container">
              <h1 className="details-title">Description</h1>
              <a href={companyWebsiteUrl} className="visit-container">
                <p className="visit">Visit </p> <FiExternalLink />
              </a>
            </div>
            <p className="details-description">{jobDescription}</p>
            {this.renderSkills()}
            {this.renderLifeAtCompany()}
          </div>
          <SimilarJobs similarJobs={similarJobs} />
        </div>
      </>
    )
  }
}

export default JobItemDetails