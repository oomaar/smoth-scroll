import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setToggleShow } from "../../features/sidebarSlice";
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
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const toggle = () => dispatch(setToggleShow({ vlaue: true }));

    const transitionNavbar = () => {
        window.scrollY > 100 ? setShow(true) : setShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    const toggleHome = () => scroll.scrollToTop();

    return (
        <Container className={`${show && 'blackNav'}`}>
            <SubContainer>
                <Logo to="/" onClick={toggleHome}>dolla</Logo>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLink
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            About
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Discover
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            Services
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink
                            to="signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                        >
                            signup
                        </NavLink>
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
