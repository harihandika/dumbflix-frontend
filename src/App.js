import "bootstrap/dist/css/bootstrap.css";
import Regis from "./components/Regis";
import Login from "./components/Login";
import Payment from "./pages/Payment";
import AddFilm from "./pages/AddFilm";
import AddEpsidoe from "./components/AddEpisode";
import Profile from "./pages/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./widgets/Layout";
import Home from "./pages/Home";
import DetailFilm from "./components/DetailFilms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/payment"
          element={
            <Layout>
              <Payment />
            </Layout>
          }
        />

        <Route
          path="/addfilm"
          element={
            <Layout>
              <AddFilm />
            </Layout>
          }
        />

        <Route
          path="/addepisode"
          element={
            <Layout>
              <AddFilm />
            </Layout>
          }
        />

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

        <Route
          path="/detailfilm"
          element={
            <Layout>
              <DetailFilm />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
