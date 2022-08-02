import React from "react";
import { ReactComponent as Posticon } from "../assets/posticon.svg";
import {
  Baseline,
  DividingLine,
  PostDiv,
  SpanPost,
} from "../styles/HeaderBaseline_style";

function HeaderBaseline() {
  return (
    <>
      <Baseline />
      <DividingLine>
        <PostDiv>
          <Posticon />
          <SpanPost>게시물</SpanPost>
        </PostDiv>
      </DividingLine>
    </>
  );
}

export default HeaderBaseline;
