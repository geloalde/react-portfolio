import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


export default function AppCarousel() {
return (
	<div class="container" style={{ display: 'block', width: 1000, padding: 30 }}>
        
	<h2 class="text-center poppins">Our Achievements and Work</h2><br></br>
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src={'/pic1.png'}
			alt="One"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={800}>
		<img className='d-block w-100' src={'/pic2.png'}
			alt="two"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>

        <Carousel.Item interval={800}>
		<img
			className="d-block w-100"
src={'/pic3.png'}
			alt="three"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>
        

	</Carousel>
	<br></br>
    <p className='poppins text-center f10'>Gelo's EZGAME Shop, an all around Gaming Site.</p>
	<p className='poppins text-center f10'>Ernest's Deals on Wheels, for all your auto needs.</p>
	<p className='poppins text-center f10'>Angela's Fragnatica, a fragrance shop for all occassions.</p>
	</div>
);
}
