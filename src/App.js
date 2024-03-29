import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainFooter from "./components/footer/MainFooter";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import EliteVibes from "./pages/eliteVibes/EliteVibes";
import Home from "./pages/home/Home";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import NotFound from "./pages/404/NotFound";
import Single from "./pages/eliteVibes/single/Single";
import EliteGames from "./pages/eliteGames/EliteGames";
import SingleProduct from "./components/products/single/SingleProduct";
import EliteDivine from "./pages/eliteDivine/EliteDivine";
import EliteGold from "./pages/eliteGold/EliteGold";
import AllProducts from "./pages/products/Products";
import SingleGameEvent from "./pages/eliteGames/single/Single";

function App() {
  const [tops, setTop] = useState(false);

  function gotTop() {
    setTop(window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  return (
    <div className=" scroll-smooth">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* Home Route */}
            <Route index element={<Home />} />

            {/* About Page Route */}
            <Route path="aboutUs" element={<About />} />

            {/* Elite Vibes Page Route */}
            <Route path="elitevibes">
              <Route index element={<EliteVibes />} />
              <Route path=":id" element={<Single />} />
            </Route>

            {/* Elite Games Page Route */}
            <Route path="elitegames">
              <Route index element={<EliteGames />} />
              <Route path=":id" element={<SingleGameEvent />} />
            </Route>

            {/* Elite Divine Page Route */}
            <Route path="elitedivine">
              <Route index element={<EliteDivine />} />
            </Route>

            {/* Elite Gold Page Route */}
            <Route path="elitegold">
              <Route index element={<EliteGold />} />
            </Route>

            {/* Elite Product Route */}
            <Route path="products">
              <Route index element={<AllProducts />} />
              <Route path="/products/:id" element={<SingleProduct />} />
            </Route>

            {/* Elite Games Single Product Page Route */}

            {/* Contact Page Route */}
            <Route path="contact" element={<Contact />} />

            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <MainFooter />
        <button
          className={`fixed bottom-10 right-10 text-white z-20 border h-10 w-10 rounded-full inline-block items-center justify-center focus:outline-none active:scale-95`}
          onClick={() => setTop(gotTop)}>
          ↑
        </button>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
