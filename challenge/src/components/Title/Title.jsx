import React from "react";
import PropTypes from "prop-types";

function Title({ title }) {
	return (
		<div>
			<h2>{title}</h2>
		</div>
	);
}

Title.propTypes = {
	title: PropTypes.string.isRequired
};

export default Title;
