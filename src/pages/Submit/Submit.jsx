import './Submit.scss'
import logo from "../../assets/promoBanner.svg";
import { Link } from 'react-router-dom';

export default function Submit() {
    return (
        <div className='submit'>
            <header className="freePlay-header">
                <img className="freePlay-header_img" src={logo} alt="5-for-500-logo" />
            </header>
            <h1>Scores submitted!</h1>
            <Link className='counter__submit' to='/'>
                <h3 className='counter__submit-txt'>Return home</h3>
            </Link>
            <Link className='counter__submit' to='/'>
                <h3 className='counter__submit-txt'>Explore bet mode</h3>
            </Link>
        </div>
    )
}