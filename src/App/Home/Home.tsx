/** @format */

import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousels from "../../components/Slider";
import CardComponents from "../../components/Card";

function Home() {
	return (
		<>
			<Carousels />
			<Container style={{ paddingTop: 30 }}>
				<CardComponents />
			</Container>
		</>
	);
}

export default Home;
