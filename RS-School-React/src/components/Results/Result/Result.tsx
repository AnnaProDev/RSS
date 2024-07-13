/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Component } from 'react';
import "./Result.css"

interface Props {
  item: { 
	name: string; 
	url: string 
	};
}

class Result extends Component<Props> {
  render() {
    const { item } = this.props;
    return (
      <div className='result'>
			<h3>{item.name}</h3>
			<p>Link: {item.url}</p>
      </div>
    );
  }
}

export default Result;