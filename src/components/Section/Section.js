import React from "react";
import { Section, H2 } from "./styled";
import PropTypes from "prop-types";

const SectionWithTitle = ({ title, children }) => (
  <Section>
    <H2>{title}</H2>
    {children}
  </Section>
);

SectionWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionWithTitle;
