import styled from "styled-components"

export const StyledHeader = styled.header`
    /* importing "props" and accessing .bg on props */
    /* background-color: ${props => props.bg}}; */
    background-color: ${({ bg }) => bg};
    padding: 40px 0;
`