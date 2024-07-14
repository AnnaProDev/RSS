/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import Basic from "./components/Basic/Basic";
import Page404 from "./components/common/Page404/Page404";


const App: React.FC = () => {

	return (
	<ErrorBoundary>
		<Routes>
			<Route path="/" element={<Basic/>}  />
			<Route path="*" element={<Page404/>}/>
		</Routes>
	</ErrorBoundary>
	);
}

export default App;
