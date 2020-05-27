import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 200px;
    height: 800px;
    margin-right: 50px;
`;

export default function MainSideBar() {
    return (
        <React.Fragment>
            <StyledContainer>
                <div>매출정보</div>
                <div>거래처정보</div>
                <div>상품정보</div>
                <div>매입</div>
                <div>발주</div>
            </StyledContainer>
        </React.Fragment>
    );
}
