import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 15;

  state = {
    progress : 0
  }

  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {

    return (
      <div>
        <Router>

          <Navbar/>

          <LoadingBar
          color='#ffffff'
          height={3}
          progress={this.state.progress}
        />

          <Routes>
          <Route  path="/" element={<News changeProgress = {this.setProgress}  key = "general" pageSize={this.pageSize} country='in' category='General'/>}/>
          <Route  path="/business" element={<News changeProgress = {this.setProgress}  key = "business" pageSize={this.pageSize} country='in' category='Business'/>}/>
          <Route  path="/entertainment" element={<News changeProgress = {this.setProgress}  key = "entertainment" pageSize={this.pageSize} country='in' category='Entertainment'/>}/>
          <Route  path="/health" element={<News changeProgress = {this.setProgress}  key = "health" pageSize={this.pageSize} country='in' category='Health'/>}/>
          <Route  path="/science" element={<News changeProgress = {this.setProgress}  key = "science" pageSize={this.pageSize} country='in' category='Science'/>}/>
          <Route  path="/sports" element={<News changeProgress = {this.setProgress}  key = "sports" pageSize={this.pageSize} country='in' category='Sports'/>}/>
          <Route  path="/technology" element={<News changeProgress = {this.setProgress}  key = "technology" pageSize={this.pageSize} country='in' category='Technology'/>}/>
          
            
          </Routes>

        </Router>
      </div>
    )
  }
}
