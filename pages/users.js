
import Navbar from '../components/Navbar';
import React, { Component } from 'react';
import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return{
    props: {
      users: data
    }
  }
}

function UserList({users}) {
  return (
    <>
      <Navbar />
      {users.slice(0, 5).map((curElem) => {
        return (
          <div key = {curElem.id} className="ssr-styles">
            <h3>{curElem.id}</h3>
            <Link href={`/user/${curElem.id}`} passHref>
              <h2>{curElem.name}</h2>
            </Link>
          </div>
        )})
      }
    </>
  );
}



// class UserList extends Component {

//   render() {
//     console.log(this.props.users)
//     return (
//       <div>
//         <Navbar />
//         <h1>List of user</h1>
//       </div>
//     );
//   }
// }


export default UserList;