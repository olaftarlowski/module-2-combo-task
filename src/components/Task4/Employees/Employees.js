import React from "react";
import EmployeesItem from "./EmployeesItem";
import styled from "styled-components";

const USER_DATA = [
  {
    id: 1,
    name: "Andrzej",
    surname: "Beton",
    age: 29,
    characterClass: "warrior",
    ipAdress: "228.212.15.84",
  },
  {
    id: 2,
    name: "Zbigniew",
    surname: "Beton",
    age: 29,
    characterClass: "priest",
    ipAdress: "228.212.15.84",
  },
  {
    id: 3,
    name: "James",
    surname: "Cottonworld",
    age: 68,
    characterClass: "paladin",
    ipAdress: "152.163.218.190",
  },
  {
    id: 4,
    name: "Paula",
    surname: "Brewka",
    age: 18,
    characterClass: "rogue",
    ipAdress: "144.92.172.65",
  },
  {
    id: 5,
    name: "Rafał",
    surname: "Belka",
    age: 13,
    characterClass: "mage",
    ipAdress: "74.134.132.58",
  },
];

const EmployeesWrapper = styled.div`
  font-size: 0.7em;
  margin: 30px 0;
  text-align: left;
  width: 70%;
  border: 1px solid #fff;
  border-radius: 16px;

  .employeesWrapper__headline {
    text-align: center;
  }
`;

const Employees = () => {
  return (
    <EmployeesWrapper>
      <h3 className="employeesWrapper__headline">Current dungeon party</h3>
      {USER_DATA.map((item) => {
        return (
          <EmployeesItem
            key={item.id}
            name={item.name}
            surname={item.surname}
            age={item.age}
            characterClass={item.characterClass}
            ipAdress={item.ipAdress}
          />
        );
      })}
    </EmployeesWrapper>
  );
};

export default Employees;
