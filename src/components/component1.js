import React from 'react';
import { TweenLite, TimelineMax } from 'gsap';
import Component2 from './component2';

export default class Component1 extends React.Component {

	componentDidMount(){
		
	}
	handleClick(){
		
	}

	render(){
		const mainImageStyle={
			width:'100%',
			display:'block'
		};
		return(			
			<div style={{position:'relative'}}>
				<div style={{width:'70%', display:'inline-block'}}><img style={mainImageStyle} src={this.props.image} /></div>
				<div style={{width:'30%', position:'absolute', top:0, right:0}}><Component2
				/><Component2
				/><Component2
				/></div>
			</div>
		);
	}
}