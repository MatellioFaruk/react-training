import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Term from "./pages/Term"
import NotFound from "./pages/NotFound";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="home/:user/:customer" element={<Home />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="term" element={<Term />} />
            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
