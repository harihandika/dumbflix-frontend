import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function MovieListadmin({ movieImg, title, year }) {
  return (
    <Link to="/detailadmin" className="text-decoration-none">
      <Card className="rounded border-0 bg-black text-white">
        <Card.Img variant="top" src={movieImg} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p className="text-muted">{year}</p>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieListadmin;
