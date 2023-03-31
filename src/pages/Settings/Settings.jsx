import "./Settings.scss"
import placeCat from '../../assets/images/200.jpeg'

export default function Settings() {

    return (
        <main>
            <section className='info'>
                <div className='info__text'>
                    <h3 className='info__title'>John Doe</h3>
                    <p className='info__para'>Lorem ipsum dolor sit amet consectetur. Eget nunc morbi lorem.Lorem ipsum dolor sit amet.</p>
                </div>
                <img className='info__img' src={placeCat} />
            </section>

        </main>
    )
}