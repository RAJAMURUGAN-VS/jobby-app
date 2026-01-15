import './ProfileCard.css'
import { Component } from 'react'
import Cookies from 'js-cookie'

class ProfileCard extends Component {
  state = {profileDetails: []}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const formattedData = {
      profileDetails: data.profile_details,
    }
    const {profileDetails} = formattedData
    const formattedProfileDetails = {
      name: profileDetails.name,
      profileImageUrl: profileDetails.profile_image_url,
      shortBio: profileDetails.short_bio,
    }
    if (response.ok) {
      this.setState({profileDetails: formattedProfileDetails})
    }
  }

  render() {
    const {profileDetails} = this.state
    const {name, profileImageUrl, shortBio} = profileDetails

    return (
      <div className="profile-card-container">
        <img src={profileImageUrl} alt={name} className="profile-image" />
        <p className="profile-name">{name}</p>
        <p className="profile-description">{shortBio}</p>
      </div>
    )
  }
}

export default ProfileCard