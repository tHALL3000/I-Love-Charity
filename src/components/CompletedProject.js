import React from "react";

function CompletedProject() {
	return(
	<section className="project-grid"> Check all of our projects 
<div className="project-grid__container">
  <div className="project-grid__item"><h3 className="project-grid__item-title">Children <span className="project-grid__item__number">35</span></h3>
    <p className="project-grid__item-text">Providing every child with a strong early foundation in education and health</p>
      
    </div>
  <div className="project-grid__item"><h3 className="project-grid__item-title">Health <span className="project-grid__item__number">25</span></h3>
    <p className="project-grid__item-text">We’re fighting to help everyone get and stay healthy</p>
  </div>
  <div className="project-grid__item_big"><img src="src/images/image4_helper.jpg" className="project-grid__item-img" /></div>  
  <div className="project-grid__item"><h3 className="project-grid__item-title">Homeless People <span className="project-grid__item__number">17</span></h3>
    <p className="project-grid__item-text">Giving hope to those experiencing homelessness</p>
  </div>
  <div className="project-grid__item"><h3 className="project-grid__item-title">Covid-19 <span className="project-grid__item__number">10</span></h3>
    <p className="project-grid__item-text">With your support, we can help every person have an equal opportunity to thrive</p>
  </div>
  <div className="project-grid__item"><h3 className="project-grid__item-title">Animals <span className="project-grid__item__number">25</span></h3>
    <p className="project-grid__item-text">With so many problems facing animals, it takes all of our efforts to change things for the better</p>
  </div>
  <div className="project-grid__item"><h3 className="project-grid__item-title">Ecology <span className="project-grid__item__number">30</span></h3>
    <p className="project-grid__item-text">You can do a simple things to the environment</p>
  </div>
    
			</div>
			</section>
	)
}

export default CompletedProject;
