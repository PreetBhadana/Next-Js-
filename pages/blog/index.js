import Navbar from "../../components/Navbar";
import React, { Component } from 'react';
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

//// functional Hook method
// const blog = ({data}) => {
  
//   return (
//     <div>
//       <Navbar />
//       {
//         data.map((curElem) => {
//           return (
//             <div key = {curElem.id} className="ssr-styles">
//               <h3>{curElem.id}</h3>
//               <h2>{curElem.name}</h2>
//             </div>
//           )
//         })
//       }
      
//     </div>
//   );
// }



class blog extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <Navbar />
        {
          data.slice(0, 5).map((curElem) => {
            return (
              <div key = {curElem.id} className="ssr-styles">
                <h3>{curElem.id}</h3>
                <Link href={`/blog/${curElem.id}`} passHref>
                  <h2>{curElem.title}</h2>
                </Link>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default blog;