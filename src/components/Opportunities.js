import React from "react";
import OppCard from './OppCard';

function Opportunities(props) {

	return (
		<div>
			<h2 className='section__title'>Opportunities near you</h2>
			<div className='opportunities'>
			{props.opps.map((opp) => {
                    return (
                        <OppCard 
                        picture={opp.picture} 
                        topic={opp.topic}
						title={opp.title}
						about={opp.about}
						raised={opp.raised}
						needed={opp.needed}/>
                    )
                })}
			</div>
		</div>
	)
}

export default Opportunities;
