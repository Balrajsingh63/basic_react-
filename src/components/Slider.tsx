/** @format */

// Carousels.jsx
import Carousel from "react-bootstrap/Carousel";

function Carousels() {
	return (
		<Carousel data-bs-theme='dark'>
			<Carousel.Item style={{ height: "400px" }}>
				<img
					className='d-block w-100'
					src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt='First slide'
				/>
				<Carousel.Caption>
					<h5>First slide label</h5>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{ height: "400px" }}>
				<img
					className='d-block w-100'
					src='https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600'
					alt='Second slide'
				/>
				<Carousel.Caption>
					<h5>Second slide label</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{ height: "400px" }}>
				<img
					className='d-block w-100'
					src='https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600'
					alt='Third slide'
				/>
				<Carousel.Caption>
					<h5>Third slide label</h5>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Carousels;
