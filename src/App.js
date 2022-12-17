import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { ContextProvider } from "./context";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ContextProvider>
          <main className="container content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:name" element={<Category/>} />
              <Route path="/recipe/:id" element={<Recipe/>} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </ContextProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
