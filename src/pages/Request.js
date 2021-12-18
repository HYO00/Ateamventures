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
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("http://localhost:4000/requests", {
        withCredentials: true,
      });
      setData(result.data);
    };
    getData();
  }, []);

  const handleOnchange = (e, idx) => {
    console.log(e.target.value, e.currentTarget.checked);

    let filterd = data.filter((el) => {
      return (
        el.method.includes(e.target.value) ||
        el.material.includes(e.target.value)
      );
    });
    setData(filterd);
    console.log(filterd, "data");
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
          {FILTER.map((ele, idx) => (
            <SelectBox
              filter={ele}
              key={ele.id}
              handleOnchange={handleOnchange}
            />
          ))}
          <Toggle isOn={isOn} setIsOn={setIsOn} />
        </FilterBox>
        {data.length === 0 ? (
          <NoRquest>
            <p>조건에 맞는 견적 요청이 없습니다.</p>
          </NoRquest>
        ) : (
          <>
            <RequestCardWraaper>
              {isOn
                ? data
                    .filter((card) => card.status === "상담중")
                    .map((card, idx) => {
                      return <RequestCard card={card} key={idx} />;
                    })
                : data.map((card, idx) => {
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
