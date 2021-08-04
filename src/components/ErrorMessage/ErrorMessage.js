import React from "react";
import H3 from "./styled";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => <H3>{message}</H3>;

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
