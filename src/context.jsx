import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
	const prefersDarkMode = window.matchMedia(
		"(prefers-color-scheme:dark)"
	).matches;
	return localStorage.getItem("darkMode") ?? prefersDarkMode.toString();
};

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(
		JSON.parse(getInitialDarkMode())
	);

	const toggleDarkTheme = () => {
		const newColorMode = !isDarkMode;
		setIsDarkMode(newColorMode);
		localStorage.setItem("darkMode", newColorMode);
	};

	useEffect(() => {
		document.body.classList.toggle("dark-mode", isDarkMode);
	}, [isDarkMode]);

	return (
		<AppContext.Provider
			value={{ isSidebarOpen, setIsSidebarOpen, isModalOpen, setIsModalOpen }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => useContext(AppContext);
