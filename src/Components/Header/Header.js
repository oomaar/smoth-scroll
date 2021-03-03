import { useState } from "react";
import { Button } from "../../utils/ButtonElement";
import {
    Container,
    Background,
    VideoBg,
    Feature,
    Title,
    SubTitle,
    ButtonWrapper,
    ArrowForward,
    ArrowRight,
} from "./styledHeader";

const Header = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => setHover(state => !state);

    return (
        <Container>
            <Background>
                <VideoBg autoPlay playsInline muted loop>
                    <source src='video/video.mp4' type="video/mp4" />
                </VideoBg>

                <Feature>
                    <Title>I'm Name TypeWriter Effect</Title>
                    <SubTitle>
                        Description: where? who? what? simple effect 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </SubTitle>

                    <ButtonWrapper>
                        <Button 
                            to='signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                        >
                            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </ButtonWrapper>
                </Feature>
            </Background>
        </Container>
    );
};

export default Header;
