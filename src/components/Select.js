import React from 'react';
import styled from "styled-components";


const SelectContainer = styled.div`
    display:flex;
  
`;
const DropdownList = styled.div`
    border-radius: 4px;
    border: 1px solid #090909;
    margin-top:4px;
    opacity:0;
    visibility: hidden;
    
`;
const Dropdown = styled.div`
    width: 100px;
    
    &:hover ${DropdownList}{
        opacity:1;
        visibility: visible;
    }
`;

const Dropdowncontent = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #090909;
    font-size: 14px;
    cursor: pointer;
    
`;

const List = styled.li`
    padding: 10px;
    list-style: none;
    font-size: 14px;
   
    
`;
const Label = styled.label`
    margin-right:5px;
`;
const Select = (props) => {

    return(
        <>
        <SelectContainer>
        <Dropdown>
        <Dropdowncontent>
                <span>가공방식</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
            </Dropdowncontent>
            <DropdownList>
                <ul>
                <List><Label for="one"><input type="checkbox" />밀링</Label></List>
                <List><Label for="one"><input type="checkbox" />선반</Label></List>
                </ul>
            </DropdownList>
            <Dropdowncontent>
                <span>재료</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
            </Dropdowncontent>
            <DropdownList>
                <ul>
                <List><Label for="one"><input type="checkbox" />알루미늄</Label></List>
                <List><Label for="one"><input type="checkbox" />탄소강</Label></List>
                <List><Label for="one"><input type="checkbox" />구리</Label></List>
                <List><Label for="one"><input type="checkbox" />합금강</Label></List>
                <List><Label for="one"><input type="checkbox" />강철</Label></List>
                </ul>
            </DropdownList>
        </Dropdown></SelectContainer>
        </>
    )
}

export default Select;