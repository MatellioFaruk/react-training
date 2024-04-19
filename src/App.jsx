import { Suspense, lazy, useEffect, useState, } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Loading from "./components/Loading";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import AuthenticationProvider from "./context/authentication.context";
import UserProvider from "./context/user.context";
import { Provider } from "react-redux";
import { store } from "./redux/redux";

const Home = lazy(() => import("./pages/Home"))
const Term = lazy(() => import("./pages/Term"))
const NotFound = lazy(() => import("./pages/NotFound"))
const Login = lazy(() => import("./pages/Authentication/Login"));
const Register = lazy(() => import("./pages/Authentication/Register"))
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"))




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Provider store={store} >
          <AuthenticationProvider>
            <UserProvider>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route >
                    <Route index element={<PrivateRoute>
                      <Home />
                    </PrivateRoute>} />
                    <Route path="login" element={
                      <PublicRoute>
                        <Login />
                      </PublicRoute>
                    } />
                    <Route path="register" element={
                      <PublicRoute>
                        <Register />
                      </PublicRoute>
                    } />
                    <Route path="privacy-policy" element={
                      <PublicRoute>
                        <PrivacyPolicy />
                      </PublicRoute>
                    } />
                    <Route path="terms-condition" element={

                      <Term />

                    } />
                    <Route path="*" element={
                      <PublicRoute>   <NotFound /></PublicRoute>
                    } />
                  </Route>

                </Routes>
              </Suspense>
            </UserProvider>
          </AuthenticationProvider>
        </Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
