import React from "react";
import styled from "styled-components/native";


const BGImageContainer = styled.ImageBackground`
  width: 100%;
  height: 550px;
boder:1;
  // position: absolute;
  flex: 1;
`;

const Poster = ({ url, imageStyle }) => {
  return (
  
    <BGImageContainer
      source={{ uri: url }}
   
    />
  );
};


export default Poster;
