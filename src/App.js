import React, { useEffect, useState } from "react";
import "./app.css";

export const App = () => {
	const [showWidget, setShowWidget] = useState(true);

	const widgetToggle = () => {
		showWidget ? setShowWidget(false) : setShowWidget(true);
	};

	useEffect(() => {
		setShowWidget(JSON.parse(window.localStorage.getItem("showWidget")));
	}, []);

	useEffect(() => {
		window.localStorage.setItem("showWidget", showWidget);
	}, [showWidget]);

	return (
		<div className="app">
			<button
				className="button"
				onClick={() => widgetToggle()}>
				{showWidget ? "Скрыть виджет" : "Показать виджет"}
			</button>
			<div
				style={{ display: showWidget ? "block" : "none" }}
				class="elfsight-app-579689c2-a61d-4c2c-bb80-01f9fbfe4cca"
				data-elfsight-app-lazy></div>
		</div>
	);
};
