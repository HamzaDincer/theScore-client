import './HomePage.scss';
import toronto from "../../assets/images/logo_Toronto_Raptors_logo.png"
import manu from "../../assets/images/Manu.png"
import Arsenal from "../../assets/images/Arsenal.svg"
import Liverpool from "../../assets/images/Liverpool.svg"
import AddTeam from "../../assets/images/AddTeam.png"
import ScoreCard from "../../assets/images/score-card.svg"
import LiveUSA from "../../assets/images/Live-American.svg"
import sbet from "../../assets/images/sbet.svg"
import live from "../../assets/images/live.svg"
import upcoming from "../../assets/images/upcoming.svg"
import Recommended from "../../assets/images/recommend.svg"
import news from "../../assets/images/newss.svg"
import recteams from "../../assets/images/rec_teams.svg"
import footer from "../../assets/images/footer.svg"
import { Link } from 'react-router-dom'
import ScoreEU from "../../assets/images/scoreEU.svg"
import upcomingEU from "../../assets/images/upcomingEU.svg"
import recommendEU from "../../assets/images/recommendEU.svg"

function HomePage({oddsType}) {
    console.log(oddsType)
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
        <div className='main__live'>
            <h1 className='main__title'>Live Games</h1>
            <Link to="/oddsdisplay"><h1 className='main__edit'>Edit Odd Display</h1> </Link>
        </div>
        <div className='main__scoreboard'>
            <img className='main__scoreboard--card' src={(() => {
                    switch (oddsType) {
                        case 'american':
                        return LiveUSA;
                        case 'decimal':
                        return ScoreEU;
                        default:
                        return LiveUSA;
                    }
                    })()
                }/>
            <img className='main__scoreboard--card' src={(() => {
                switch (oddsType) {
                    case 'american':
                    return LiveUSA;
                    case 'decimal':
                    return ScoreEU;
                    default:
                    return LiveUSA;
                }
                })()
            }/>
        </div>
        <div className='main__bet'>
            <img className='main__lives' src={live}/>
            <img className='main__bets' src={sbet}/>
        </div>
        <h1 className='main__title'>Upcoming Matches</h1>
        <div className='main__upcoming'>
            <img className='main__scoreboard--card' src={(() => {
                    switch (oddsType) {
                        case 'american':
                        return upcoming;
                        case 'decimal':
                        return upcomingEU;
                        default:
                        return upcoming;
                    }
                    })()
                }/>
            <img className='main__scoreboard--card' src={(() => {
            switch (oddsType) {
                case 'american':
                return upcoming;
                case 'decimal':
                return upcomingEU;
                default:
                return upcoming;
            }
            })()
            }/>
           
        </div>
        <h1 className='main__title'>Recommended Matches</h1>
        <div className='main__upcoming'>
        <img className='main__scoreboard--card' src={(() => {
            switch (oddsType) {
                case 'american':
                return Recommended;
                case 'decimal':
                return recommendEU;
                default:
                return Recommended;
            }
            })()
            }/>
            <img className='main__scoreboard--card' src={(() => {
            switch (oddsType) {
                case 'american':
                return Recommended;
                case 'decimal':
                return recommendEU;
                default:
                return Recommended;
            }
            })()
            }/>
        </div>
        <img className='main__news' src={news}/>  
        <h1 className='main__title'>Recommended Teams</h1>
        <div className='main__upcoming'>
            <img className='main__scoreboard--card' src={recteams}/> 
          
        </div>
        <footer>
            <img className='main__footer' src={footer}/> 
        </footer>
    </div>
  );
}

export default HomePage;