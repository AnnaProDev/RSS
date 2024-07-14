/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */

import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Page404 from "./components/common/Page404/Page404";


const App = () => {

	return (
	<ErrorBoundary>
		<Routes>
			<Route path="/" element={<Main/>}  />
			<Route path="*" element={<Page404/>}/>
		</Routes>

	</ErrorBoundary>
	);
}

export default App;
