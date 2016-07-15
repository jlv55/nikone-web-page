$(document).ready(function($){

$("#mainMenu").naver({
    maxWidth: "740px"
});
	var options = { 
		videoId: 'hECrEMNSed4', 
		start: 3,
		mute: false,
		ratio: 16/9 };

	$('#YTVideoBackground').tubular(options);



    $('#socialFeed').socialist({
        networks: [
            {name:'youtube',id:'diegolwwe'}
        ],
        maxResults:15,
    	fixed:true
     });



$('#tweets').tweecool({
username : 'Nikonebiribibae',
limit : 1, // Number of tweets to show
profile_image : false, // Show profile image
show_time : true // Show tweet time
});



jQuery.fn.spectragram.accessData={
    accessToken:'1447218094.1677ed0.02279b442f774ee888faad39a3713bc8',
    clientID:'788900108b5242d7bbc99c0b7b6b3405'}
    
$('.instaFeed').spectragram('getUserFeed', {
        query: 'nikonepk93', //Change the instagram feed user to display the feed that you want.
        size: 'large',
        max: 10
});

        $('#mainVideo').parallax("50%", 0.3);

        $('#showdiv1').click(function() {
        $('div[id^=div]').hide();
        $('#div1').show();
    });
    $('#showdiv2').click(function() {
        $('div[id^=div]').hide();
        $('#div2').show();
    });
    $('#showdiv3').click(function() {
        $('div[id^=div]').hide();
        $('#div3').show();
    });
    $('#showdiv4').click(function() {
        $('div[id^=div]').hide();
        $('#div4').show();
    });
    $('#showdiv5').click(function() {
        $('div[id^=div]').hide();
        $('#div5').show();
    });
    $('#showdiv6').click(function() {
        $('div[id^=div]').hide();
        $('#div6').show();
    });
    $('#showdiv7').click(function() {
        $('div[id^=div]').hide();
        $('#div7').show();
    });
    $('#showdiv8').click(function() {
        $('div[id^=div]').hide();
        $('#div8').show();
    });

         $('#videoParallax').parallax("50%", 0.3);

     $(function() {
    $(".rslides").responsiveSlides({
         auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
    });
  });


});