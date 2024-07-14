import { useEffect, useState } from "react";
import Search from "../Search/Search";
import Results from "../Results/Results";
import Preloader from "../common/Preloader/Preloader";
import useSearchQuery from "../../hooks/useSearchQuery";

const Basic: React.FC = () => {
const [items, setItems] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [searchQuery, setSearchQuery] = useSearchQuery("searchQuery");

useEffect(() => {
	performSearch(searchQuery);
}, [searchQuery]);

const performSearch = (searchTerm: string) => {
	const query = searchTerm ? `?search=${searchTerm}` : "";
	fetch(`https://swapi.dev/api/people/${query}`)
		.then((response) => response.json())
		.then((data) => {
		localStorage.setItem("searchResults", JSON.stringify(data.results));
		setItems(data.results);
		setIsLoading(false);
		console.log(data.results);
		})
		.catch((error) => console.error("Error fetching data:", error));
};

const handleSearch = (searchTerm: string) => {
	setSearchQuery(searchTerm);
	performSearch(searchTerm);
};

return (
	<>
		<Search onSearch={handleSearch} />
		{isLoading ? <Preloader /> : <Results items={items} />}
	</>
);
};

export default Basic;