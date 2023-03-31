import React from "react";
import logo from "../../assets/promoBanner.svg";
import campaign from "../../assets/choose5banner.svg";
import "./FreePlay.scss";
import star from "../../assets/star.svg"

// img imports
import arsenal from '../../assets/teamLogos/arsenal.svg'
import chelsea from '../../assets/teamLogos/chelsea.svg'
import liverpool from '../../assets/teamLogos/liverpool.svg'
import manCity from '../../assets/teamLogos/manCity.svg'
import manU from '../../assets/teamLogos/manU.svg'
import norwich from '../../assets/teamLogos/norwich.svg'

import { useState } from 'react';
import { Link } from 'react-router-dom'

const FreePlay = () => {

  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)
  const [score3, setScore3] = useState(0)
  const [score4, setScore4] = useState(0)
  const [score5, setScore5] = useState(0)
  const [score6, setScore6] = useState(0)

  function updateScore1(sign) {
    if (sign==='+') {
      setScore1(score1 + 1)
    } else if(score1 > 0) {
      setScore1(score1 - 1)
    }
  }

  function updateScore2(sign) {
    if (sign==='+') {
      setScore2(score2 + 1)
    } else if(score2 > 0) {
      setScore2(score2 - 1)
    }
  }

  function updateScore3(sign) {
    if (sign==='+') {
      setScore3(score3 + 1)
    } else if(score3 > 0) {
      setScore3(score3 - 1)
    }
  }

  function updateScore4(sign) {
    if (sign==='+') {
      setScore4(score4 + 1)
    } else if(score4 > 0) {
      setScore4(score4 - 1)
    }
  }

  function updateScore5(sign) {
    if (sign==='+') {
      setScore5(score5 + 1)
    } else if(score5 > 0) {
      setScore5(score5 - 1)
    }
  }

  function updateScore6(sign) {
    if (sign==='+') {
      setScore6(score6 + 1)
    } else if(score6 > 0) {
      setScore6(score6 - 1)
    }
  }


  return (
    <div className="freePlay-container">
      <header className="freePlay-header">
        <img className="freePlay-header_img" src={logo} alt="5-for-500-logo" />
      </header>
      <div className="freePlay-promo">
        <p>Round 9 Deadline Friday Apr 7 9am</p>
      </div>
      <div className="freePlay-campaign">
        <img
          src={campaign}
          className="freePlay-campaign-img"
          alt="5-for5-banner"
        />
      </div>
      <section className='counter'>
        <div className='counter__row'>
          <img className='counter__img' src={liverpool}/>
          <button onClick={() => updateScore1('+')} className='counter__btn'>+</button>
          <h3 className='counter__score'>{score1}</h3>
          <button onClick={() => updateScore1('-')} className='counter__btn'>-</button>
          <button onClick={() => updateScore2('+')} className='counter__btn'>+</button>
          <h3 className='counter__score'>{score2}</h3>
          <button onClick={() => updateScore2('-')} className='counter__btn'>-</button>
          <img className='counter__img' src={norwich}/>
        </div>
      </section>
      <section className='counter'>
        <div className='counter__row'>
          <img className='counter__img' src={arsenal}/>
          <button onClick={() => updateScore3('+')} className='counter__btn'>+</button>
          <h3 className='counter__score'>{score3}</h3>
          <button onClick={() => updateScore3('-')} className='counter__btn'>-</button>
          <button onClick={() => updateScore4('+')} className='counter__btn'>+</button>
          <h3 className='counter__score'>{score4}</h3>
          <button onClick={() => updateScore4('-')} className='counter__btn'>-</button>
          <img className='counter__img' src={chelsea}/>
        </div>
      </section>
      <section className='counter'>
        <div className='counter__row'>
          <img className='counter__img' src={manCity}/>
          <button onClick={() => updateScore5('+')} className='counter__btn'>+</button>
          <h3 className='counter__score'>{score5}</h3>
          <button onClick={() => updateScore5('-')} className='counter__btn'>-</button>
          <button onClick={() => updateScore6('+')} className='counter__btn'>+</button>
          <h3 className='counter__score'>{score6}</h3>
          <button onClick={() => updateScore6('-')} className='counter__btn'>-</button>
          <img className='counter__img' src={manU}/>
        </div>
        <Link className='counter__submit' to='/submit'>
            <h3 className='counter__submit-txt'>Submit</h3>
        </Link>
      </section>
    </div>
  );
};

export default FreePlay;
