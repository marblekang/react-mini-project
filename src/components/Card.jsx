import React from "react";
import { ContentBox } from "../style/CardStyle";

export const Card = ({ news }) => {
  return (
    <>
      {Boolean(news)
        ? news.map((items, idx) => {
            return (
              <ContentBox key={items.abstract + idx}>
                {items.headline.main}
                <br />
                {items.abstract}
                <br />
                <a href={items.web_url}>Detail</a>
              </ContentBox>
            );
          })
        : null}
    </>
  );
};
