import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SelectBox from "../components/SelectBox";
import RequestCard from "../components/RequestCard";

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

const RequestCardWraaper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

function Request() {
  const [data, setData] = useState([]);
  const [filteredItem, setFilterdItem] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("http://localhost:4000/requests", {
        withCredentials: true,
      });
      setData(result.data);
    };
    getData();
    select();
  }, []);
  // console.log(data, "data");
  const select = () => {
    let a = data.filter((el) => {
      console.log(el.method);
      return el.method.includes("밀링");
    });
    setData(a);
  };

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
        </FilterBox>
        <RequestCardWraaper>
          {data &&
            data.map((card, idx) => {
              return <RequestCard />;
            })}
        </RequestCardWraaper>
      </RequestContainer>
    </div>
  );
}

export default Request;
