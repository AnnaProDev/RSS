/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Component } from 'react';
import Result from './Result';

interface Props {
items: Array<{ name: string; url: string }>;
}

class Results extends Component<Props> {
render() {
	const { items } = this.props;
	return (
	<div className='results'>
		{items.map((item, id) => (
			<div key={id}>
			<Result item = {item}/>
			</div>
		))}
	</div>
	);
}
}

export default Results;

