import "./Header.scss";
import profile from '../../assets/images/profile.svg';
import logo from '../../assets/images/logo-speech.svg';
import { Link } from 'react-router-dom'

const Header = () => {
    
    return (
    <header className="header">
        <div className="header__row">
            <Link to="/profile"><img className="header__profile" src={profile}/></Link>

                <form className="header__form"  >
                    <input
                    type="search"
                    placeholder="Teams, Players and News"
                    className="header__search"
                    ></input>
                </form>
            <Link to='/'><img className="header__logo" src={logo}/> </Link>
                
        </div>
        <div className="header__nav"> 
            <div className="header__nav--link active">My Bet Home</div>
            <div className="header__nav--link">Recommended</div>
        </div>
    </header>
    )
};


export default Header;