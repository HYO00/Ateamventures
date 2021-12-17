import React from "react";
import styled from "styled-components";
import SelectBox from "../components/SelectBox";

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1280px;
`;
const RequestH1 = styled.h2`
  margin: 40px 0 10px;
`;
const FilterBox = styled.div`
  display: flex;
  flex-direcion: row;
`;

function Request() {
  const FILTER = [
    { id: "1", name: "가공방식", method: "가공방식", item: ["밀링", "선반"] },
    {
      id: "2",
      name: "재료",
      material: "재료",
      item: ["알루미늄", "탄소강", "구리", "합금강", "강철"],
    },
  ];
  return (
    <div>
      <RequestContainer>
        <RequestH1>들어온 요청</RequestH1>
        <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
        <FilterBox>
          {FILTER.map((ele, idx) => (
            <SelectBox filter={ele} key={ele.id} />
          ))}
        </FilterBox>
      </RequestContainer>
    </div>
  );
}

export default Request;
