import { useState } from "react";


const ErrorButton : React.FC = () => {

	const [hasError, setHasError] = useState(false)

	const handleClick = () => {
		setHasError(true)
	};		
		if (hasError) {
		throw new Error('Error...');
		}
		
		return (
		<button className='button button_error' onClick={handleClick}>Throw Error</button>
		);
		}

export default ErrorButton;