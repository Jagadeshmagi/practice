import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './popup';
import Component1 from './component1';
import Component2 from './component2';


import '../css/main.css';
import Ga from '../functions/Ga';
import '../css/main.css';

export default class Page extends React.Component {
	render() {
		const Linkpoits = {
			product1: {
			position: 'absolute',
			top: '26%',
			left: '32%',
			background: '#1B352D',
			width:10,
			height:10,
			borderRadius: '50%',
			border:'2px solid #fff'
		},
		product2:{
			position: 'absolute',
			top: '56%',
			right: '47%',
			background: '#1B352D',
			width:10,
			height:10,
			borderRadius: '50%',
			border:'2px solid #fff'

		},
		product3:{
			position: 'absolute',
			top: '88%',
			left: '34%',
			background: '#1B352D',
			width:10,
			height:10,
			borderRadius: '50%',
			border:'2px solid #fff'

		}
		};

		
		return(
			<div style={{position:'relative'}}>
				Hello world!!!

				<Component1 
					image='http://assets.myntassets.com/assets/images/lookbook/denim-ex2016/8/22/11471859455741-Denim-Exclusive-2.jpg'
				/>
				<Popup
					videoUrl="https://www.youtube.com/watch?v=PRBz6mHRhvU"
					img="http://assets.myntassets.com/assets/images/lookbook/denim-ex2016/8/22/11471859455741-Denim-Exclusive-2.jpg"
					link1 = {Linkpoits.product1}
					link2 = {Linkpoits.product2}
					link3 = {Linkpoits.product3}
				/>
				<div className="wrapper">
				</div>
			</div>
		);
	}
}
