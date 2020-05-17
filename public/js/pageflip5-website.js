var startPageflip, gotoPage, videoPlay, selectFeature, animation;

$( function() {
	var $pageflip = $("#pageflip"),
		pageflip,						//API
		banner = false,
		
		onResize = function( e ) {
			setBodyClass();
			var h = window.innerHeight-menuH;
			if( h>800 ) h=800;
			if( screenW < 480 ) h=320;
			$("#pageflip").css( { height: h } );
		},
		
		minW,
		menuH,
		screenW,
		mobile,
		desktop,
		mode,
		bclasses = [ "w320", "w480", "w768", "w1000" ],
		mhb = (banner?126:80),
		mhnm = (banner?46:0),
		menuHs = [ mhnm, mhnm, mhb, mhb ],
		minWs = [ 320, 480, 768, 964 ],
		setBodyClass = function() {
			var w = mobile? $(window).width(): window.screen.availWidth;
			if( screenW!=w ) {
			
				if( desktop == mobile ) {
					if( (mobile = !(desktop = w>1000)) ) {
						w = $(window).width();
					}
				}
				screenW = w;
				if( w<480 ) mode = 0;
				else if( w<768 ) mode = 1;
				else if( w<964 ) mode = 2;
				else mode = 3;
				menuH = menuHs[mode], minW = minWs[mode];
				
				$("body").attr("class", bclasses[mode]);
				$("#pageflip").css( { "min-width": minW } );
				$("#main-container").css( { "min-width": minW, "padding-top": menuH } );
				$("#menu-container").css( { height: menuH } );
				
			}
		},
	
	// demo book configs
		bookConfig = {
		meetpageflip: {	PageDataFile: "meetpageflip/meetpageflip.html",	//["externalPageData.html", "externalPageData2.html"],
					PageWidth: 450,
					PageHeight: 600,
					PageCache: 3,
					//CoverWidth: 450,
					//CoverHeight: 600,
					FullScreenEnabled: true,
					Transparency: true,
					Margin: 32,
					MarginBottom: 64,
					AutoScale: true,
					AlwaysOpened: false,
					StartPage: 1,
					AutoFlipLoop: -1,
					//ClickZoom: true,
					CenterSinglePage: true,
					DropShadowOpacity: 0.3,
					FlipTopShadowOpacity: 0.2,
					FlipShadowOpacity: 0.2,
					HardFlipOpacity: 0.3,
					EmbossOpacity: 0.2,
					SecondaryDragArea: 32,
					//Thumbnails: true,
					/*ThumbnailsToFront: true,
					ThumbnailsAutoHide: 3000,
					ThumbnailAlwaysCentered: true,
					ThumbnailWidth: 92,
					ThumbnailHeight: 120,*/
					ControlbarFile: "controlbar_svg.html",
					GoogleAnalytics: true,
					HashControl: true,
					ShareLink: "https://pageflip-books.com",
					ShareText: "Pageflip5, The Book Template for the Web",
					ShareVia: "@MaccPageFlip",
					ShareImageURL: "https://pageflip-books.com/images/shareimage.jpg",
					Copyright: Key.Copyright,
					Key: Key.Key
				},
		/*demo1: {	PageDataFile: "demobook1/demobook1.html",	//["externalPageData.html", "externalPageData2.html"],
					PageWidth: 434,
					PageHeight: 568,
					CoverWidth: 450,
					CoverHeight: 600,
					FullScreenEnabled: true,
					Transparency: true,
					Margin: 32,
					MarginBottom: 64,
					AutoScale: true,
					AlwaysOpened: false,
					StartPage: 1,
					AutoFlipLoop: -1,
					CenterSinglePage: true,
					DropShadowOpacity: 0.1,
					FlipTopShadowOpacity: 0.1,
					FlipShadowOpacity: 0.1,
					HardFlipOpacity: 0.3,
					EmbossOpacity: 0.1,
					Thumbnails: true,
					ThumbnailsToFront: true,
					ThumbnailsAutoHide: 3000,
					ThumbnailAlwaysCentered: true,
					ThumbnailWidth: 92,
					ThumbnailHeight: 120,
					ControlbarFile: "controlbar_svg.html",
					GoogleAnalytics: true,
					HashControl: true,
					ShareLink: "https://pageflip-books.com",
					ShareText: "Pageflip5, The Book Template for the Web",
					ShareVia: "@MaccPageFlip",
					ShareImageURL: "https://pageflip-books.com/images/shareimage.jpg",
					Copyright: Key.Copyright,
					Key: Key.Key
				},*/
		demo2: {	PageDataFile: "demobook2/demobook2.html",	//["externalPageData.html", "externalPageData2.html"],
					PageWidth: 434,
					PageHeight: 568,
					PageCache: 3,
					HardPages: true,
					FullScreenEnabled: true,
					Transparency: true,
					Margin: 0,
					AutoScale: true,
					FlexibleContent: true,
					FlexibleContentMinWidth: 860,
					StartPage: 1,
					AutoFlipLoop: -1,
					Thumbnails: true,
					ThumbnailsToFront: true,
					ThumbnailsAutoHide: 5000,
					ThumbnailsHidden: true,
					ThumbnailAlwaysCentered: true,
					ThumbnailWidth: 104,
					ThumbnailHeight: 120,
					ControlbarFile: "controlbar_svg.html",
					ControlbarToFront: true,
					Preflip: false,
					GoogleAnalytics: true,
					HashControl: true,
					ShareLink: "https://pageflip-books.com",
					ShareText: "Pageflip5, The Book Template for the Web",
					ShareVia: "@MaccPageFlip",
					ShareImageURL: "https://pageflip-books.com/images/shareimage2.jpg",
					Copyright: Key.Copyright,
					Key: Key.Key
				},
		yotenia10perritos: {	PageDataFile: "demobook3/demobook3.html",
					PageWidth: 450,
					PageHeight: 586,
					PageCache: 3,
					FullScreenEnabled: true,
					Margin: 32,
					MarginBottom: 64,
					AutoScale: true,
					AutoFlipLoop: -1,
					DropShadowOpacity: 0.1,
					FlipTopShadowOpacity: 0.1,
					FlipShadowOpacity: 0.1,
					HardFlipOpacity: 0.3,
					EmbossOpacity: 0.1,
					Thumbnails: true,
					ThumbnailsToFront: true,
					ThumbnailsAutoHide: 5000,
					ThumbnailsHidden: true,
					ThumbnailAlwaysCentered: false,
					ThumbnailWidth: 92,
					ThumbnailHeight: 120,
					ControlbarFile: "controlbar_svg.html",
					CenterSinglePage: true,
					GoogleAnalytics: true,
					HashControl: true,
					ShareLink: "https://pageflip-books.com",
					ShareText: "Pageflip5, The Book Template for the Web",
					ShareVia: "@MaccPageFlip",
					ShareImageURL: "https://pageflip-books.com/images/shareimage.jpg",
					Copyright: Key.Copyright,
					Key: Key.Key
				},
		fantasticfour: {	PageDataFile: "demobook4/demobook4.html",
					PageWidth: 516,
					PageHeight: 784,
					PageCache: 3,
					FullScreenEnabled: true,
					Margin: 32,
					MarginBottom: 90,
					AutoScale: true,
					//FullScale: true,
					AlwaysOpened: false,
					StartPage: 1,
					AutoFlipLoop: -1,
					CenterSinglePage: true,
					DropShadowOpacity: 0.3,
					FlipTopShadowOpacity: 0.5,
					FlipShadowOpacity: 0.5,
					HardFlipOpacity: 0.5,
					EmbossOpacity: 0.5,
					Thumbnails: true,
					ThumbnailsToFront: true,
					ThumbnailsAutoHide: 3000,
					ThumbnailAlwaysCentered: true,
					ThumbnailWidth: 92,
					ThumbnailHeight: 120,
					ControlbarFile: "controlbar_svg.html",
					ControlbarToFront: false,
					GoogleAnalytics: true,
					HashControl: true,
					ShareLink: "https://pageflip-books.com",
					ShareText: "Pageflip5, The Book Template for the Web",
					ShareVia: "@MaccPageFlip",
					ShareImageURL: "https://pageflip-books.com/images/shareimage.jpg",
					PerformanceAware: true,
					ShowCopyright: true,
					Copyright: "All Characters © Marvel Comics. All artwork © Juan Doe. Powered by Pageflip5",
					Key: "hjWxMjfD5IjN9Jb4o5lqwIb"
					
					//Copyright: Key.Copyright,
					//Key: Key.Key
				},
		ppp: {		PageDataFile: "ppp/ppp.html",
					SinglePageMode: true,
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
					ShowCopyright: true,
					Copyright: "<a href='http://ustwo.com/ppp' target='_blank'>Copyright © 2014 ustwo studio Ltd. All rights reserved.</a> <a href='pdf-converter.php' target='_blank'>This Book was converted using the PDF to Pageflip5 converter!</a>",
					Key: "T6/QY1LOnIe5krgmA2I/fej"
				}

		},
		defaultID = "meetpageflip",	//"demo1",
		startID = defaultID,
		loadedID,
		closing,
		
	//initial hash check (multibook feature)
		getHashID = function() {
			var h = location.hash;
			return h.substr( 1 ).split("/")[0];
		},
		
		id = getHashID(),
		
	//smooth page scrolling
	/*$("a[href*=#]").live( "click", function( e ) {
			e.preventDefault();
			var p = $(this.hash).position().top-80,
				mp = $(document).height()-$(window).height(),
				dest = ( p>mp )? mp: p;
			$("html,body").stop().animate({scrollTop:dest}, 800,"swing");
		});*/
		gotoAnchor = function( a ) {
			var p = $( a ).position().top-mhb,	//+32,	//112
				mp = $(document).height()-$(window).height(),
				dest = ( p>mp )? mp: p;
			$("html,body").stop().animate({scrollTop:dest}, 800,"swing");
		};
		
	if(banner) $("#menu-container").addClass("withnews");
		
	$(document).on( "click", "a[href*=#]", function( e ) {
			e.preventDefault();
			if( this.hash ) {
				gotoAnchor( this.hash );
			}
	});
	
	onResize();
	setBodyClass();
	
	$(window).bind( "resize", onResize );
	
	// start the main book automatically!
	startPageflip = function( id ) {
		if( closing || id==loadedID ) return
		if( loadedID ) {
			/* we have a loaded book, so unload it first */
			closing = true;
			loadedID = undefined;
			pageflip.closePageflip( function() { closing = false; startPageflip( id ); } );
		} else {
			loadedID = id;
			var h = getHashID();
			if( ( defaultID==id && h && h!=id ) || ( defaultID!=id && h!=id ) ) location.hash = id;
			$pageflip.pageflipInit( bookConfig[id], id );
			pageflip = $pageflip.pageflip();
			if( loadedID == defaultID ) pageflip.setPFEventCallBack( CustomPFEventHandler );
			else pageflip.setPFEventCallBack( null );
		}
		onResize();
	};
	
	// MEET PAGEFLIP FUNCTIONS ------------------------------------------------------------------------------------------
	//
	// This section of functions are for supporting Meet Pageflip5 book's functions.
	
			gotoPage = function( p ) {
				pageflip.gotoPage( p, true );
			}
			videoPlay = function() {
				var myVideo = document.getElementById("thevideo");
				//console.log( myVideo );
				if (myVideo.paused) myVideo.play(); 
				else myVideo.pause(); 
			}
			videoInit = function() {
				var myVideo = document.getElementById("thevideo");
				myVideo.addEventListener( "waiting", function() {
					//console.log("waiting");
				});			
				myVideo.addEventListener( "canplaythrough", function() {
					//console.log("canplaythrough");
				});			
			}
			
			selectFeature = function( f ) {
				$(".features").addClass("off");
				$("#feature"+f).removeClass("off");
				$("#featurelist ul li").removeClass("selected");
				$("#option"+f).addClass("selected");
			}
			var animmode = 1, animbtns = [ "#animateontop", "#animateonvisible" ];
			animation = function( t ) {
				animmode = t;
				$(".animationcontrol").removeClass("selected");
				$(animbtns[t]).addClass("selected");
				
				
			}
			// start loop!
			var loop = false, rot = 0, target;
			theLoop = function() {
				if( loop ) raf2( theLoop );
				//console.log( "loop" );
				setRot();
				rot = (rot+4)%360;
			}
			setRot = function() {
				$("#spiral").css( { transform: "rotate("+rot+"deg)" } );
			}
			window.raf2 = (function(){
				return 	window.requestAnimationFrame       ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame    ||
						function( callback ) {
						window.setTimeout( callback, 100/6 );
				};
			})();
			startLoop = function() {
				if( loop ) {
					//console.log("**already started - skip");
					return;
				}
				loop = true;
				theLoop();
				//console.log( "*startloop" );
			}
			stopLoop = function() {
				loop = false;
				//console.log( "stoploop" );
			}

			var zooming = false;
			setZoomFlag = function() {
				if( zooming ) $("#iszooming").addClass("selected");
				else $("#iszooming").removeClass("selected");
			}

			var CustomPFEventHandler = {
				onFlip: function( PN ) 	{ 
					if( PN==18 ) $("#isflipping").addClass("selected");
				},
				onFlipEnd: function( PN ) {
					if( PN==18 ) $("#isflipping").removeClass("selected");
				},
				onTop: function( PN ) {
					if( PN==21 && animmode==0 ) startLoop();
					if( PN==18 ) $("#isontop").addClass("selected");
				},
				onTopEnd: function( PN ) {
					if( PN==21 && animmode==0 ) stopLoop();
					if( PN==18 ) $("#isontop").removeClass("selected");
				},
				onLoad: function( PN ) {
					if( PN==11 ) videoInit();
					if( PN==18 ) setZoomFlag();
				},
				onUnload: function( PN ) {
					if( PN==21 && animmode==1 ) stopLoop();
				},
				onHide: function( PN ) {
					if( PN==21 && animmode==1 ) stopLoop();
					if( PN==18 ) $("#isvisible").removeClass("selected");
				},
				onShow: function( PN ) {
					if( PN==21 ) {
						if( animmode==1 ) startLoop();
						else setRot();
						animation( animmode );
					}
					if( PN==18 ) $("#isvisible").addClass("selected");
				},
				onZoomIn: function( PN ) {
					zooming = true;
					setZoomFlag();
				},
				onZoomOut: function( PN ) {
					zooming = false;
					setZoomFlag();
				}
			}//*/
	
	// END of MEET PAGEFLIP functions -------------------------------------------------------------------------------
	
	
	if( bookConfig[id] && defaultID!=id ) {  startID = id; } 
	else { if( $("#"+id).length ) gotoAnchor( "#"+id ); }

	startPageflip( startID );

});