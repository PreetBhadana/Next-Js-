import React, { Component } from 'react';
import Head from "next/head";
import LoginForm from '../components/loginForm';


class index extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <Head >
          <title>Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <LoginForm />
        </main>
      </div>
    );
  }
}

export default index;