import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MovieContainer from "../components/MovieContainer";
import SeriesContainer from "../components/SeriesContainer";
import AddFilm from "./AddFilm";

function Home() {
  const [isTvseries, setIsTvseries] = useState(true);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const switchMode = () => {
    setIsTvseries(true);
  };
  const switchMode1 = () => {
    setIsTvseries(false);
  };
  return (
    <>
      <div className="hero mt-5 text-light d-flex flex-column align-content-star ">
        <div className="d-flex" style={{ width: "1000px" }}>
          <div className="d-flex">
            <h3 className="fw-bold">List Film</h3>
            <Dropdown className="mx-3">
              <Dropdown.Toggle
                variant="white"
                id="dropdown-basic"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "solid",
                  width: "120px",
                  height: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "0px",
                }}
                className="fs-5"
              >
                Category
              </Dropdown.Toggle>
              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item onClick={switchMode} className="text-light">
                  <span>TV Series</span>
                </Dropdown.Item>
                <Dropdown.Item onClick={switchMode1} className="text-light">
                  <span>Movies</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            className="d-flex align-content-end justify-content-end"
            style={{ marginLeft: "auto" }}
          >
            <Button variant="danger" onClick={handleShow}>
              Add Film
            </Button>
            <AddFilm show={show} handleClose={handleClose} />
          </div>
        </div>
      </div>
      <div className="sectionSeries">
        {isTvseries ? <SeriesContainer /> : <MovieContainer />}
      </div>
    </>
  );
}

export default Home;
