import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Card from "../components/Card";

const Homelayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen">
        <Cards></Cards>
        <Card></Card>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Homelayout;
