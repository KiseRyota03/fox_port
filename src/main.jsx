import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";

const styles = {
	global: (props) => ({
		body: {
			bg: mode("gray.100", "#EFFFEE")(props),
			color: mode("gray.800", "#1f2424")(props),
			fontFamily: "'Alata', sans-serif",
			textColor: mode("#4C704E", "#4C704E")(props), // Add this line for text color

			
		},
	}),
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);