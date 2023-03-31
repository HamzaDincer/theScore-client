import Back from "../../assets/chevron-back-outline.svg"
import "./Profile.scss"
import User from "../../assets/avatar.png"

export default function Profile () {
    return (
        <div className = "profile">
             <div className="profile__header">
            <div className="image__container">
            <img src = {Back} alt = "wee"></img>
            </div>
                <h1 className="profile__title">
                Profile
                </h1>
            </div>
            <div className="profile__user">
           
                <div className="profile__description">
                    <h1> John Doe</h1>
                    <p> johndoe@sportsfan.com</p>
                     <p style={{color: "#0379FF"}}> Edit Profile </p>
                </div>
                <div className="profile__avatar">
                    <img src = {User} alt = "profile-picture"></img>
                </div>
            </div>
            <div className="profile__buttons">
                    <button className="profile__buttons--login">Login</button>
                    <button className="profile__buttons--signup">Sign Up</button>
                </div>

        </div>
    )
}