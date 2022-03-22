import styled from "styled-components"

export const StyledHeader = styled.header`
    /* importing "props" and accessing .bg on props */
    /* background-color: ${props => props.bg}}; */
    /* using props descructuring instead */
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
    color: ${({ textColor }) => textColor}
`