import { FaBars } from "react-icons/fa";
import {
    Container,
    SubContainer,
    Logo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavButton,
    NavBtn,
} from "./styledNavbar";

const Navbar = ({ toggle }) => {
    return (
        <Container>
            <SubContainer>
                <Logo to="/">dolla</Logo>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLink to="about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="discover">Discover</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="services">Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="signup">SignUp</NavLink>
                    </NavItem>
                </NavMenu>

                <NavButton>
                    <NavBtn to="/signin">Sign In</NavBtn>
                </NavButton>
            </SubContainer>
        </Container>
    );
};

export default Navbar;
