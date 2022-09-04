import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SeriesList from "./SeriesList";
import { useState } from "react";
// import youSeries from '../Images/you.png'
import data from "../dataDummy/DataFakeSeries.jsx";

function SeriesContainer() {
  return (
    <div>
      <Container className="my-5 overflow-hidden" id="">
        <h4 className="text-light mb-4">TV Series</h4>
        <Row>
          {data.map((data, index) => {
            return (
              <Col md={2} key={index}>
                <SeriesList
                  seriesImg={data.seriesImg}
                  title={data.title}
                  year={data.year}
                />{" "}
                {/* Looping */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default SeriesContainer;
