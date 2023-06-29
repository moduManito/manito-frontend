import { styled } from "styled-components";

export const LoginWrapper = styled.div`
    width: 390px;
    max-width: 390px;
    background: #fbfbfb;
    padding: 30px;
`;

export const LoginHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
`;

export const LoginHeaderMainWording = styled.div`
    font-weight: bold;
    font-size: 21px;
`;

export const LoginHeaderSubWording = styled.div`
    font-weight: bold;
    font-size: 15px;
`;

export const LoginBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const LoginImgBox = styled.img`
    width: 270px;
    height: 270px;
    background: rgba(255, 0, 0, 0.1);
    margin-bottom: 60px;
`;

export const LoginInputList = styled.div`
    width: 100%;
    margin-bottom: 30px;
`;

export const LoginInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 12px;
`;

export const LoginInputTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
    margin: 0px 9px 3px 9px;
`;

export const LoginInputText = styled.input`
    background: #f3eeef;
    outline: none;
    border: none;
    border-radius: 100px;
    padding: 15px 24px;
`;

export const LoginInputHint = styled.div`
    font-size: 12px;
    color: #c02e21;
    margin: 6px 9px 0px 9px;
`;

export const LoginSubmitButton = styled.button`
    width: 100%;
    margin-bottom: 9px;
    padding: 18px 21px;
    background: #c02e21;
    outline: none;
    border: none;
    border-radius: 100px;
    font-size: 18px;
    font-weight: bold;
    color: #fbfbfb;
`;

export const LoginAccountFuncWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: calc(100%);
    margin-bottom: 60px;
`;

export const LoginAccountFuncSignup = styled.a`
    padding-right: 12px;
    border-right: 1px solid #b9aeaf;
    color: #b9aeaf;
    text-decoration: none;
`;

export const LoginAccountFuncReset = styled.a`
    padding-left: 12px;
    color: #b9aeaf;
    text-decoration: none;
`;

export const LoginTotalManitoCounterWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginTotalManitoCounterTitle = styled.div`
    color: #332828;
    font-size: 21px;
    font-weight: bold;
`;

export const LoginTotalManitoCounter = styled.div`
    color: #73241d;
    font-size: 36px;
    font-weight: bold;
`;

export const SignupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`;

export const SignupHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;
`;

export const SignupTitle = styled.div`
    font-weight: bold;
    font-size: 36px;
`;

export const SignupBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const SingupInputList = styled.div`
    margin-bottom: 30px;
`;

export const SingupInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 12px;
`;

export const SignupInputTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
    margin: 0px 9px 6px 9px;
`;

export const SignupInputText = styled.input`
    background: #f3eeef;
    outline: none;
    border: none;
    border-radius: 100px;
    padding: 15px 24px;
`;

export const SignupInputHints = styled.div`
    margin: 6px 9px 0px 9px;
`;

export const SignupInputHint = styled.div`
    font-size: 12px;
    color: #c02e21;
`;

export const SignupSubmitButton = styled.button`
    padding: 18px 21px;
    background: #c02e21;
    outline: none;
    border: none;
    border-radius: 100px;
    font-size: 18px;
    font-weight: bold;
    color: #fbfbfb;
`;
