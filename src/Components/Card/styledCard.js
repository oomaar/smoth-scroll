import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 1800px;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding: 50px;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const SubContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    align-items: center;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        padding: 0 20px;
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const CardItem = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: #000;

    &:hover {
        transform: scale(1.03);
    }
`;

export const Image = styled.img` 
    width: 160px;
    height: 160px;
    margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const Text = styled.p`
    font-size: 1rem;
    text-align: center;
`;

