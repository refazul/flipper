import React, { useState, useEffect } from "react";
import $ from 'jquery';

import './turn';

const Page = (props) => {
	return (
		<div className="page-wrapper hard">
			<div className="page hard" style={{width: props.width, height: props.height}} onClick={props.onClick}>
				{props.data}
			</div>
		</div>
	)
}

export const Flipper = (props) => {
	const [flipper, setFlipper] = useState(null);
	const [width, setWidth] = useState(400)
	const [height, setHeight] = useState(400)
	useEffect(() => {
		var $flipper = $('.flipper');

		var flipper_wrapper = $('.flipper-wrapper');
		var page = $('.page-wrapper > .page');
		
		flipper_wrapper.css('transform', `rotate(90deg)`)
		page.css('transform', ` rotate(-90deg)`);
		
		$flipper.turn({
			/*display: 'single',*/
			/*autoCenter: true,*/
			acceleration: true,
			gradients: false,
			gradients: !$.isTouch,
			elevation: 50,
			when: {
				turned: function (e, page) {
					/*console.log('Current view: ', $(this).turn('view'));*/
				}
			}
		});
		setFlipper($flipper);
	}, [])
	return (
		<div>
			<div className="flipper-wrapper" style={{width: width, height: height}}>
				<div className="flipper">
					{
						props.items.map((item, i) => {
							return <Page key={i} data={item} width={width} height={height} onClick={(e) => { (i % 2 == 1) ? flipper.turn('previous') : '' }} />
						})
					}
				</div>
			</div>
			<button onClick={(e) => { flipper.turn('previous') }}>Previous</button>
			<button onClick={(e) => { flipper.turn('next') }}>Next</button>
		</div>
	)
}
