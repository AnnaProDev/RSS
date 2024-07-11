import { Component } from "react";

interface ErrorButtonState {
hasError: boolean;
}

class ErrorButton extends Component<ErrorButtonState> {

state: ErrorButtonState = {
	hasError: false,
	};

handleClick = () => {

this.setState({ hasError: true });
};

render() {

const { hasError } = this.state;

if (hasError) {
throw new Error('Error...');
}

return (
<button className='button button_error' onClick={this.handleClick}>Throw Error</button>
);
}
}

export default ErrorButton;