import cardData from "../../data/cardData.json";
import {
    Container,
    SubContainer,
    Title,
    CardItem,
    Image,
    SubTitle,
    Text,
} from "./styledCard";

const Card = () => {
    return (
        <Container>
            <Title>Our Services</Title>

            <SubContainer>
                {cardData.map(card => (
                    <CardItem key={card.id}>
                        <Image src={card.imgURL} alt={card.imgAlt} />
                        <SubTitle>{card.CardTitle}</SubTitle>
                        <Text>{card.CardText}</Text>
                    </CardItem>
                ))}
            </SubContainer>
        </Container>
    );
};

export default Card;
