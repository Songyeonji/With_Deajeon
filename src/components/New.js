import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const BGImageContainer = styled.ImageBackground`
  width: 150px;
  height: 150px;
  // position: absolute;
  flex: 1;
`;

const New = ({ url, imageStyle }) => {
  return (
    <BGImageContainer
      source={{ uri: url }}
      style={imageStyle}
      // resizeMode="stretch"
    />
  );
};

New.propTypes = {
  uri: PropTypes.string,
  imageStyle: PropTypes.object,
};

export default New;
