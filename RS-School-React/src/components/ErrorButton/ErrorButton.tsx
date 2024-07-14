import { useState } from "react"
import style from "./ErrorButton.module.css"

const ErrorButton: React.FC = () => {

	const [hasError, setHasError] = useState(false)

	const handleClick = () => {
		setHasError(true)
	};	

		if (hasError) {
		throw new Error('Error...');
		}
		
		return (
		<button className={style.button} onClick={handleClick}>Throw Error</button>
		);
		}

export default ErrorButton;