import { Suspense, lazy, } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Term from "./pages/Term"
import NotFound from "./pages/NotFound";
import Loading from "./components/Loading";
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"))


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route >
              <Route index element={<Home />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-condition" element={<Term />} />
              <Route path="*" element={<NotFound />} />
            </Route>

          </Routes>
        </Suspense>


      </BrowserRouter>
    </div>
  );
}

export default App;
