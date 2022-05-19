import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faShareNodes,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const CardWrapper = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  max-width: 345px;
  text-align: left;

  img {
    color: rgba(0, 0, 0, 0.87);
    height: 194px;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    object-fit: cover;
  }

  > div {
    padding: 16px;
  }
`;

const CardHead = styled.div`
  display: flex;
  flex-direction: row;

  .cardhead__avatar {
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    flex: 0 0 auto;
    margin-right: 16px;

    div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      font-size: 1.25rem;
      line-height: 1;
      border-radius: 50%;
      overflow: hidden;
      user-select: none;
      color: #fff;
      background-color: #f44336;
    }
  }

  .cardhead__infos {
    color: rgba(0, 0, 0, 0.87);
    flex: 1 1 auto;

    span {
      color: rgba(0, 0, 0, 0.87);
      margin: 0;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.43;
      letter-spacing: 0.01071em;
      display: block;
    }
  }
`;

const CardControls = styled.div`
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    flex: 0 0 auto;
    font-size: 1.5rem;
    padding: 8px;
    border-radius: 50%;
    overflow: visible;
    color: rgba(0, 0, 0, 0.54);
    transform: rotate(0deg);
    transition: 0.2s ease-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }

    svg {
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      text-align: center;
      color: rgba(0, 0, 0, 0.54);
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      flex-shrink: 0;
      font-size: 1.5rem;
    }
  }

  .cardcontrols__expand-btn {
    margin-left: auto;
    transform: ${(props) => (props.expand ? `rotate(180deg)` : "rotate(0deg)")};
  }
`;

const CardDescription = styled.div`
  p {
    margin: 0;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const CardDescriptionCollapse = styled.div``;

const Card = ({ title, intro, content }) => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand((e) => !e);
  };

  const date = new Date("September 14, 2016");
  const [month, day, year] = [
    new Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <CardWrapper>
      <CardHead>
        <div className="cardhead__avatar">
          <div>R</div>
        </div>
        <div className="cardhead__infos">
          <span>{title}</span>
          <span>
            {month} {day}, {year}
          </span>
        </div>
      </CardHead>
      <img
        src="https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/71/527501179e9319cf888f/letterbox_Summer_20paella.jpg"
        alt="Shrimp and Chorizo Paella"
      />

      <CardDescription>
        <p>{intro}</p>
      </CardDescription>
      <CardControls expand={expand}>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShareNodes} />
        </button>
        <button className="cardcontrols__expand-btn" onClick={expandHandler}>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </CardControls>
      {expand ? (
        <CardDescriptionCollapse>tu bedzie kolaps</CardDescriptionCollapse>
      ) : (
        ""
      )}
    </CardWrapper>
  );
};

export default Card;
