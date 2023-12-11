import React from "react";

//import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

//import Link
import { Link } from "react-router-dom";

//import motion
import { motion } from "framer-motion";

const MobileNav = () => {
  return (
    <nav>
      {/* nav open button */}
      <div className="">
        <CgMenuRight />
      </div>
    </nav>
  );
};

export default MobileNav;
