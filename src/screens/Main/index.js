import React from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

export default function Main() {
  const users = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Andrzej", lastName: "Tosterion" },
    { idUser: 3, firstName: "Anna", lastName: "Forrest" },
    { idUser: 4, firstName: "Stan", lastName: "Kisiel" },
    { idUser: 5, firstName: "Toster", lastName: "Foster" },
  ];
  return (
    <>
      <Header />
      <div className="container">
        <Table />
      </div>
    </>
  );
}
