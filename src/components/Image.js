import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const BGImageContainer = styled.ImageBackground`
  width: 100%;
  height: 200px;

  // position: absolute;
  flex: 1;
`;

const Image = ({ url, imageStyle }) => {
  return (
  
    <BGImageContainer
      source={{ uri: url }}
      style={imageStyle}
      // resizeMode="stretch"
    />
  );
};

Image.propTypes = {
  uri: PropTypes.string,
  imageStyle: PropTypes.object,
};

export default Image;
