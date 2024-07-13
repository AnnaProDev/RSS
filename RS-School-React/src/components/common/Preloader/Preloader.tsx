import { Component } from 'react';
import "./Preloader.css"


class Loader extends Component {
render() {
	return (
		<div className='preloader'>
			<div className="lds-ripple"><div></div><div></div></div>
		</div>

	);
}
}

export default Loader;
