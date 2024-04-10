import { Suspense, lazy, useEffect, useState, } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"))
const Term = lazy(() => import("./pages/Term"))
const NotFound = lazy(() => import("./pages/NotFound"))
const Login = lazy(() => import("./pages/Authentication/Login"));
const Register = lazy(() => import("./pages/Authentication/Register"))
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"))

const PublicRoute = ({ children, isAuthenticated }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", {
        replace: true
      })
    }
  }, [isAuthenticated])

  return (<>
    {children}
  </>)

}


const PrivateRoute = ({ children, isAuthenticated }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("login", {
        replace: true
      })
    }
  }, [isAuthenticated])
  return (<>
    {children}
  </>)
}



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <div className="App">
      {JSON.stringify(isAuthenticated)}
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route >
              <Route index element={<PrivateRoute isAuthenticated={isAuthenticated}>
                <Home isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
              </PrivateRoute>} />
              <Route path="login" element={
                <PublicRoute isAuthenticated={isAuthenticated}>
                  <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
                </PublicRoute>
              } />
              <Route path="register" element={
                <PublicRoute isAuthenticated={isAuthenticated}>
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


      </BrowserRouter>

    </div>
  );
}

export default App;
