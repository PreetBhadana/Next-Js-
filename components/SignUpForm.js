import Link from 'next/link';
import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      confirmPasswordCheck: false,
      oneLowerCase: false,
      oneUpperCase: false,
      oneNumaric: false,
      oneSpecialChar: false,
      eightCharString: false,
      stronPassword: false
    }
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    

    if(name === 'password'){
      if(value !== ''){
        // Atleast One Lower case
        if(value.match("^(?=.*[a-z])")){
          this.setState({
            oneLowerCase: true
          })
        } else{
          this.setState({
            oneLowerCase: false
          })
        }

        // Atleast One Upper case
        if(value.match("^(?=.*[A-Z])")){
          this.setState({
            oneUpperCase: true
          })
        } else{
          this.setState({
            oneUpperCase: false
          })
        }

        // At least One Numeric
        if(value.match("^(?=.*\\d)")){
          this.setState({
            oneNumaric: true
          })
        } else{
          this.setState({
            oneNumaric: false
          })
        }

        // At least One Special Char
        if(value.match("^(?=.*[-+_!@#$%^&*.,?])")){
          this.setState({
            oneSpecialChar: true
          })
        } else{
          this.setState({
            oneSpecialChar: false
          })
        }

        // At least Eight chars
        if(value?.length >= 8){
          this.setState({
            eightCharString: true
          })
        } else{
          this.setState({
            eightCharString: false
          })
        }

        // Stron Password 
        if(value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$") && value?.length >= 8){
          this.setState({
            stronPassword: true
          })
        } else{
          this.setState({
            stronPassword: false
          })
        }

      } else {
        this.setState({
          oneLowerCase: false,
          oneUpperCase: false,
          oneNumaric: false,
          oneSpecialChar: false,
          eightCharString: false,
          stronPassword: false
        })
      }
    }

    if(name === 'confirmPassword'){
      if(value !== this.state.password){
        this.setState({
          confirmPasswordCheck: true
        })
      }
      else{
        this.setState({
          confirmPasswordCheck: false
        })
      }
    }

    this.setState({
      [name]: value
    })
  }

  processSignUp = (e) => {
    e.preventDefault();
    console.log('singing up ...')
    console.log(this.state.email, this.state.password)
  }

  render() {
    const { email, password, confirmPassword, confirmPasswordCheck, oneLowerCase, oneUpperCase, oneSpecialChar, oneNumaric, eightCharString, stronPassword } = this.state

    console.log({'oneLowerCase': oneLowerCase})
    console.log({'oneUpperCase': oneUpperCase})
    console.log({'oneNumaric': oneNumaric})
    console.log({'oneSpecialChar': oneSpecialChar})
    console.log({'eightCharString': eightCharString})
    console.log({'stronPassword': stronPassword})

    return (
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        {/* Sign Up Section */}
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-green-500">Beryl</span> Systems
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              Sign Up to Account
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            <div className="bg-white py-8 px-4 sm:px-10">
              <form className="space-y-6" action="" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="text"
                      autoComplete="current-password"
                      required
                      value = {password}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="text"
                      autoComplete="current-password"
                      required
                      value = {confirmPassword}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                  {confirmPasswordCheck &&
                    <span className='text-red-500'>*Confirm Pasword should be same</span>
                  }
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex flex-col">
                    {/* Validations Yha Dale */}
                    <div className={`${oneLowerCase ? 'text-green-500' : ''}`}>
                      at least one lowercase character.
                    </div>
                    <div className={`${oneUpperCase ? 'text-green-500' : ''}`}>
                      at least one uppercase character.
                    </div>
                    <div className={`${oneNumaric ? 'text-green-500' : ''}`}>
                      at least one numeric value.
                    </div>
                    <div className={`${oneSpecialChar ? 'text-green-500' : ''}`}>
                      at least one special character.
                    </div>
                    <div className={`${eightCharString ? 'text-green-500' : ''}`}>
                      at least eigth characters.
                    </div>
                  </div>

                  {/* <div className="text-sm">
                    Validations Yha Dale
                  </div> */}
                </div>

                <div className='flex justify-center'>
                  <button
                    className="w-2/5 flex text-center justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-green-500 hover:bg-white hover:text-green-500 focus:outline-none"
                    onClick={(e) => this.processSignUp(e)}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Sign In Section */}
        <div className="w-2/5 py-36 px-12 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">Fill up your persional Info and start your journey with us.</p>
          <Link href="/" >
            <a className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">
            Sign In
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignUpForm;