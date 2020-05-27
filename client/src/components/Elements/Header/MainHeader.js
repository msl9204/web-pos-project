import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid black;
    max-width: 1080px;
`;

export default function MainHeader() {
    return (
        <React.Fragment>
            <StyledHeader>header-info 입니다.</StyledHeader>
        </React.Fragment>
    );
}
