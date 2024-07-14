/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import { ChangeEvent, useState } from "react";
import ErrorButton from "../ErrorButton/ErrorButton";
import "./Search.css"

interface Props {
onSearch: (searchTerm: string) => void;
}

const Search = (props: Props) => {

	const [searchTerm, setSearchTerm] = useState<string>(() => {
		return localStorage.getItem("searchTerm") || "";
	 });


const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
	setSearchTerm( event.target.value );
};

const handleSearch = () => {
	const trimmedSearchTerm = searchTerm.trim();
	localStorage.setItem("searchTerm", trimmedSearchTerm);
	props.onSearch(searchTerm);
};

	return (
	<div className="search">
		<input
			className="input"
			type="text"
			value={searchTerm}
			onChange={handleChange}
			placeholder="Enter berry name"
		/>
		<button className="button" onClick={handleSearch}>
			Search
		</button>
		<ErrorButton />
	</div>
	);
}

export default Search;
