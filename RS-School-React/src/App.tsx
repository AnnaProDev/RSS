/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */

import { Component } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Search from './components/Search';
import Results from './components/Results';
import Loader from './components/Loader';
import Result from './components/Result';

interface State {
items: Array<{ name: string; url: string }>
item: { name: string; url: string } | null;
isLoading: boolean;
}

interface Props {
setLoading: (isLoading: boolean) => void;
}

interface BerryType {
name: string
url: string
}

class App extends Component<Props, State> {
	
constructor(props: Props) {
super(props);
this.state = {
items: [],
item: null,
isLoading: true,
};
}

componentDidMount() {
this.performSearch();
}

performSearch = () => {

const apiUrl = `https://pokeapi.co/api/v2/berry/?limit=100000&offset=0`;

fetch(apiUrl)
.then(response => response.json())
.then(data => {
	const items = data.results.map((berry: BerryType) => ({
		name: berry.name,
		url: berry.url,
	}));
	this.setState({ items, isLoading: false  });
})
.catch(error => console.error('Error fetching data:', error));
}

handleSearch = (searchTerm: string) => {
const filteredItem = this.state.items.filter((item: BerryType) => item.name === searchTerm);
const item = filteredItem.length > 0 ? filteredItem[0] : null;
this.setState({ item });
}

render() {
return (

	<ErrorBoundary >
		<div className='top'>
			<Search onSearch={this.handleSearch}/>
			</div>
			<div className='bottom'>

			{this.state.isLoading 
			? <Loader /> 
			: ( this.state.item 
				? <Result item = {this.state.item}/>
				: <Results items = { this.state.items} />
			)
			}
			</div>
	</ErrorBoundary>
);
}
}

export default App;

