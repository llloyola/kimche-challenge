import React from "react";
import PropTypes from "prop-types";
import "./Title.scss";

function Title({ title }) {
	return (
		<div id="title">
			<h2>{title}</h2>
		</div>
	);
}

Title.propTypes = {
	title: PropTypes.string.isRequired
};

export default Title;
