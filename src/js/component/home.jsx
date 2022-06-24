import React, {useState} from "react";
import Semáforo from "./traffic_light.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Semáforo />
		</div>
	);
};

export default Home;
