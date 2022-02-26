import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Dashboard extends React.Component {

	constructor(props){
    super(props);
    this.state = {
      token: "",
      location: "Pune",
      loaded: false,
      show: false,
      alert_type: '',
      alert_message: '',
      weather: [],
      longitude: null,
      latitude: null,
      coordinates: [],
      systemWeather: [],
      temprature: []
    }

    this.getLocation = this.getLocation.bind(this)
    this.getCoordinates = this.getCoordinates.bind(this)
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if(token){
      this.setState({token: token})
    }else{
    	window.location.href = '/';
    }
    this.getLocation()
  }

  componentWillUnmount() {
    this.setState = (state,callback)=>{
      return;
    };
  }

  setLogout = () => {
    localStorage.setItem('token', "");
    this.setState({token: ""})
    window.location.href = '/';
  }

  handleSearch = (e) => {
  	this.setState({
  		location: e.target.value
  	})
  }

  getLocation() {
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(this.getCoordinates);
	  } else { 
	  	this.setState({
		    alert_message: "Geolocation is not supported by this browser.",
		    alert_type: 'danger',
		    show: true
		  })
	  }
	}

	getCoordinates = (position) => {
		this.setState({
			coordinates: position.coords,
			longitude: position.coords.longitude,
			latitude: position.coords.latitude
		})
		if(position){
			this.getWeather()
		}
	}

	getWeather = async () => {
		if(this.state.coordinates){
			let lon = this.state.longitude
			let lat = this.state.latitude
			let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=''`
			const res = await fetch(url);
	  	const result = await res.json()
	    if(result.cod === 200){
	    	this.setState({
	    		systemWeather: result.weather,
	    		temprature: Math.ceil(result.main.temp - 273.15),
	    		weatherLoaded: true
	    	})
	    }else{
	    	this.setState({
	    		weatherLoaded: true,
	    		show: true,
	    		alert_message: "Something went wrong!!!",
	    		alert_type: 'danger'
	    	})
	    }
	  }
	}


  fetchWeather = async () => {
  	this.setState({loaded: false})
  	let location = this.state.location
  	let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9cb15e7813e8e224ac9c6fcd05bb76ab`

  	const res = await fetch(url);
  	const result = await res.json()
    if(result.cod === 200){
    	this.setState({
    		weather: result.weather,
    		loaded: true
    	})
    }else{
    	this.setState({
    		loaded: true,
    		show: true,
    		alert_message: "Something went wrong!!!",
    		alert_type: 'danger'
    	})
    }
  }
  
	render(){
		const { token, location, loaded, show, alert_type, alert_message, weather, coordinates, longitude, latitude, weatherLoaded, systemWeather, temprature } = this.state
		return(
			<>
				<Alert show = {show} variant={alert_type} onClose={() => this.setState({show: false})} dismissible>
          {alert_message}
        </Alert>
				<h1> Dashboard </h1>
	      <>
	        <Button className="button-style rounded" variant="light" onClick={(e) => this.setLogout(e)}>Log Out</Button>
	        <br/><br/>
	        <label value="Location">Location</label>
	        <input type="text" onChange = {(e) => this.handleSearch(e)}/>
	        <br/>
	        <br/>
	        <Button className="button-style rounded" variant="light" onClick={(e) => this.fetchWeather(e)}>Check</Button>
	        <br/>
	        <br/>
	        <Button className="button-style rounded" variant="light" onClick={(e) => this.getWeather(e)}>Get Location weather</Button>
	      </>
	      <br/><br/>

	      {loaded && 
	      	<>
	      		<hr/>
	      		<p>Weather  :  {weather[0].main}</p>
	      		<hr/>
	      	</>
	      }

	      {weatherLoaded &&
	      	<>
	      		<hr/>
	      		<p>Weather  :  {systemWeather[0].main}</p>
	      		<p>Temprature  :  {temprature} C</p>
	      		<p>Longitude  :  {longitude}</p>
	      		<p>Latitude  :  {latitude}</p>
	      		<hr/>
	      	</>
	      }
			</>
		)
	}
}