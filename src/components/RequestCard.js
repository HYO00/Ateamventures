import React from "react";
import styled from "styled-components";

const RequestCardContainer = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 366px;
  height: 356px;
  padding: 24px 16px;
  &:hover {
    border: 2px solid #2196f3;
  }
`;

const RequestInfo = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;

const RequestInfoBox = styled.div`
  margin-bottom: 24px;
`;

const TitleNstatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

const Status = styled.div`
  font-size: 12px;
  border: 1px solid #ffa000;
  border-radius: 12px;
  color: #ffa000;
  padding: 4px;
`;

const Client = styled.div`
  font-size: 14px;
`;

const Due = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
`;

const RequestContents = styled.div`
  margin: 28px 0;
`;

const ContentBox = styled.div`
  display: flex;
  font-size: 16px;
`;
const DetailTitle = styled.div`
  margin: 0 32px 10px 0;
  width: 70px;
`;

const DetailValue = styled.div`
  font-weight: 600;
`;
const RequestBtnBox = styled.div``;

const RequestView = styled.button`
  background-color: #2196f3;
  border-radius: 4px;
  border-style: none;
  padding: 8px 14px;
  color: white;
  font-size: 14px;
  margin-right: 10px;
  cursor: pointer;
`;

const RequestChat = styled(RequestView)`
  background-color: #fff;
  border: 1px solid #2196f3;
  color: #2196f3;
`;

const RequestCard = ({ card }) => {
  return (
    <RequestCardContainer>
      <RequestInfo>
        <RequestInfoBox>
          <TitleNstatus>
            <Title>{card.title}</Title>
            {card.status === "상담중" ? <Status>{card.status}</Status> : null}
          </TitleNstatus>
          <Client>{card.client}</Client>
        </RequestInfoBox>
        <Due>{card.due} 납기</Due>
      </RequestInfo>
      <RequestContents>
        <ContentBox>
          <DetailTitle>도면개수</DetailTitle>
          <DetailValue>{card.count}</DetailValue>
        </ContentBox>
        <ContentBox>
          <DetailTitle>총 수량</DetailTitle>
          <DetailValue>{card.amount}</DetailValue>
        </ContentBox>
        <ContentBox>
          <DetailTitle>가공방식</DetailTitle>
          {card.method.map((el, idx, arr) => {
            return idx !== arr.length - 1 ? (
              <DetailValue>{el},</DetailValue>
            ) : (
              <DetailValue>{el}</DetailValue>
            );
          })}
        </ContentBox>
        <ContentBox>
          <DetailTitle>재료</DetailTitle>
          {card.material.map((el, idx, arr) => {
            return idx !== arr.length - 1 ? (
              <DetailValue>{el},</DetailValue>
            ) : (
              <DetailValue>{el}</DetailValue>
            );
          })}
        </ContentBox>
      </RequestContents>
      <RequestBtnBox>
        <RequestView>요청 내역 보기</RequestView>
        <RequestChat>채팅 하기</RequestChat>
      </RequestBtnBox>
    </RequestCardContainer>
  );
};

export default RequestCard;
