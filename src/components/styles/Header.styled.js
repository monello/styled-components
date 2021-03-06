import styled from "styled-components"

export const StyledHeader = styled.header`
    /* importing "props" and accessing .bg on props */
    /* background-color: ${props => props.bg}}; */
    /* using props descructuring instead */
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
`

// The Nav and Logo styles are added to this Header.styles.js, because we know it will only be used in the Header section of the App
export const Nav = styled.nav`
display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`

export const Logo = styled.img`
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 40px
    }
`

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 40px 0 30px;
    }
`