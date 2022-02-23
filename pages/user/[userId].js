import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export async function getStaticPaths() {

  const res = await fetch("https://jsonplaceholder.typicode.com/users/")
  const data = await res.json();

  // const paths = data.slice(0, 3).map((curElem) => {
  //   return {
  //     params: {
  //       userId: curElem.id.toString(),
  //     },
  //   };
  // }) 

  return{
    paths: [
      {
        params: {userId: '1'}
      },
      {
        params: {userId: '2'}
      },
      {
        params: {userId: '3'}
      }
    ],
    // paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
  const data = await res.json()
  if(!data.id){
    return{
      notFound: true
    }
  }
  return{
    props: {
      data
    }
  }
}

function User({data}) {
  const router = useRouter()
  if(router.isFallback){
    return(
      <h1>Loading ... </h1>
    )
  }
  return (
    <div>
      <Link href='/users' passHref>
        Users
      </Link>
      <div className="ssr-styles ssr-styles-inside">
        <h3>{data.id}</h3>
        <h1>{data.name}</h1>
        <p>UserName : {data.username}</p>
        <p>Phone : {data.phone}</p>
        <p>Email : {data.email}</p>
        <p>WebSite : {data.website}</p>
      </div>
    </div>
  );
}

export default User;