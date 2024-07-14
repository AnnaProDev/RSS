/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import { ChangeEvent, useState } from "react";
import ErrorButton from "../ErrorButton/ErrorButton";
import style from "./Search.module.css"
interface Props {
onSearch: (searchTerm: string) => void;
}

const Search: React.FC<Props> = (props: Props) => {

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
		<div className={style.top}>
		<div className={style.search}>
			<input
				className={style.input}
				type="text"
				value={searchTerm}
				onChange={handleChange}
				placeholder="Enter name"
			/>
			<button className={style.button} onClick={handleSearch}>
				Search
			</button>
			<ErrorButton />
		</div>
	</div>
	);
}

export default Search;
