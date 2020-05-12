import React, { useState, useEffect } from "react";
import $ from 'jquery';

import './turn';

const titles = [
	"INTRODUCTION",
	"STEP 1-RECOGNITION",
	"STEP 2-UNIFICATION",
	"STEP 3-REALIZATION / DECLARATION",
	"STEP 4-DENY THE DENIALS",
	"STEP 5-THANKSGIVING / RELEASE",
	"A SPIRITUAL MIND TREATMENT FOR YOU"
];
const title_before = [
	"",
	"This is the step that illumines consciousness and allows us to recog-nize a God of Love and Brilliance and Power",
	"There is one life, that life is whole, perfect, complete and that life is my life now",
	"There is nothing but God, and His manifestation and I am whole, perfect and complete",
	"In this step we realize that there is nothing to fear, that fear itself is nei-ther person, place, or thing. It is only an appearance and we treat to know that any false idea that would try to inhibit my growth or forward movement in my life is by this word completely neutralized, uprooted, and dissolved",
	"",
	""
]
const title_after = [
	"The five steps of treatment were created to organize and combine each step of treatment at a glance, so that each person can practice our form of prayer, called Spiritual Mind Treatment, more effectively.",
	"",
	"",
	"",
	"In this step we let go of the problem as a problem. We see it as an appearance and we realize that it is nothing, appearing as something. Confusion is a false idea, it is neither person, place, or thing, and once we neutralize and dissolve it in treatment, we find the peace that is always there. The same holds true to dissolve the false idea, the idea that I am without something or experiencing fear of any kind. Deny the fear and affirm the spiritual idea of abundance, love, faith, and joy",
	"In this step we are grateful for the way life works through treatment. This step affirms our conscious acceptance of the way the Law works for us. With gratitude and love expressed as our belief in the power of our word, we release the treatment into Law.In this step we let go of any personal responsibility for our treatment and we allow the Law to work through us.In this step we are thanking God, Divine Intelligence, Spirit, for doing the work through us. We express gratitude and say − with love and appreciation for the wonderful way that life is working through me − I release this treatment into Law knowing that it is done.And so it is!",
	"Knowing that God is Love, Light, Joy, and Peace and God is everywhere evenly present. I know that God loves me and wants me to be happy. I am at one with the peace and happiness of God. Today I claim that Divine Birthright of love, harmony, and peace of mind. I know that any false ideas of fear, anger or sadness are completely released from my consciousness.They are uprooted, neutralized, and dissolved. All that is false falls away. I am at one with the One and all is made well in my life!I am a living, loving expression of the Divine. I move forward this day to create more health, more wealth, and more loving, harmonious relationships in my life. I know that all is well in every area of my life.With gratitude and appreciation for the wonderful way life works through me, I release this word into law, knowing it is done.And so it is!"
]
const bodies = [
	"<p>The five steps of treatment are described with clarity so that the reader will be able to practice spiritual mind treatment with great ease and comprehend the value and meaning of each step.</p><p>I am knowing that each person who works with these Spiritual Ideas will come to know that with God all things are possible.</p>",
	"<p>This first step recognizes the one life, spirit, God, Infinite Intelligence; this is the Creator and Creation of all. In this step you recognize God as Love, Light, Wisdom, Power, the rich substance of the Universe. God is Absolute Intelligence, Omnipotent and Omnipresent; these are the qualities of God.</p><p>Create a list of synonyms for God. This is the step that illumines consciousness and allows us to recognize a God of Love and Brilliance and Power.</p><p>This is the Power within us that waits to be called into expression. Begin to have a freedom and ease in describing the nature of God</p>",
	"<p>There is one life, that life is whole, perfect, complete and that life is my life now. Through unification we dwell in that perfect state of the Absolute and wholeness, peace and joy indwells us now. This second step of unification is the sacred state of at-one-ment; now are we allowing the conscious immersion of Spirit. I am at one with this Divine Source of all life and it flows through me right now. I consciously unify my human self with the Divine Self. There is no separation. I and the Spirit are one. I am expressing the Great Spirit in all areas of my life. This is Unification</p>",
	"<p>We have defined God in Step 1; we have become one with all that God is in Step 2. In this step we realize and declare the unlimited nature of that self-expression within us.</p><p>Right here and now we declare and know that we are whole, perfect and complete. There is nothing but God, and His manifestation and I am made in the image and likeness of God, therefore, I am whole, perfect and complete. In this step there is realization that all we express in form and function is derived from Spirit. In Spirit there is only purity, joy and light. We realize, and declare, that nothing is impossible for Spirit to accomplish or express through us. Declare out loud your good and know that as you declare it Spirit creates it through your knowingness.</p><p>Spirit is the Infinite Knower and Thinker in your world creating through you boundless energy, freedom and ease, an abundance of good. The spiritual ideas of health, wholeness, joy and prosperity are made manifest in your life now. This is the step that realizes and declares the power of your word</p>",
	"<p>Spirit is pure, whole, perfect, and complete and anything unlike Spirit is completely dissolved from my sub-conscious mind. This is the step that cleanses consciousness. My consciousness is cleansed of any false ideas and I am now embracing life, knowing that all things are working together for my highest good. Divine order and perfect right action are the theme of my life. In this step we face our challenges and erase them. We deny whatever the thought patterns are that may be holding us back from expressing our divine birthright</p>",
	"To learn how to treat is to learn how to live. Spend time with yourself each day, work with these ideas and know that as a child of God you are part of a great heritage. Believe in yourself and use Spiritual Mind Treatment to help you get from where you are to where you want to go. Know with me that with God all things are possible",
	"As you work with the spiritual ideas in this booklet, may our form of prayer called Spiritual Mind Treatment assist you in entering into the spirit of life.As you consciously dwell in this divine Creative Power, it expresses through you as greater health, wealth, creative self-expression and loving, harmonious relationships.“Seek ye first the Kingdom of God and all thingsshall be added unto you."
]

