import Link from "next/link";
import React, { Component } from 'react';
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

// const index = () => {
//   useEffect(() => {
//     document.title = "Home"
//   }, [])
//   return (
    // <div>
    //   Hello World
    //   <nav>
    //     <ul className="menu-bar">
    //       <li>
    //         <Link href="/">
    //           <a>
    //             Home
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/about">
    //           <a>
    //             About
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/dashboard">
    //           <a>
    //             Dashboard
    //           </a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/contact">
    //           {/* <a> */}
    //             Contact
    //           {/* </a> */}
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
//   );
// }


class index extends Component {
  render() {
    return (
      <>
      <Header />
    </>
    );
  }
}

export default index;