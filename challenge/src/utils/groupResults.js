/**
 * Function passed to reduce in groupResults when results are grouped by continents
 * @param    {Object} prevGroup  		Continents Object in last reduce step.
 * @param    {Object} currCountry  	Current country being read.
 * @return   {Object}         			Object with continents as keys and respective countries as values.
 */
const groupByContinent = (prevGroup, currCountry) => {
	const continents = { ...prevGroup };
	// Check if country's continent is already a key
	if (currCountry.continent.name in continents) {
		// If true, the we just extend the value
		continents[currCountry.continent.name] = [
			currCountry,
			...continents[currCountry.continent.name]
		];
	} else {
		// If false, we create an array including the current country
		// and we assign to it's continent key
		continents[currCountry.continent.name] = [currCountry];
	}
	return continents;
};

/**
 * Function passed to reduce in groupResults when results are grouped by languages
 * @param    {Object} prevGroup  		Languages Object in last reduce step.
 * @param    {Object} currCountry  	Current language being read.
 * @return   {Object}         			Object with languages as keys and respective countries as values.
 */
const groupByLanguage = (prevGroup, currCountry) => {
	const languages = { ...prevGroup };
	// A country may be linked to more than one language
	// So we iterate over each language to check if there's
	// any need of adding a new key
	currCountry.languages.forEach((lang) => {
		if (lang.name in languages) {
			// If true, the we just extend the value
			languages[lang.name] = [currCountry, ...languages[lang.name]];
		} else {
			// If false, we create an array including the current country
			// and we assign to it's language key
			languages[lang.name] = [currCountry];
		}
	});
	return languages;
};

/**
 * Sorts countries by name
 * @param    {Object} groups  			Countries grouped by contient xor language.
 */
const sortCountries = (groups) => {
	Object.keys(groups).forEach((group) =>
		groups[group].sort((countryA, countryB) => {
			if (countryA.name < countryB.name) return -1;
			if (countryA.name > countryB.name) return 1;
			return 0;
		})
	);
};

/**
 * Transforms array of countries into an object with languages or continents
 * as keys and sorted arrays including their respective countries as values.
 * @param   {Array} 		countries
 * @param   {Boolean} 	byContinent  	Group by contient xor language.
 * @return 	{Object}
 */
const groupResults = (countries, byContinent) => {
	const result = countries.reduce(
		(prevGroup, currCountry) =>
			(byContinent ? groupByContinent : groupByLanguage)(prevGroup, currCountry),
		{}
	);

	sortCountries(result);

	return result;
};

export default groupResults;
