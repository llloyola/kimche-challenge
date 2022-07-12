import React from "react";
import { useQuery } from "@apollo/client";
import GET_COUNTRIES from "../queries/getCountries";

function App() {
	const { loading, error, data } = useQuery(GET_COUNTRIES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;

	return <p>{JSON.stringify(data)}</p>;
}

export default App;
