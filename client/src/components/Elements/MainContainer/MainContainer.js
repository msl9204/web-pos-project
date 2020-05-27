import React from "react";
import styled from "styled-components";

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 800px;
    height: 800px;
`;

const StyledTabContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledTabs = styled.div`
    border: 1px solid black;
    width: 70px;
    height: 30px;
`;

const StyledInfoContents = styled.article`
    border: 1px solid black;
    width: inherit;
    height: inherit;
    margin: 10px 0 0 0;

    align-self: center;
    justify-self: center;
`;

export default function MainContainer() {
    return (
        <StyledMainContainer>
            <StyledTabContainer>
                <StyledTabs>탭1</StyledTabs>
                <StyledTabs>탭2</StyledTabs>
                <StyledTabs>탭3</StyledTabs>
                <StyledTabs>탭4</StyledTabs>
            </StyledTabContainer>

            <StyledInfoContents>컨텐츠</StyledInfoContents>
        </StyledMainContainer>
    );
}
