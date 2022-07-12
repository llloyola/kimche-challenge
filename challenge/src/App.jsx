import React from "react";
import { useQuery } from "@apollo/client";
// import groupResults from "./utils/groupResults";
import GET_COUNTRIES from "./queries/getCountries";
import Title from "./components/Title/Title";

function App() {
	const { loading, error } = useQuery(GET_COUNTRIES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;

	return <Title title="Country Search" />;
}

export default App;
