import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


export default function AppCarousel() {
return (
	<div class="container" style={{ display: 'block', width: 1000, padding: 30 }}>
        
	<h4 class="text-center poppins">My Achievements and Work</h4><br></br>
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
    <p className='f10 poppins text-center'>In this carousel, Local Pictures should be saved at the public folder in order to be loaded by the app.</p>
	</div>
);
}
