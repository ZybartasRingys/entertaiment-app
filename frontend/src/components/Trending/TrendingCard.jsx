import React from "react";
import {
  CardContainer,
  TrendingSection,
  IconDiv,
  TextContainer,
  TitleDiv,
  TextDiv,
  Div,
  IconContainer,
} from "../../components/styles/Trending.styled";

// icons

import { ReactComponent as BookmarkIcon } from "../../assets/icon-bookmark-empty.svg";
import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";

function TrendingCard() {
  return (
    <CardContainer>
      <IconContainer>
        <IconDiv>
          <BookmarkIcon />
        </IconDiv>
      </IconContainer>

      <TextContainer>
        <TextDiv>
          <Div>
            <p>release year</p>
          </Div>
          <Div>
            <p>Movie type</p>
          </Div>
          <Div>
            <p>PG</p>
          </Div>
        </TextDiv>

        <TitleDiv>Title</TitleDiv>
      </TextContainer>
    </CardContainer>
  );
}

export default TrendingCard;
