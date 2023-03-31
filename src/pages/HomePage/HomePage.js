import './HomePage.scss';
import toronto from "../../assets/images/logo_Toronto_Raptors_logo.png"
import manu from "../../assets/images/Manu.png"
import Arsenal from "../../assets/images/Arsenal.svg"
import Liverpool from "../../assets/images/Liverpool.svg"
import AddTeam from "../../assets/images/AddTeam.png"
import ScoreCard from "../../assets/images/score-card.svg"

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
            <img className='main__scoreboard--card' src={ScoreCard}/> 
            <img className='main__scoreboard--card' src={ScoreCard}/> 
            <img className='main__scoreboard--card' src={ScoreCard}/> 

        </div>
    
    </div>
  );
}

export default HomePage;