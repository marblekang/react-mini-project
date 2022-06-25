import React from "react";
import { Background, LoadingText } from "../style/LoadingStyle";
import Spinner from "../assets/spinner.gif";

export const Loading = () => {
  return (
    <Background>
      <lodaidngText></lodaidngText>
      <img src={Spinner} alt="로딩중" width="5%" />
    </Background>
  );
};
