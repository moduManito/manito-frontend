import { styled } from "styled-components";
import CreateManito from "../Create/CreateManito";

export const MainWrapper = styled.div`
    width: 348px;
    max-width: 390px;
    background: #fbfbfb;
    padding: 30px 21px;
`;

export const MainHeader = styled.div`
    margin: 0px 9px;
    margin-bottom: 30px;
`;

export const MainLogo = styled.div`
    margin-bottom: 6px;
    font-size: 24px;
    font-weight: bold;
`;

export const MainHeaderText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
`;

export const MainBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainCreateManito = styled.button`
    width: 100%;
    height: 188px;
    background: linear-gradient(45deg, #9d1525, #d57644);
    background-size: 348px 188px, 348px 188px;
    border-radius: 12px;
    border: none;
    outline: none;
    box-shadow: 0px 2px 20px #ffbcbc;
    margin-bottom: 30px;
`;

export const MainCreateManitoTitle = styled.div`
    position: relative;
    left: -70px;
    top: -50px;
    color: #fbfbfb;
    font-size: 24px;
`;

export const MainMyManito = styled.div`
    margin: 0 9px;
    width: calc(100% - 18px);
`;

export const MainMyManitoTitle = styled.div`
    margin-bottom: 12px;
    font-size: 21px;
    font-weight: bold;
`;

export const MainMyManitoList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MainMyManitoItem = styled.div`
    width: 300px;
    max-width: 330px;
    padding: 15px;
    margin-bottom: 12px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 2px 12px rgba(102, 102, 86, 0.1);
`;

export const MainMyManitoItemTags = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 9px;
`;

export const MainMyManitoItemTag = styled.div`
    margin-right: 6px;
    padding: 3px 9px;
    background: #9d1525;
    border-radius: 6px;
    color: #fbfbfb;
    font-size: 15px;
`;

export const MainMyManitoItemTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const MainMyManitoItemPeriod = styled.div`
    font-size: 15px;
    color: #676060;
`;

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    min-height: 845px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);
    z-index: 1000;
`;
