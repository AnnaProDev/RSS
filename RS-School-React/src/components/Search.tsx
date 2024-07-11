/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Component, ChangeEvent } from 'react';
import ErrorButton from './ErrorButton';

interface Props {
onSearch: (searchTerm: string) => void;
}

interface State {
searchTerm: string;
}

class Search extends Component<Props, State> {
constructor(props: Props) {
	super(props);
	const savedSearchTerm = localStorage.getItem('searchTerm') || '';
	this.state = { searchTerm: savedSearchTerm };
}

handleChange = (event: ChangeEvent<HTMLInputElement>) => {
	this.setState({ searchTerm: event.target.value });
}

handleSearch = () => {
	const searchTerm = this.state.searchTerm.trim();
	localStorage.setItem('searchTerm', searchTerm);
	this.props.onSearch(searchTerm);
}

render() {
	return (
	<div className='search'>
		<input 
			className='input'
			type="text" 
			value={this.state.searchTerm} 
			onChange={this.handleChange} 
			placeholder="Enter berry name"
		/>
		<button className='button' onClick={this.handleSearch}>Search</button>
		<ErrorButton hasError={false}/>
	</div>
	);
}
}

export default Search;
