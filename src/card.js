import React, { Component } from 'react'
import { FacebookButton, FacebookCount } from "react-social";
import  key from './footer'
import  { ref,get } from './config';
export default class Card extends Component {
    constructor(props){
        super(props);
        this.state={
          sceen:null,
          image:'./bg.png',
          keys:"",
          text:""
        }
      }
componentDidMount(){
 /*  console.log(this.state.keys);
   get.ref().child(`image/${this.props.keys}/`).once('value',(snapshot)=>{
      let data = snapshot.val()
      console.log(data)
   }) */
     //console.log(this.props.match.params.id) 
      //console.log(a);
      get.ref().child(`word/${Math.floor((Math.random()*30))-1}/`).once('value',(snapshot)=>{
        let data2 = snapshot.val()
        console.log(data2)
        this.setState({text:data2})
     })
}
onSave=()=>{
        let a = document.createElement('a');
        a.href = this.state.sceen;
        a.download = 'image.png';
        a.click() 
        //this.setState({keys:this.props.keys})
        }
render() {
        let url = `https://stupidhackth.github.io/Thia/card/${this.props.keys}`;
        const appId="347460905704240";
return (
<div  className="App">
 <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img  src={this.props.im} alt="Placeholder image"/>
    </figure>
  </div>
    <div className="content">
     {this.state.text}
    </div>
  </div>
  <footer className="card-footer">
    <p className="card-footer-item">
      <span>
         <a className='button is-white' href="#">Cancel</a>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button className="button is-danger" onClick={this.onSave}>save</button>
      </span>
    </p>
    <p className="card-footer-item" >
    <FacebookButton className="button is-primary" url={url} appId={appId}>
          Share  on facebook
    </FacebookButton>
    </p>
  </footer>
</div>
        )
    }
}