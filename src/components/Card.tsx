/** @format */
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardComponents() {
	return (
		<Row xs={1} md={5} className='g-4'>
			{Array.from({ length: 10 }).map((_, idx) => (
				<Col key={idx}>
					<Card>
						<Card.Img
							variant='top'
							src='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600'
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a longer card with supporting text below as a
								natural lead-in to additional content. This content is a
								little bit longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default CardComponents;
