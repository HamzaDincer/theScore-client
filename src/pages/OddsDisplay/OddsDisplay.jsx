import "./OddsDisplay.scss"

export default function OddsDisplay() {

    return (
        <main className='odds'>
            <ul className='odds__list'>
                <li className='odds__item'>
                    <p className='odds__text'>Decimal</p>
                </li>
                <div className='odds__divider' />
                <li className='odds__item'>
                    <p className='odds__text'>Fractional</p>
                </li>
                <div className='odds__divider' />
                <li className='odds__item'>
                    <p className='odds__text'>American</p>
                </li>
            </ul>
        </main>
    )
}