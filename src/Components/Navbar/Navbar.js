import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Sidebar } from "..";
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

const Navbar = () => {
    const [toggleShow, setToggleShow] = useState(false);

    const handleToggleShow = () => setToggleShow(state => !state);

    return (
        <Container>
            <SubContainer>
                <Logo to="/">dolla</Logo>

                <MobileIcon>
                    <FaBars onClick={handleToggleShow} />
                    <Sidebar toggleShow={toggleShow} setToggleShow={setToggleShow} />
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
