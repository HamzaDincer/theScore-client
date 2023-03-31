
import "./OddsDisplay.scss"
import activeGreen from '../../assets/active-circle.svg'


export default function OddsDisplay({ oddsType, setOddsType }) {

    return (
        <main className='odds'>    
            <ul className='odds__list'>
                <li onClick={() => {setOddsType('decimal')}} className='odds__item'>
                    <p className='odds__text'>Decimal</p>
                    {oddsType==='decimal' && <img className="odds__active" src={activeGreen} alt="" />}
                </li>
                <div className='odds__divider' />
                <li onClick={() => {setOddsType('fractional')}} className='odds__item'>
                    <p className='odds__text'>Fractional</p>
                    {oddsType==='fractional' && <img className="odds__active" src={activeGreen} alt="" />}
                </li>
                <div className='odds__divider' />
                <li onClick={() => {setOddsType('american')}} className='odds__item'>
                    <p className='odds__text'>American</p>
                    {oddsType==='american' && <img className="odds__active" src={activeGreen} alt="" />}
                </li>
            </ul>
        </main>
    )
}