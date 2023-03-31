import "./Header.scss";

const Header = () => {
    
    return (
    <header className="header">
        <div className="header__row">
            <div className="header__profile">
                

            </div>
            <div className="header__search-container">
                <form className="header__form"  >
                    <input
                    type="search"
                    placeholder="Teams, Players and News"
                    className="header__search"
                    ></input>
                </form>
            </div>
            <div className="header__logo">

            </div>
        </div>
        <div className="header__nav">
            

        </div>
    </header>
    )
};


export default Header;