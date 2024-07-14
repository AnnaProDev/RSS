import { useEffect, useState } from "react";
import Search from "../Search/Search";
import Results from "../Results/Results";
import Preloader from "../common/Preloader/Preloader";


const Main = () => {

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
			<>
				<Search onSearch={performSearch} />
				{isLoading 
					? <Preloader />	
					: 	<Results items={items} />}
			</>
		);
	}
	
	export default Main;