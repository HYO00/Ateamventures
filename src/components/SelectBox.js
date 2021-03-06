import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  z-index: 100;
`;
const DropdownList = styled.div`
  display: none;
  border-radius: 4px;
  margin-top: 4px;
`;
const Dropdown = styled.div`
  width: 120px;
  margin: 40px 4px 0;

  &:hover ${DropdownList} {
    display: block;
  }
`;

const Dropdowncontent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: 4px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #090909;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
  &.selected {
    background: #2296f3;
    color: #fff;
  }
`;

const Material = styled.ul`
  border: solid 1px black;
  border-radius: 4px;
  background: #fff;
`;

const List = styled.li`
  padding: 10px;
  list-style: none;
  font-size: 14px;
`;
const Input = styled.input`
  margin-right: 5px;
`;

//const MATERIAL = [알루미늄, 탄소강, 구리, 합금강, 강철];

const SelectBox = ({
  filter,
  handleOnchange,
  selectMaterial,
  selectMethod,
  isCheck,
}) => {
  //console.log(selectMethod, "mnui");

  return (
    <>
      <SelectContainer>
        <Dropdown>
          <Dropdowncontent
            className={
              filter.name === "재료" && selectMaterial.length > 0
                ? "selected"
                : ""
            }
          >
            {filter.name === "재료" && selectMaterial.length > 0 ? (
              <span>
                {filter.name}({selectMaterial.length})
              </span>
            ) : (
              <span>{filter.name}</span>
            )}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path d="M12 21l-12-18h24z" />
            </svg>
          </Dropdowncontent>

          <DropdownList>
            <Material>
              {filter.item &&
                filter.item.map((el, idx) => {
                  return (
                    <List key={idx}>
                      <label htmlFor={idx}>
                        <Input
                          type="checkbox"
                          value={el}
                          checked={
                            !isCheck
                              ? false
                              : selectMaterial.includes(el) ||
                                selectMethod.includes(el)
                              ? true
                              : false
                          }
                          onChange={(e) => handleOnchange(e, idx)}
                        />
                        {el}
                      </label>
                    </List>
                  );
                })}
            </Material>
          </DropdownList>
        </Dropdown>
      </SelectContainer>
    </>
  );
};

export default SelectBox;
