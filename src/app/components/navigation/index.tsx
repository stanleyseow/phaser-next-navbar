"use client";
import { useState } from "react";
import Navigationbar from "./navbar";

const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navigationbar toggle={toggle} />
    </>
  );
};

export default Navigation;