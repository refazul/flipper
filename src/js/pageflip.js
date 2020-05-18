import React, { useState, useEffect } from "react";
import $ from 'jquery';

import './pageflip5';

export const PageFlip = (props) => {
	useEffect(() => {
		var menuH = 0,
			onResize = function (e) {
				setBodyClass();
				var h = window.innerHeight - menuH;
				//if (h > 800) h = 800;
				if (screenW < 480) h = 320;
				$("#pageflip").css({ height: h });
			},

			screenW,
			mobile,
			desktop,
			mode,
			bclasses = ["w320", "w480", "w768", "w1000"],

			setBodyClass = function () {
				var w = mobile ? $(window).width() : window.screen.availWidth;
				if (screenW != w) {

					if (desktop == mobile) {
						if ((mobile = !(desktop = w > 1000))) {
							w = $(window).width();
						}
					}
					screenW = w;
					if (w < 480) mode = 0;
					else if (w < 768) mode = 1;
					else if (w < 964) mode = 2;
					else mode = 3;

					$("body").attr("class", bclasses[mode]);
				}
			}

		onResize();
		setBodyClass();

		$(window).bind("resize", onResize);

		var $pageflip = $("#pageflip");
		$pageflip.pageflipInit({
			/*PageDataFile: "ppp/ppp.html",*/
			SinglePageMode: false,
			PageWidth: 768,
			PageHeight: 640,
			PageCache: 5,
			Margin: 0,
			MarginBottom: 0,
			PerformanceAware: false,
			AutoScale: true,
			HardCover: true,
			HardPages: false,
			RightToLeft: false,
			VerticalMode: true,
			AlwaysOpened: false,
			AutoFlipEnabled: true,
			StartAutoFlip: false,
			AutoFlipLoop: -1,
			DropShadow: true,
			NoFlipShadow: false,
			Emboss: true,
			DropShadowOpacity: 0.3,
			FlipTopShadowOpacity: 0.3,
			FlipShadowOpacity: 0.3,
			HardFlipOpacity: 0.2,
			EmbossOpacity: 0.2,
			HashControl: true,
			MouseControl: true,
			HotKeys: true,
			ControlbarToFront: true,
			FullScreenEnabled: true,
			Thumbnails: true,
			ThumbnailsHidden: true,
			ThumbnailWidth: 219,
			ThumbnailHeight: 160,
			ThumbnailsToFront: true,
			ThumbnailsAutoHide: 5000,
			ShareLink: "",
			ShareText: "",
			ShareVia: "@",
			ShareImageURL: "",
		}, 'ppp');
		var pageflip = $pageflip.pageflip();
	}, [])
	return (
		<div className="wrapper">
			<div id="pageflip">
				<div className='cover'>
					<h2 className="bold center">SPIRITUAL TREASURES AT A GLANCE</h2>
					<h3 className="center">Five Steps of Spiritual Mind Treatment/</h3>
					<h3 className="center">Affirmative Prayer</h3>
					<h4 className="center">Developed by Reverend Loretta Brooks</h4>
				</div>
				<div className='page'>
					<p className="title_before"></p>
					<h2 className="title center">INTRODUCTION</h2>
					<div className="title_after">
						The five steps of treatment were created to organize and combine each step of treatment at a
						glance, so that each person can practice our form of prayer, called Spiritual Mind Treatment, more effectively.
    </div>
				</div>
				<div className='page'>
					<div className="content">
						<p>
							The five steps of treatment are described with clarity so that the reader will be able to
							practice spiritual mind treatment with great ease and comprehend the value and meaning of each step.
        </p>
						<p>
							I am knowing that each person who works with these Spiritual Ideas will come to know that with God all
							things are possible.
        </p>
					</div>
				</div>

				<div className='page'>
					<p className="title_before center italic">
						"This is the step that illumines consciousness and allows us to recog-nize a God of Love and Brilliance and
						Power"
    </p>
					<h2 className="title center">STEP 1-RECOGNITION</h2>
					<div className="title_after"></div>
				</div>
				<div className='page'>
					<div className="content">
						<p>
							This first step recognizes the one life, spirit, God, Infinite Intelligence; this is the
							Creator and Creation of all. In this step you recognize God as Love, Light, Wisdom, Power, the rich
							substance of the Universe. God is Absolute Intelligence, Omnipotent and Omnipresent; these are the qualities
							of God.
        </p>
						<p>
							Create a list of synonyms for God. This is the step that illumines consciousness and allows us to recognize
							a God of Love and Brilliance and Power.
        </p>
						<p>
							This is the Power within us that waits to be called into expression. Begin to have a freedom and ease in
							describing the nature of God
        </p>
					</div>
				</div>

				<div className='page'>
					<p className="title_before center italic">
						"There is one life, that life is whole, perfect, complete and that life is my life now."
    </p>
					<h2 className="title center">STEP 2-UNIFICATION</h2>
					<div className="title_after"></div>
				</div>
				<div className='page'>
					<div className="content">
						<p>
							There is one life, that life is whole, perfect, complete and that life is my life now. Through unification
							we dwell in that perfect state of the Absolute and wholeness, peace and joy indwells us now. This second
							step of unification is the sacred state of at-one-ment; now are we allowing the conscious immersion of
							Spirit. I am at one with this Divine Source of all life and it flows through me right now. I consciously
							unify my human self with the Divine Self. There is no separation. I and the Spirit are one. I am expressing
							the Great Spirit in all areas of my life. This is Unification.
        </p>
					</div>
				</div>

				<div className='page'>
					<p className="title_before center italic">
						"There is nothing but God, and His manifestation and I am whole, perfect and complete."
    </p>
					<h2 className="title center">STEP 3-REALIZATION / DECLARATION</h2>
					<div className="title_after"></div>
				</div>
				<div className='page'>
					<div className="content">
						<p>
							We have defined God in Step 1; we have become one with all that God is in Step 2. In this step we realize
							and declare the unlimited nature of that self-expression within us.
        </p>
						<p>
							Right here and now we declare and know that we are whole, perfect and complete. There is nothing but God,
							and His manifestation and I am made in the image and likeness of God, therefore, I am whole, perfect and
							complete. In this step there is realization that all we express in form and function is derived from Spirit.
							In Spirit there is only purity, joy and light. We realize, and declare, that nothing is impossible for
							Spirit to accomplish or express through us. Declare out loud your good and know that as you declare it
							Spirit creates it through your knowingness.
        </p>
						<p>
							Spirit is the Infinite Knower and Thinker in your world creating through you boundless energy, freedom and
							ease, an abundance of good. The spiritual ideas of health, wholeness, joy and prosperity are made manifest
							in your life now. This is the step that realzes and declares the power of your word.
        </p>
					</div>
				</div>

				<div className='page'>
					<p className="title_before center italic">
						"In this step we realize that there is nothing to fear, that fear itself is nei-ther person, place, or thing. It
						is only an appearance and we treat to know that any false idea that would try to inhibit my growth or forward
						movement in my life is by this word completely neutralized, uprooted, and dissolved."
    </p>
					<h2 className="title center">STEP 4-DENY THE DENIALS</h2>
					<div className="title_after">
						In this step we let go of the problem as a problem. We see it as an appearance and we realize that it is
						nothing, appearing as something. Confusion is a false idea, it is neither person, place, or thing, and once we
						neutralize and dissolve it in treatment, we find the peace that is always there. The same holds true to dissolve
						the false idea, the idea that I am without something or experiencing fear of any kind. Deny the fear and affirm
						the spiritual idea of abundance, love, faith, and joy.
    </div>
				</div>
				<div className='page'>
					<div className="content">
						<p>
							Spirit is pure, whole, perfect, and complete and anything unlike Spirit is completely dissolved from my
							sub-conscious mind. This is the step that cleanses consciousness. My consciousness is cleansed of any false
							ideas and I am now embracing life, knowing that all things are working together for my highest good. Divine
							order and perfect right action are the theme of my life. In this step we face our challenges and erase them.
							We deny whatever the thought patterns are that may be holding us back from expressing our divine birthright
        </p>
					</div>
				</div>

				<div className='page'>
					<p className="title_before"></p>
					<h2 className="title center">STEP 5-THANKSGIVING / RELEASE</h2>
					<div className="title_after">
						<p>
							In this step we are grateful for the way life works through treatment. This step affirms our conscious
							acceptance of the way the Law works for us. With gratitude and love expressed as our belief in the power of
							our word, we release the treatment into Law.
        </p>
						<p>
							In this step we let go of any personal responsibility for our treatment and we allow the Law to work through
							us.
        </p>
						<p>
							In this step we are thanking God, Divine Intelligence, Spirit, for doing the work through us. We express
							gratitude and say − with love and appreciation for the wonderful way that life is working through me − I
							release this treatment into Law knowing that it is done.
        </p>
						<p>And so it is!</p>
					</div>
				</div>
				<div className='page'>
					<div className="content">
						<h2 className="title center">Final Words</h2>
						<p>
							To learn how to treat is to learn how to live. Spend time with yourself each day, work with these ideas and
							know that as a child of God you are part of a great heritage. Believe in yourself and use Spiritual Mind
							Treatment to help you get from where you are to where you want to go. Know with me that with God all things
							are possible.
        </p>
					</div>
				</div>

				<div className='page'>
					<p className="title_before"></p>
					<h2 className="title center">A SPIRITUAL MIND TREATMENT FOR YOU</h2>
					<div className="title_after">
						<p>
							Knowing that God is Love, Light, Joy, and Peace and God is everywhere evenly present. I know that God loves
							me and wants me to be happy. I am at one with the peace and happiness of God. Today I claim that Divine
							Birthright of love, harmony, and peace of mind. I know that any false ideas of fear, anger or sadness are
							completely released from my consciousness.
        </p>
						<p>
							They are uprooted, neutralized, and dissolved. All that is false falls away. I am at one with the One and
							all is made well in my life!
        </p>
						<p>
							I am a living, loving expression of the Divine. I move forward this day to create more health, more wealth,
							and more loving, harmonious relationships in my life. I know that all is well in every area of my life.
        </p>
						<p>
							With gratitude and appreciation for the wonderful way life works through me, I release this word into law,
							knowing it is done.
        </p>
						<p className="bold center">And so it is!</p>
					</div>
				</div>
				<div className='page'>
					<div className="cotent">
						<div className="section">
							<div className="center italic">This booklet is dedicated in loving memory of</div>
							<div className="center bold italic">Dr. Stuart Grayson,</div>
							<div className="center italic">My Mentor and Teacher for sixteen years.</div>
						</div>
						<p className="center">
							As you work with the spiritual ideas in this booklet, may our form of prayer called Spiritual Mind Treatment
							assist you in entering into the spirit of life.
        </p>
						<p className="center">
							As you consciously dwell in this divine Creative Power, it
							expresses through you as greater health, wealth, creative self-expression and loving, harmonious
							relationships.
        </p>
						<p className="center">"Seek ye first the Kingdom of God and all thingsshall be added unto you."</p>
					</div>
				</div>
				<div className='cover'>
					<h2 className="bold center">Spiritual Treasures At a Glance</h2>
					<div className="center">was created by Reverend Loretta Brooks.</div>
					<div className="center">You may contact her by E-mail at</div>
					<div className="bold center">LORETTABROOKS33@HOTMAIL.COM</div>
					<div className="center">©2003, 2020</div>
				</div>

			</div>
		</div>
	)
}
