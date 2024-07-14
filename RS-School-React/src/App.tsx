/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */

import { useEffect, useState } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Preloader from "./components/common/Preloader/Preloader";

const App = () => {

const [ items, setItems] = useState([]);
const [ isLoading, setIsLoading] = useState(true)

useEffect(() => {
	performSearch("");
	}, []);

const performSearch = (searchTerm: string) => {

const query = searchTerm ? `?search=${searchTerm}` : '';
fetch(`https://swapi.dev/api/people/${query}`)
	.then((response) => response.json())
	.then((data) => {
		localStorage.setItem('searchResults', JSON.stringify(data.results));
		setItems(data.results)
		setIsLoading(false);
		console.log(data.results);
		
	})
	.catch((error) => console.error("Error fetching data:", error));
};

	return (
	<ErrorBoundary>
		<div className="top">
			<Search onSearch={performSearch} />
		</div>
		<div className="bottom">
			{isLoading ? 
			<Preloader />
			: (
			<Results items={items} />
			)}
		</div>
	</ErrorBoundary>
	);
}

export default App;
