import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  z-index: 100;
`;
const DropdownList = styled.div`
  border-radius: 4px;
  margin-top: 4px;
  opacity: 0;
  visibility: hidden;
`;
const Dropdown = styled.div`
  width: 120px;
  margin: 40px 4px 0;

  &:hover ${DropdownList} {
    opacity: 1;
    visibility: visible;
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

const SelectBox = ({ filter, handleOnchange, selectItem }) => {
  return (
    <>
      <SelectContainer>
        <Dropdown>
          <Dropdowncontent>
            {filter.name === "재료" && selectItem > 0 ? (
              <span>
                {filter.name}({selectItem})
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
                  // console.log(el);
                  return (
                    <List>
                      <label htmlFor={idx}>
                        <Input
                          type="checkbox"
                          value={el}
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
