import React from 'react';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import ProgressBar from './Components/ProgressBar';
import SubHeader from './Components/SubHeader/SubHeader';
import Services from './Components/Services/Services';
import MyProject from './Components/MyProject/MyProject';
import Contact from './Components/Contact/Contact';
function App() {
return (
	<div className="App">
		<Header/>
		<SubHeader/>
		<About/>
		<Services />
		<MyProject />
		<Contact/>
		</div>

);
}

export default App;
