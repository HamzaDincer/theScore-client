import Back from "../../assets/chevron-back-outline.svg";
import "./Profile.scss";
import User from "../../assets/avatar.png";
import Right from "../../assets/iconmonstr-arrow-right-thin.svg";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="image__container">
          <img src={Back} alt="wee"></img>
        </div>
        <h1 className="profile__title">Profile</h1>
      </div>
      <div className="profile__user">
        <div className="profile__description">
          <p style={{ fontSize: 21, fontWeight: "bold" }}> John Doe</p>
          <p style={{ fontSize: 14 }}> johndoe@sportsfan.com</p>
          <p style={{ fontSize: 14 ,color: "#0379FF" }}> Edit Profile </p>
        </div>
        <div className="profile__avatar">
          <img src={User} alt="profile-picture"></img>
        </div>
      </div>
      
    <div className="profile__options">
      <p className="profile__subheader1"> Personalisation </p>
      <ul className="odds__list">
        <li onClick={"qwe"} className="odds__item">
          <p style={{ fontSize:14}}>OddsDisplay</p>

          <img src={Right} alt="" width = {12}></img>
        </li>
        <div className="odds__divider" />
        <li onClick={"QWe"} className="odds__item">
          <p style={{ fontSize:14}}>Teams</p>

          <img src={Right} alt="" width = {12}></img>
        </li>
        <div className="odds__divider" />
        <li onClick={"qwe"} className="odds__item">
          <p style={{ fontSize:14}}>Currency</p>

          <img src={Right} alt="" width = {12}></img>
        </li>
      </ul>
      <p className="profile__subheader2"> Shortcuts </p>
      <ul className="odds__list">
        <li onClick={"qwe"} className="odds__item">
          <p style={{ fontSize:14}}>Favorites</p>
          <img src={Right} alt="" width = {12}></img>

        </li>
        <div className="odds__divider" />
        <li onClick={"QWe"} className="odds__item">
          <p style={{ fontSize:14}}>Bookmarks</p>
          <img src={Right} alt="" width = {12}></img>

        </li>
        <div className="odds__divider" />
        <li onClick={"qwe"} className="odds__item">
          <p style={{ fontSize:14}}>Leagues</p>
          <img src={Right} alt="" width = {12}></img>

        </li>
      </ul>
      </div>
    </div>
  );
}
