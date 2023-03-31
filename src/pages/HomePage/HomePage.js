import './HomePage.scss';
import toronto from "../../assets/images/logo_Toronto_Raptors_logo.png"

function HomePage() {
  return (
    <div className='main'>
        <h1 className='main__title'>My Teams</h1>
        <div className='main__team-list'>
            <img className='main__team' src={toronto}/>
            <img className='main__team' src={toronto}/>
            <img className='main__team' src={toronto}/>
            <img className='main__team' src={toronto}/>
            <img className='main__team' src={toronto}/>
        </div>
        
    
    </div>
  );
}

export default HomePage;