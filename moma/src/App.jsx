import './App.css'
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Main from './pages/Main/main';
import DetailManito from './pages/Detail/DetailManito';
import CreateManito from './pages/Create/CreateManito';
import AuthLogin from './pages/Auth/AuthLogin';
import AuthSingUp from './pages/Auth/AuthSingUp';
import CreateDoneManito from './pages/Create/CreateDoneManito';
import Footer from './components/layout/Footer';




const BodyWrapper = styled.div`
text-align: center;
margin-top: 90px;
margin-bottom: 150px;
padding: 10px;
`;

const LayoutWrapper = styled.div`

  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #F5F5F5;
  
`;

const ContentWrapper = styled.div`
    max-width: 425px;
    width: 100%;
    min-height: 100vh;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`


const Layout = () => {
const location = useLocation();

return (
  <>
    <LayoutWrapper>
      <ContentWrapper>
              <NavBar />
              <Outlet />
              <Footer />
      </ContentWrapper>
    </LayoutWrapper>
  </>
);
};

// 로그인 여부 파악하기
// 만약 로그인 유저시 아래 Routes보이게 하기
function App() {
  return (
    <>
   <Reset/>
          {/* 로그인 및 회원 가입 */}
          <Routes>
                <Route path="/login" element={<AuthLogin/>}/>
                <Route path="/signup" element={<AuthSingUp/>}/>
          
                  <Route element={<Layout />}>
                  <Route path="" index element={<Main />} />
                  <Route path="/detail/:id" element={<DetailManito />} />
                  <Route path="/create" element={<CreateManito />} />

                  {/* 완료 마니또 전달 */}
                  <Route path="/createDone" element={<CreateDoneManito/>}/>                  
                  {/* <Route path="*" element={<NotFound/>} /> */}
              </Route>
          </Routes>
          
    </>
  );
}

export default App
