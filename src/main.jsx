import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/style.scss";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import Assessment from "./pages/Assessment.jsx";
import Results from "./pages/Results.jsx";
import Guide from "./pages/Guide.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/" element={<Home />} />
			<Route path="/assess" element={<Assessment />} />
			<Route path="/result" element={<Results />} />
			<Route path="/guide" element={<Guide />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/auth" element={<Auth />} />
		</Route>
	),
	{
		future: {
			v7_relativeSplatPath: true,
			v7_fetcherPersist: true,
			v7_normalizeFormMethod: true,
			v7_partialHydration: true,
			v7_skipActionStatusRevalidation: true,
			v7_skipActionErrorRevalidation: true,
		},
	}
);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider
			router={router}
			future={{
				v7_startTransition: true,
			}}
		>
			<App />
		</RouterProvider>
	</StrictMode>
);
