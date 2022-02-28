import React, { Component } from 'react';
import Router from 'next/router';
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

// const logIn = async (req) => {
//   const res = await fetch(`https://reqres.in/api/login`,{
//     method: "POST",
//     body: JSON.stringify({ 
//       req
//     })
//   });

//   const result = await res.json()
//   return result
// }

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      token: "",
      show: false,
      alert_message: "",
      alert_type: "",

    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if(token){
      //this.setState({token: token})
      Router.push('/weatherapp')
    }
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  processLogIn = (e) => {
    e.preventDefault()
    const req = {
      email: this.state.email,
      password: this.state.password,
    };

    const addComment = async (req) => {
      const email = this.state.email
      const password = this.state.password
      const res = await fetch('/api/loginApi', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()
      console.log(data)
      console.log(res.status)
      if(res){
        if (res.status === 200) {
          this.setState({
            alert_message: 'Registration Succesfull. Please login.',
            alert_type: 'success',
            showLogIn: false,
            token: data.token
          })
          if(data.token){
            this.storeTokenLocal(data.token)
          }
        } else {
          this.setState({
            alert_message: data.error,
            alert_type: 'danger',
            showLogIn: false
          })
          
        }
        this.setState({show:true},()=>{
          window.setTimeout(()=>{
            this.setState({show:false})
          },3000)
        });
      }
    }
    addComment(req)
    
  }


  storeTokenLocal = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    Router.push('/weatherapp')
  }


  render() {
    const { email, password, token } = this.state
    console.log(email)
    console.log(password)
    console.log(token)
    return (
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        {/* Sign in Section */}
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-green-500">Beryl</span> Systems
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            <div>
              <button
                className="w-2/5 flex text-center justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-green-500 hover:bg-white hover:text-green-500 focus:outline-none"
                onClick={(e) => this.processLogIn(e)}
              >
                GitHub Login
              </button>
            </div>
            
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
                      type="password"
                      autoComplete="current-password"
                      required
                      value = {password}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    className="w-2/5 flex text-center justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-green-500 hover:bg-white hover:text-green-500 focus:outline-none"
                    onClick={(e) => this.processLogIn(e)}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Sign Up Section */}
        <div className="w-2/5 py-36 px-12 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">Fill up your persional Info and start your journey with us.</p>
          <Link href='/signup'>
            <a className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sign up</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;