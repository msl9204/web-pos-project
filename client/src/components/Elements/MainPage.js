import React from "react";
import MainHeader from "./Header/MainHeader";
import MainContainer from "./MainContainer/MainContainer";
import MainSiderBar from "./SideBar/MainSideBar";
import styled from "styled-components";

const StyledPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
`;

const StyledMiddleBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function MainPage() {
    return (
        <StyledPageContainer>
            <MainHeader />
            <StyledMiddleBox>
                <MainSiderBar />
                <MainContainer />
            </StyledMiddleBox>
        </StyledPageContainer>
    );
}
