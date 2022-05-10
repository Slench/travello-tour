$('.flesh-deals__slick').slick({
	arrows:false,
	dots:false,
	slidesToShow:5,
	slidesToScroll:2,
	centerMode: true,
	touchThreshold:100,
	waitForAnimate:false,
	//variableWidth: true,
	infinite:true,
	responsive:[
		{
			breakpoint: 1800,
			settings: {
				slidesToShow:4,
			}
		},
		{
			breakpoint: 1350,
			settings: {
				slidesToShow:3,
			}
		},
		{
			breakpoint: 1050,
			settings: {
				slidesToShow:2,
			}
		},
		{
			breakpoint: 630,
			settings: {
				slidesToShow:1,
			}
		},
	]

});