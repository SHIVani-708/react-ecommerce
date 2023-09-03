import React, { Fragment } from "react";
import StoreItems from "./StoreItems";

import Table from "react-bootstrap/Table";
import './Store.css';

const items = [
  {
    date: "July 6",
    id: "DETROIT, MI",
    title: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "July 10",
    id: "AYIIF,ON",
    title: "BUDWEISER STAGE",
  },
  {
    date: "July 16",
    id: "ASDSD, MI",
    title: "JIGGY LUBE LIVE",
  },
  {
    date: "July 26",
    id: "UIUE, MI",
    title: "AK-CHIN PAVILION",
  },
  {
    date: "Aug 6",
    id: "OKASOO, MI",
    title: "T-MOBILE ARENA",
  },
  {
    date: "Aug 16",
    id: "OAOSD, MI",
    title: "CONCORD PAVILIONE",
  },
];

function Store() {
  return (
    <Fragment>
      <h1>Your Store</h1>
      <div className="tour">Tour</div>
      <div className="container">
        <Table striped bordered hover>
          <tbody>
            {items.map((item) => (
              <StoreItems
                key={Math.random}
                Date={item.date}
                Id={item.id}
                Title={item.title}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

export default Store;
