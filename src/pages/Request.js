import React from 'react';
import styled from "styled-components";

const RequestContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:0 auto;
    max-width:1280px
    `

    const RequestH1 = styled.h2`
    margin: 40px 0 10px;
    `

function Request() {
    return (
        <div>
            <RequestContainer>
                <RequestH1>들어온 요청</RequestH1>
                <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
            </RequestContainer>
        </div>
    );
}

export default Request;