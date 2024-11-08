import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
	return (
		<>
			<Header />
			<div className="bg-main">
				<Outlet />
			</div>
		</>
	);
};

export default App;
