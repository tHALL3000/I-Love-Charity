import React from "react";
import heart from '../images/donate-heart.png';

function OppCard(props) {

	return (
		<article className='opp-card'>
			<div className='opp-card__image-container'>
				<img className='opp-card__image' src={props.picture} alt='pic' />
				<div className='opp-card__image-info'>
					<p className='opp-card__image-text'>Raised <br /> {props.raised}</p>
					<p className='opp-card__image-text'>Need to collect <br />{props.needed}</p>
				</div>
			</div>
				<p className='opp-card__text opp-card__text_faint'>{props.topic}</p>
				<p className='opp-card__text opp-card__text_bold'>{props.title}</p>
				<p className='opp-card__text opp-card__text_normal opp-card__text_paragraph'>{props.about}</p>
			<button className='section__button'>
				<p className='opp-card__text opp-card__text_normal opp-card__text_button'>Donate</p>
				<img className='opp-card__heart' src={heart} alt='heart' />
			</button>
		</article>
	)
}

export default OppCard;
