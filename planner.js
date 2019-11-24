$(document).ready(function(){
    renderText();
    var time = moment().local().format("dddd, MMMM Do YYYY");

     $('p').append(time);


    $('form').submit("submit",function(e){
        e.preventDefault();
        var nineText = $("#9-text").val();
        var tenText = $('#ten-am').val();
        var elevenText= $('#eleven-am').val();
        var twelveText= $('#twelve-pm').val();
        var oneText= $('#one-pm').val();
        var twoText= $('#two-pm').val();
        var threeText= $('#three-pm').val();
        var fourText= $('#four-pm').val();
        var fiveText= $('#five-pm').val();
        var schedule = {
            nine: nineText.trim(),
            ten: tenText.trim(),
            eleven: elevenText.trim(),
            twelve: twelveText.trim(),
            one: oneText.trim(),
            two: twoText.trim(),
            three: threeText.trim(),
            four: fourText.trim(),
            five: fiveText.trim(),
        };
        //console.log(schedule);
        console.log(event.type);
        localStorage.setItem("schedule",JSON.stringify(schedule));
        
        
    })
            function renderText(){
                var sched = JSON.parse(localStorage.getItem('schedule'));
        
                 $("#9-text").val(sched.nine);
                 $('#ten-am').val(sched.ten);
                 $('#eleven-am').val(sched.eleven);
                 $('#twelve-pm').val(sched.twelve);
                 $('#one-pm').val(sched.one);
                 $('#two-pm').val(sched.two);
                 $('#three-pm').val(sched.three);
                 $('#four-pm').val(sched.four);
                 $('#five-pm').val(sched.five);
                console.log(sched);
            }
    
  
    
});