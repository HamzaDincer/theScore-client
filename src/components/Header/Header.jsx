import "./Header.scss";
import profile from '../../assets/images/profile.svg';
import logo from '../../assets/images/logo-speech.svg';

const Header = () => {
    
    return (
    <header className="header">
        <div className="header__row">
            <img className="header__profile" src={profile}/>

                <form className="header__form"  >
                    <input
                    type="search"
                    placeholder="Teams, Players and News"
                    className="header__search"
                    ></input>
                </form>
            <img className="header__logo" src={logo}/>
                
        </div>
        <div className="header__nav"> 
            <div className="header__nav--link active">My Bet Home</div>
            <div className="header__nav--link">Recommended</div>
        </div>
    </header>
    )
};


export default Header;