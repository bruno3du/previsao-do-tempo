/** @format */

import { createContext, useState } from 'react';

export const ContextTemp = createContext();

export default function ContextProvider({ children }) {
	const [textInput, setTextInput] = useState("");
	
	return (
		<ContextTemp.Provider value={[textInput, setTextInput]}>
			{children}
		</ContextTemp.Provider>
	);
}
