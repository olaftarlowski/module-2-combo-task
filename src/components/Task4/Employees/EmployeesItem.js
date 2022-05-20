import React, { useState } from "react";
import styled from "styled-components";

const RowWrapper = styled.div`
  border-top: 1px solid #fff;
  display: flex;
  flex-direction: row;

  div {
    box-sizing: border-box;
    padding: 4px 24px;
    width: 50%;
  }
`;

const PrimaryInfoWrapper = styled.div`
  border-right: 1px solid #fff;
`;

const SecondaryInfoWrapper = styled.div`
  transition: 0.2s ease-out;
  cursor: ${(props) => (props.isVisible ? "" : "default")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};

  ul {
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const EmployeesItem = ({ name, surname, age, characterClass, ipAdress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const changeVisbilityHandler = () => {
    setIsVisible((e) => !e);
  };
  return (
    <RowWrapper>
      <PrimaryInfoWrapper onClick={changeVisbilityHandler}>
        <p>{name}</p>
        <p>{surname}</p>
      </PrimaryInfoWrapper>
      <SecondaryInfoWrapper isVisible={isVisible}>
        <ul>
          <li>
            <b>Age:</b> {age}
          </li>
          <li>
            <b>Class:</b> {characterClass}
          </li>
          <li>
            <b>IP:</b> {ipAdress}
          </li>
        </ul>
      </SecondaryInfoWrapper>
    </RowWrapper>
  );
};

export default EmployeesItem;
