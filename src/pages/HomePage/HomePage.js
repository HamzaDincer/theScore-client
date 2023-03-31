import './HomePage.scss';
import toronto from "../../assets/images/logo_Toronto_Raptors_logo.png"
import manu from "../../assets/images/Manu.png"
import Arsenal from "../../assets/images/Arsenal.svg"
import Liverpool from "../../assets/images/Liverpool.svg"
import AddTeam from "../../assets/images/AddTeam.png"

function HomePage() {
  return (
    <div className='main'>
        <h1 className='main__title'>My Teams</h1>
        <div className='main__team-list'>
            <img className='main__team' src={toronto}/>
            <img className='main__team' src={manu}/>
            <img className='main__team' src={Arsenal}/>
            <img className='main__team' src={Liverpool}/>
            <img className='main__team' src={AddTeam}/>
        </div>
        <div className='main__scoreboard'>
            <div className='main__scoreboard--card'>
                <img className='main__team-symbol' src=''/>
            </div>

        </div>
    
    </div>
  );
}

export default HomePage;