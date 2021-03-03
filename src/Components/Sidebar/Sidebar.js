import {
    Container,
    Close,
    Icon,
    SubContainer,
    SideMenu,
    SideLink,
    SideButton,
    SideBtn,
} from "./styledSidebar";

const Sidebar = ({ toggleShow, toggle }) => {
    return (
        <Container show={toggleShow}>
            <Icon onClick={toggle}>
                <Close />
            </Icon>

            <SubContainer>
                <SideMenu>
                    <SideLink to="about">About</SideLink>
                    <SideLink to="discover">Discover</SideLink>
                    <SideLink to="services">Services</SideLink>
                    <SideLink to="signup">SignUp</SideLink>
                </SideMenu>

                <SideButton>
                    <SideBtn to="/signin">Sign In</SideBtn>
                </SideButton>
            </SubContainer>
        </Container>
    );
};

export default Sidebar;
