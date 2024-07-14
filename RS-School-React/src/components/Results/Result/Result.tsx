/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import "./Result.css"

interface Props {
	name: string
	url: string
}


const Result = (props: Props) => {

	console.log(props);
	
    return (
      <div className='result'>
			<h3>{props.name}</h3>
			<p>{props.url}</p>
      </div>
    );
  }

export default Result;