const Page = (props) => {
	return (
		<div className="page-wrapper hard">
			<div className="page hard" style={{ width: props.width, height: props.height }} >
				<div className={props.index % 2 == 0 ? 'hidden' : ''}>
					<div className="title_before">{title_before[(props.index + 1) / 2 - 1]}</div>
					<div className="title">{titles[(props.index + 1) / 2 - 1]}</div>
					<div className="title_after">{title_after[(props.index + 1) / 2 - 1]}</div>
				</div>
				<div className={props.index % 2 == 1 ? 'hidden' : ''}>
					<div className="body" dangerouslySetInnerHTML={{ __html: bodies[props.index / 2 - 1] }}></div>
					<div className="index">
						{
							Array(props.total).fill().map((d, i) => i).filter(i => i > 0 && i < 14 && i % 2 == 0 && i >= props.index).map((item, i) => {
								return <div key={i} className={i % 2 == 1 ? 'odd' : 'even'} onClick={(e) => { props.onClick(item) }} >{titles[item / 2 - 1]}</div>
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export const Flipper = (props) => {
	const [flipper, setFlipper] = useState(null);
	const [width, setWidth] = useState($(window).height() - 25)
	const [height, setHeight] = useState($(window).height() - 25)
	useEffect(() => {
		var $flipper = $('.flipper');

		var flipper_wrapper = $('.flipper-wrapper');
		var page = $('.page-wrapper > .page');

		flipper_wrapper.css('transform', `rotate(90deg)`)

		//page.css('transform', `rotate(-90deg)`);
		// improve visual
		page.css('transform', `perspective(1px) translateZ(0) rotate(-90deg)`);

		$flipper.turn({
			/*display: 'single',*/
			autoCenter: true,
			acceleration: true,
			gradients: false,
			gradients: !$.isTouch,
			elevation: 50,
			duration: 1000,
			when: {
				turned: function (e, page) {
					/*console.log('Current view: ', $(this).turn('view'));*/
				}
			}
		});
		setFlipper($flipper);
	}, [])
	function turn(index) {
		flipper.turn('page', index);
	}
	return (
		<div className="wrapper">
			<div className="flipper-wrapper" style={{ width: width, height: height }}>
				<div className="flipper">
					{
						props.items.map((item, i) => {
							return <Page key={i} data={item} width={width} height={height} index={i} total={props.items.length} onClick={turn} />
						})
					}
				</div>
			</div>
			<button onClick={(e) => { flipper.turn('previous') }}>Previous</button>
			<button onClick={(e) => { flipper.turn('next') }}>Next</button>
		</div>
	)
}
