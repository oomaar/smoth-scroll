import styled from "styled-components/macro";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

export const Container = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
        pointer-events: none;
    }
`;

export const Background = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    z-index: 0;
`;

export const Feature = styled.div`
    width: 50%;
    height: 50%;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: #fff;

    /* z-index: 3;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center; */
`;

export const Title = styled.h1`
    font-size: clamp(26px, 6vw, 60px);
`;

export const SubTitle = styled.h3`
    font-size: clamp(18px, 4vw, 26px);
    max-width: 600px;
    margin: 24px auto 0;
`;

export const ButtonWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
    transition: all 0.5s ease-in-out;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    transition: all 0.5s ease-in-out;
    margin-left: 8px;
    font-size: 20px;
`;