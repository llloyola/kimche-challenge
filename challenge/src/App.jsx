import React from "react";
import { useQuery } from "@apollo/client";
import groupResults from "./utils/groupResults";
import GET_COUNTRIES from "./queries/getCountries";

function App() {
	const { loading, error, data } = useQuery(GET_COUNTRIES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;

	return <p>{JSON.stringify(groupResults(data.countries, true))}</p>;
}

export default App;
