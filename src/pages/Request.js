import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SelectBox from "../components/SelectBox";
import RequestCard from "../components/RequestCard";
import Toggle from "../components/Toggle";

const RequestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  max-width: 1280px;
`;
const RequestH1 = styled.h2`
  margin: 40px 0 10px;
`;
const FilterBox = styled.div`
  display: flex;
  flex-direcion: row;
  justify-content: space-between;
  align-item: center;
  height: 126px;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-item: center;
`;

const ResetBtnBox = styled.div`
  display: flex;
`;

const ResetBtn = styled.button`
  background: #fff;
  border-style: none;
  margin-left: 12px;
  cursor: pointer;
`;

const RequestCardWraaper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const NoRquest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
`;

function Request() {
  const [data, setData] = useState([]);
  const [isOn, setIsOn] = useState(false);
  const [filteredItem, setFilterdItem] = useState([]);
  const [selectItem, setSelectItem] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("http://localhost:4000/requests", {
        withCredentials: true,
      });
      setData(result.data);
      setFilterdItem(result.data);
    };
    getData();
  }, []);
  let selectNum = 0;
  const handleOnchange = (e, idx) => {
    console.log(e.target.value, e.currentTarget.checked, selectNum);

    if (e.currentTarget.checked) {
      selectNum = +1;
      setSelectItem(selectNum);
    } else {
      selectItem = -1;
      setSelectItem(selectNum);
    }

    let filterd = filteredItem.filter((el) => {
      return (
        el.method.includes(e.target.value) ||
        el.material.includes(e.target.value)
      );
    });
    setFilterdItem(filterd);
    console.log(filterd, "data");
  };

  const handleResetBtn = (e) => {
    console.log(e);
    setFilterdItem(data);
  };

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
          <SelectWrapper>
            {FILTER.map((ele, idx) => (
              <SelectBox
                filter={ele}
                key={ele.id}
                handleOnchange={handleOnchange}
                selectItem={selectItem}
              />
            ))}
            {filteredItem.length < 6 ? (
              <>
                <ResetBtn onClick={(e) => handleResetBtn(e)}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.645 2.35C12.195 0.9 10.205 0 7.995 0C3.575 0 0.00500488 3.58 0.00500488 8C0.00500488 12.42 3.575 16 7.995 16C11.725 16 14.835 13.45 15.725 10H13.645C12.825 12.33 10.605 14 7.995 14C4.685 14 1.995 11.31 1.995 8C1.995 4.69 4.685 2 7.995 2C9.655 2 11.135 2.69 12.215 3.78L8.995 7H15.995V0L13.645 2.35Z"
                      fill="#2196F3"
                    />
                  </svg>
                  필터링 리셋
                </ResetBtn>
              </>
            ) : null}
          </SelectWrapper>

          <SelectWrapper>
            <Toggle isOn={isOn} setIsOn={setIsOn} />
          </SelectWrapper>
        </FilterBox>
        {filteredItem.length === 0 ? (
          <NoRquest>
            <p>조건에 맞는 견적 요청이 없습니다.</p>
          </NoRquest>
        ) : (
          <>
            <RequestCardWraaper>
              {isOn
                ? filteredItem
                    .filter((card) => card.status === "상담중")
                    .map((card, idx) => {
                      return <RequestCard card={card} key={idx} />;
                    })
                : filteredItem.map((card, idx) => {
                    return <RequestCard card={card} key={idx} />;
                  })}
            </RequestCardWraaper>
          </>
        )}
      </RequestContainer>
    </div>
  );
}

export default Request;
