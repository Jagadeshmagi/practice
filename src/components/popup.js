import React from 'react';
import { TweenLite, TimelineMax } from 'gsap';
import ReactPlayer from 'react-player'

import '../css/animation.css';
export default class Popup extends React.Component {

	componentDidMount(){
		TweenLite
		.from(this.refs.popupPointer, 1, { css: { "-webkit-transform" : "translate3d(1000px, 0px, 0px)" }});
	}
	handleClick(){
		
	}

	render(){
		const videoHeight = (window.innerWidth) * 9 / 16;
		const videoStyle={
			width:100,
			height:videoHeight,
		};
		return(
			<div>
			<div style={{height:100}}> <ReactPlayer style={{height:100}} url={this.props.videoUrl} playing /> </div>
			{/*<iframe width="360" height="315" src={this.props.videoUrl}></iframe>*/}
			<div style={{position:'relative'}}>				
				<img src={this.props.img} />
				<div ref="popupPointer" style={this.props.link1}></div>
				<a href="http://www.myntra.com/" target="_blanck"><div className="pulse-point" style={this.props.link2}></div></a>
				<a href="http://www.myntra.com/" target="_blanck"><div className="pulse-point" style={this.props.link3}></div></a>
			</div>
			</div>
		);
	}
}