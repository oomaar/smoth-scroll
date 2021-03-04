import { Button } from "../../utils/ButtonElement";
import {
    Container,
    SubContainer,
    Row,
    Column,
    TextWrapper,
    TopLine,
    Title,
    SubTitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img,
} from "./styledInfo";

import infoData from "../../data/infoData.json";

const InfoSection = () => {
    return (
        <>
            {infoData.map(item => (
                <Container key={item.id} lightBg={item.lightBg} id={item.id}>
                    <SubContainer>
                        <Row imgStart={item.imgStart}>

                            <Column>
                                <TextWrapper>
                                    <TopLine>{item.topline}</TopLine>
                                    <Title lightText={item.lightText}>{item.title}</Title>
                                    <SubTitle darkText={item.darkText}>{item.description}</SubTitle>
                                    <BtnWrap>
                                        <Button
                                            to="home"
                                            smooth={true}
                                            spy={true}
                                            duration={500}
                                            exact="true"
                                            offset={-80}
                                            primary={item.primary ? 1 : 0}
                                            dark={item.dark ? 1 : 0}
                                        >
                                            {item.buttonLabel}
                                        </Button>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column>

                            <Column2>
                                <ImgWrap>
                                    <Img src={item.img} alt={item.alt} />
                                </ImgWrap>
                            </Column2>

                        </Row>
                    </SubContainer>
                </Container>
            ))}
        </>
    );
};

export default InfoSection;
