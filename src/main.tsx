import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppEntry } from "./appEntry";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
	const root = createRoot(rootElement);

	root.render(
		<StrictMode>
			<AppEntry />
		</StrictMode>,
	);
}
