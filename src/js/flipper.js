import React, { useState, useEffect } from "react";
import $ from 'jquery';

import './turn';

const Page = (props) => {
	return (
		<div className="page-wrapper hard">
			<div className="page" onClick={props.onClick}>
				{props.data}
			</div>
		</div>
	)
}

export const Flipper = (props) => {
	const [flipper, setFlipper] = useState(null);
	useEffect(() => {
		var $page = $('.page-wrapper>.page');
		var $calendarWrapper = $('.calendar-wrapper');
		var $pageWrapper = $('.page-wrapper');
		var $calendar = $('#calendar');

		var height = $page.height();
		var width = $page.width();

		$page.css('transform', `translate3d(0px, ${width}px, 0px) rotate(-90deg)`);

		$calendarWrapper.height(width);
		$calendarWrapper.width(height);
		$calendarWrapper.css('transform', `translate3d(${width}px, 0px, 0px) rotate(90deg)`)

		//$pageWrapper.height(width);
		//$pageWrapper.width(height);

		//$calendar.height(width);
		//$calendar.width(height);

		$calendar.turn({
			/*display: 'single',*/
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
		setFlipper($calendar);
	}, [])
	return (
		<div>
			<div className="calendar-wrapper">
				<div id="calendar">
					{
						props.items.map((item, i) => {
							return <Page key={i} data={item} onClick={(e) => { (i % 2 == 1) ? flipper.turn('previous') : '' }} />
						})
					}
				</div>
			</div>
			<div onClick={(e) => { flipper.turn('next') }}>Next</div>
			<div onClick={(e) => { flipper.turn('previous') }}>Previous</div>
		</div>
	)
}
