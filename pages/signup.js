import React, { Component } from 'react';
import Head from "next/head";
import SignUpForm from '../components/SignUpForm'

class SignUp extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <Head >
          <title>Sign Up</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <SignUpForm />
        </main>
      </div>
    );
  }
}

export default SignUp;