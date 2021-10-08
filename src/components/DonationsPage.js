import React from 'react';
import progress from '../images/barProgress.png';
import donateLine from '../images/donate-progress.png';
import donateHeart from '../images/donate-heart.png';

export default function DonationsPage(props) {

    return (
        <section className='donations'>
            <h2 className='donations__title'>Donate</h2>
            <p className='donations__subtitle'>{props.project}</p>
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
                <p className='donations__info_amount'>{props.raised}</p>
                <p className='donations__info_amount'>{props.percent}</p>
                <p className='donations__info_amount'>{props.needed}</p>
            </div>
            <form className='donations__form'>
                <div className='donations__form_grid-item'>
                    <label className='donations__subtitle donations__subtitle_bold'>Donation amount</label>
                    <input type='text' name='donation' className='donations__input' value=''></input>
                </div>
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