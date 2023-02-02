import React, { Component } from "react";
import "./App.css";

import Heroes from "./components/Heroes";

class App extends Component {
	render() {
		return (
			<div>
				<h1 style={{ textAlign: "center", marginBottom: "10px" }}>Employees</h1>
				<Heroes />
			</div>
		);
	}
}

export default App;
