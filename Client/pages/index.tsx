import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

// import * as io from "socket.io-client";
// const socket = io.connect("http://localhost:3001");

//MainComponents
const Header = dynamic(() => import("@components/Header"));
const Navbar = dynamic(() => import("@components/Navbar"));

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
};

export default Home;
