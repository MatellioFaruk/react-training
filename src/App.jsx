import { Suspense, lazy, useEffect, useState, } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Loading from "./components/Loading";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import AuthenticationProvider from "./context/authentication.context";
import UserProvider from "./context/user.context";

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

                    <PrivacyPolicy />

                  } />
                  <Route path="terms-condition" element={

                    <Term />

                  } />
                  <Route path="*" element={<NotFound />} />
                </Route>

              </Routes>
            </Suspense>
          </UserProvider>
        </AuthenticationProvider>

      </BrowserRouter>

    </div>
  );
}

export default App;
