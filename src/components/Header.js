import { StyledHeader, Nav, Logo } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import { Container } from "./styles/Container.styled"

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='Logo' />
                    <Button>Try It Free</Button>
                </Nav>
            </Container>
        </StyledHeader>
    )
}