var startPageflip, gotoPage, videoPlay, selectFeature, animation;

$(function () {
	var menuH = 0,
		onResize = function (e) {
			setBodyClass();
			var h = window.innerHeight - menuH;
			if (h > 800) h = 800;
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
		PageDataFile: "ppp/ppp.html",
		SinglePageMode: false,
		PageWidth: 930,
		PageHeight: 678,
		PageCache: 5,
		Margin: 32,
		MarginBottom: 90,
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
		PageCache: 5,
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
		ControlbarFile: "controlbar_svg.html",
		ShareLink: "https://pageflip-books.com",
		ShareText: "Pageflip5, The Book Template for the Web",
		ShareVia: "@MaccPageFlip",
		ShareImageURL: "https://pageflip-books.com/images/shareimage.jpg",
	}, 'ppp');
	var pageflip = $pageflip.pageflip();
});