import React, { useState } from "react";
import { useQuery } from "@apollo/client";
// import groupResults from "./utils/groupResults";
import GET_COUNTRIES from "./queries/getCountries";
import Title from "./components/Title/Title";
import Inputs from "./components/Inputs/Inputs";
import Result from "./components/Result/Result";

function App() {
	const { data, loading, error } = useQuery(GET_COUNTRIES);
	const [inputs, setInputs] = useState({ input: "", byContinent: true });

	const setInput = (input) => {
		setInputs({ ...inputs, input });
	};

	const setByContient = () => {
		setInputs({ ...inputs, byContinent: !inputs.byContinent });
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;

	return (
		<>
			<Title title="Country Search" />
			<Inputs setInput={(input) => setInput(input)} setByContinent={() => setByContient()} />
			<Result countries={data.countries} inputs={inputs} />
		</>
	);
}

export default App;
