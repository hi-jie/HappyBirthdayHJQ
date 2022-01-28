$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });
});
loadAudioFile('music/与你同在.m4a');
$(window).click(function(){
       $('audio')[0].play();
    });