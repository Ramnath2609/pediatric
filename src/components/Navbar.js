import styled from "styled-components"

const Header = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const HeaderText = styled.h1`
    font-weight: 400;
`;


export function Navbar() {
    return (
        <Header>
            <HeaderText>Welcome to our Pediatric Question-Answer Virtual Care Portal</HeaderText>
        </Header>
    )
}