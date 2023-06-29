import React, { useState, useEffect } from "react";
import axios from "../../api/axios2";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/giftbox.json";
import {
    ErrMsgBox,
    Modal,
    SignupHeader,
    SignupBody,
    SignupInputHints,
    SignupInputHint,
    SignupInputText,
    SignupInputTitle,
    SignupTitle,
    SignupWrapper,
    SingupInputList,
    SingupInputWrap,
    SignupSubmitButton,
    SignupLinkSignin,
} from "./style";

export default function AuthSingUp() {
    const [errMsg, setErrMsg] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [lenPassword, setLenPassword] = useState(false);
    const [effPassword, setEffPassword] = useState(false);
    const [eqPassword, setEqPassword] = useState(false);
    const [visiModal, setVisiModal] = useState({ display: "none" });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        checkLenPassword(e.target.value);
        checkEffPassword(e.target.value);
        checkEqPassword(e.target.value, confirmPassword);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        checkEqPassword(password, e.target.value);
    };

    function checkLenPassword(pw) {
        if (pw.length < 8) {
            setLenPassword(false);
        } else {
            setLenPassword(true);
        }
    }
    function checkEffPassword(pw) {
        let num = pw.search(/[0-9]/g);
        let eng = pw.search(/[a-z]/gi);
        let spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        if (pw.search(/\s/) != -1) {
            setEffPassword(false);
        } else if (
            (num < 0 && eng < 0) ||
            (eng < 0 && spe < 0) ||
            (spe < 0 && num < 0)
        ) {
            setEffPassword(false);
        } else {
            setEffPassword(true);
        }
    }

    function checkEqPassword(pw, cpw) {
        if (pw != "" && cpw != "" && pw == cpw) {
            setEqPassword(true);
        } else {
            setEqPassword(false);
        }
    }

    function nullCheck(value) {
        if (
            value == "" ||
            value == null ||
            value == undefined ||
            (value != null &&
                typeof value == "object" &&
                !Object.keys(value).length)
        ) {
            return false;
        } else {
            return true;
        }
    }

    async function postUserRegister() {
        if (
            nullCheck(email) &&
            nullCheck(name) &&
            nullCheck(password) &&
            lenPassword &&
            effPassword &&
            eqPassword
        ) {
            setVisiModal({ display: "flex" });
            const formData = {
                email: email,
                name: name,
                password: password,
            };
            axios
                .post("user/register/", formData)
                .then((response) => {
                    console.log("Response", response);
                    if (response.data.message == "회원가입 성공") {
                        alert("회원가입을 축하합니다 :) 로그인 해주세요! ");
                        navigate("/login");
                    }
                })
                .catch((error) => {
                    console.log("Error", error);
                    setVisiModal({ display: "none" });
                    setErrMsg("* 이미 가입된 이메일입니다.");
                });
        } else {
            setVisiModal({ display: "none" });
            console.log("Fail");
        }
    }

    return (
        <SignupWrapper>
            <Modal style={visiModal}>
                <Lottie options={defaultOptions} height={240} width={240} />
            </Modal>
            <SignupHeader>
                <SignupTitle>회원가입</SignupTitle>
            </SignupHeader>
            <SignupBody>
                {errMsg === "" ? (
                    <ErrMsgBox style={{ display: "none" }}>{errMsg}</ErrMsgBox>
                ) : (
                    <ErrMsgBox>{errMsg}</ErrMsgBox>
                )}
                <SingupInputList>
                    <SingupInputWrap>
                        <SignupInputTitle>이름</SignupInputTitle>
                        <SignupInputText
                            placeholder="이름을 입력해주세요."
                            onChange={handleNameChange}
                            required
                        ></SignupInputText>
                    </SingupInputWrap>
                    <SingupInputWrap>
                        <SignupInputTitle>메일</SignupInputTitle>
                        <SignupInputText
                            type="email"
                            placeholder="메일을 입력해주세요."
                            onChange={handleEmailChange}
                            required
                        ></SignupInputText>
                    </SingupInputWrap>
                    <SingupInputWrap>
                        <SignupInputTitle>비밀번호</SignupInputTitle>
                        <SignupInputText
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            onChange={handlePasswordChange}
                            required
                        ></SignupInputText>
                        <SignupInputHints>
                            {password.length === 0 ? (
                                ""
                            ) : lenPassword ? (
                                <SignupInputHint style={{ color: "#1E4154" }}>
                                    ︎✓ 8자 이상 입력
                                </SignupInputHint>
                            ) : (
                                <SignupInputHint>
                                    x 8자 이상 입력
                                </SignupInputHint>
                            )}

                            {password.length === 0 ? (
                                ""
                            ) : effPassword ? (
                                <SignupInputHint style={{ color: "#1E4154" }}>
                                    ︎✓ 숫자, 영문, 특수문자 포함하여, 2개 이상
                                    조합
                                </SignupInputHint>
                            ) : (
                                <SignupInputHint>
                                    x 숫자, 영문, 특수문자 포함하여, 2개 이상
                                    조합
                                </SignupInputHint>
                            )}
                        </SignupInputHints>
                    </SingupInputWrap>
                    <SingupInputWrap>
                        <SignupInputTitle>비밀번호 확인</SignupInputTitle>
                        <SignupInputText
                            type="password"
                            placeholder="비밀번호를 한번 더 입력해주세요."
                            onChange={handleConfirmPasswordChange}
                            required
                        ></SignupInputText>
                        <SignupInputHints>
                            {confirmPassword.length === 0 ? (
                                ""
                            ) : eqPassword ? (
                                <SignupInputHint style={{ color: "#1E4154" }}>
                                    동일한 비밀번호입니다 :)
                                </SignupInputHint>
                            ) : (
                                <SignupInputHint>
                                    동일하지 않은 비밀번호입니다 :(
                                </SignupInputHint>
                            )}
                        </SignupInputHints>
                    </SingupInputWrap>
                </SingupInputList>
                <SignupSubmitButton onClick={postUserRegister}>
                    회원가입
                </SignupSubmitButton>
                <SignupLinkSignin href="/login">로그인</SignupLinkSignin>
            </SignupBody>
        </SignupWrapper>
    );
}
