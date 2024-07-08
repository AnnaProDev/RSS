/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorProps  {
children: ReactNode;
}

interface ErrorState {
hasError: boolean
}

class ErrorBoundary extends Component <ErrorProps, ErrorState>  {
constructor(props: ErrorProps) {
super(props);
this.state = { hasError: false };
}

static getDerivedStateFromError() {
return { hasError: true };
}

componentDidCatch(error: Error, info: ErrorInfo ) {
console.error("ErrorBoundary caught an error", error, info);
}

render() {
	if (this.state.hasError) {
		return (
		<div>
			<h1>Something went wrong...</h1>
		</div>
		);
	}

	return this.props.children;
}
}

export default ErrorBoundary;