import './App.css';
import React, { useState, createContext, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { loginReducer } from './reducer';
import * as Api from './Api';

import Prolog from './pages/Prolog';
import Home from './pages/Home';
import Community from './pages/Community';
import Result from './pages/Result';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';

export const ResultContext = createContext();
export const DispatchContext = createContext(null);
export const UserStateContext = createContext(null);

function App() {
  const [resultCooking, setResultCooking] = useState('');
  const [resultIngredients, setResultIngredients] = useState([]);
  const [resultRecipe, setResultRecipe] = useState('');
  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
      const res = await Api.get('afterlogin');
      const currentUser = res.data;

      // dispatch 함수를 통해 로그인 성공 상태로 만듦.
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: currentUser,
      });

      console.log('%c sessionStorage에 토큰 있음.', 'color: #d93d1a;');
    } catch {
      console.log('%c SessionStorage에 토큰 없음.', 'color: #d93d1a;');
    }
    // fetchCurrentUser 과정이 끝났으므로, isFetchCompleted 상태를 true로 바꿔줌
    setIsFetchCompleted(true);
  };

  // useEffect함수를 통해 fetchCurrentUser 함수를 실행함.
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!isFetchCompleted) {
    return 'loading...';
  }
  const saveResult = {
    resultCooking,
    setResultCooking,
    resultIngredients,
    setResultIngredients,
    resultRecipe,
    setResultRecipe,
  };

  return (
    <DispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={userState}>
        <ResultContext.Provider value={saveResult}>
          <Router>
            <Routes>
              <Route path="/" element={<Prolog />} />
              <Route path="/home" element={<Home />} />
              <Route path="/community" element={<Community />} />
              <Route path="/result" element={<Result />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>
        </ResultContext.Provider>
      </UserStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
