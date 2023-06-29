import "./App.css";
import styled from "styled-components";
import { Reset } from "styled-reset";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import DetailManito from "./pages/Detail/DetailManito";
import CreateManito from "./pages/Create/CreateManito";
import AuthLogin from "./pages/Auth/AuthLogin";
import AuthSignUp from "./pages/Auth/AuthSignUp";
import Main from "./pages/Main/Main";
import { useState } from "react";

const BodyWrapper = styled.div`
    text-align: center;
`;

export const MainHeaderIcon = styled.img`
    // 크기 작게
    width: 100%;
`;
const LayoutWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`;

const ContentWrapper = styled.div`
    max-width: 390px;
    width: 100%;
    min-height: 900px;
    max-height: 900px;
    overflow: scroll;
    background: #fbfbfb;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const MainHeaderWrapper = styled.div`
    padding: 0px 24px;
    padding-top: 14px;
`;

// 메인 레이아웃
const Layout = () => {
    return (
        <>
            <LayoutWrapper>
                <ContentWrapper>
                    <NavBar />
                    <Outlet />
                </ContentWrapper>
            </LayoutWrapper>
        </>
    );
};

// 로그인 및 회원가입 레이아웃
const AuthLayout = () => {
    return (
        <>
            <LayoutWrapper>
                <ContentWrapper>
                    <Outlet />
                </ContentWrapper>
            </LayoutWrapper>
        </>
    );
};

// 로그인 여부 파악하기
// 만약 로그인 유저시 아래 Routes보이게 하기
function App() {
    const [userData, setUserData] = useState("");
    return (
        <>
            <Reset />

            {/* 로그인 및 회원 가입 */}
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route
                        path="/login"
                        element={<AuthLogin setUserData={setUserData} />}
                    />
                    <Route path="/signup" element={<AuthSignUp />} />
                </Route>

                {/* 로그인 후 메인 */}
                <Route element={<Layout />}>
                    {/* 메인 */}
                    <Route path="/" index element={<Main />} />
                    {/* 디테일 */}
                    <Route path="/detail/:id" element={<DetailManito />} />
                    {/* 마니또 생성 */}
                    <Route path="/create" element={<CreateManito />} />
                    {/* <Route path="*" element={<NotFound/>} /> */}
                </Route>
            </Routes>
        </>
    );
}

export default App;
