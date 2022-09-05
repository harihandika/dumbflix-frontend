import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import TVShows from "./pages/TVSeries";
import FilmDetails from "./pages/FilmDetails";
import ProfileDetails from "./pages/ProfileDetails";
import "bootstrap/dist/css/bootstrap.css";
import Transaction from "./pages/Transaction";
import AddFilm from "./pages/AddFilm";
import Layout from "./widgets/Layout";
import HomeAdmin from "./pages/HomeAdmin";
import Detailadmin from "./components/admin/DetailFilmsadmin";
import Payment from "./pages/Payment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/details" element={<FilmDetails />} />
        <Route path="/profile" element={<ProfileDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/homeadmin"
          element={
            <Layout>
              <HomeAdmin />
            </Layout>
          }
        />

        <Route
          path="/transaction"
          element={
            <Layout>
              <Transaction />
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
          path="/detailadmin"
          element={
            <Layout>
              <Detailadmin />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
