import React from "react";
import heart from '../images/donate-heart.png';

function OppCard(props) {

	return (
		<article className='opp-card'>
			<div className='opp-card__image' style={{ background: `${props.picture}` }}>
				<div className='opp-card__image-info'>
					<p className='opp-card__image-text'>Raised <br /> {props.raiseAmount}</p>
					<p className='opp-card__image-text'>Need to collect <br />{props.needAmount}</p>
				</div>
			</div>
			<p className='opp-card__text opp-card__text_faint'>{props.topic}</p>
			<p className='opp-card__text opp-card__text_bold'>{props.title}</p>
			<p className='opp-card__text opp-card__text_normal'>{props.about}</p>
			<button className='opp-card__button'>
				<p className='opp-card__text opp-card__text_normal'>Donate</p>
				<image className='opp-card__heart' src={heart} />
			</button>
		</article>
	)
}

export default OppCard;
