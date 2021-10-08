import React from 'react';
import progress from '../images/barProgress.png';
import donateLine from '../images/donate-progress.png';
import donateHeart from '../images/donate-heart.png';
import { useHistory } from 'react-router-dom';

export default function DonationsPage() {

    const history = useHistory();

    const goHome = () => {
        history.push('/');
    }

    return (
        <section className='donations'>
            <h2 className='donations__title'>Donate</h2>
            <p className='donations__subtitle'>New Center HAPPY PAW Construction</p>
            <div className='donations__image-container'>
                <img src={progress} alt='' className='donations__progress-bar'/>
                <img src={donateLine} alt='' />
                <img src={donateHeart} alt='' />
            </div>
            <div className='donations__info'>
                <p className='donations__info_text'>Raised</p>
                <p className='donations__info_text'>Funded in percent</p>
                <p className='donations__info_text'>Need to collect</p>
            </div>
            <div className='donations__info'>
                <p className='donations__info_amount'>35,000$</p>
                <p className='donations__info_amount'>50%</p>
                <p className='donations__info_amount'>70,000$</p>
            </div>
            <form className='donations__form' onSubmit={goHome}>
            {/* this is a grid with 5 sections, laid out like a square with an extra at the bottom */}

            {/* this grid-item style isn't being applied for some reason.... */}
                <div className='donations__form_grid-item'>
                    <label className='donations__subtitle donations__subtitle_bold'>Donation amount</label>
                    <input type='text' name='donation' className='donations__input' value=''></input>
                </div>

                {/* this has a separate class because unlike the others which are flex columns, this should be a flex-row */}
                <div className='donations__form_grid-item donations__form_grid-item_amounts'>
                    <p className='donations__form_amount'>20</p>
                    <p className='donations__form_amount'>50</p>
                    <p className='donations__form_amount'>100</p>
                    <p className='donations__form_amount'>150</p>
                </div>
                <div className='donations__form_grid-item'>
                    <label className='donations__subtitle donations__subtitle_bold'>Full name (wish)</label>
                    <input type='text' name='name' className='donations__input' value=''></input>
                    <button type='radio' name='anonymous' />
                    <label for='anonymous' className='donations__form_radio-button'>Make the payment anonymous</label>
                </div>
                <div className='donations__form_grid-item'>
                    <label className='donations__subtitle donations__subtitle_bold'>Email</label>
                    <input type='text' name='email' className='donations__input' value=''></input>
                </div>
                <button type='submit' className='section__button section__button_submit'>
                    <p className='donations__form_submit-text'>Donate</p>
                </button>
            </form>
        </section>
    )
}