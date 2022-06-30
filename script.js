$(document).ready(function(){

    $('#hidden').hide();
    
    $('#showing').mouseover(function(){
        $('#hidden').fadeIn(250);
    });

    $('#showing').mouseout(function(){
        $('#hidden').fadeOut(250);
    });

    let totalClick = 0;
    let txt = "Total clicks on this site: ";
    let show = document.getElementById('clicks');
        show.innerHTML = txt + totalClick;

    $(document).click(function(){
        totalClick++;
        show.innerHTML = txt + totalClick;
    });

    $(document).keydown(function(){
        totalClick = 0;
        show.innerHTML = txt + totalClick;
    })

    $('input').focus(function(){
        $(this).css("background-color",  "gray");
    });
    $('input').blur(function(){
        $(this).css("background-color",  "white");
    });

    $('#panel').hide();

    $('#text').click(function(){
        $('#panel').slideToggle();
    });

    let Animations = 0;


    $("button#button").click(function(){
        if(Animations <1){
            $("div.box").animate({left: '350px', opacity: 0.5, height: '60px', width: '60px'}, 5000);
            $("div#box2").css('background-color', "yellow");
            $("div#box3").css('background-color', "yellow");
        } else {
            $("div.box").animate({left: '700px', opacity: 0.1, height: '20px', width: '20px'}, 5000);
            $("div#box3").css('background-color', "green");
        }
        Animations++;
    });

    $("button#button2").click(function(){
        if(Animations > 1) {
            $("div.box").animate({left: '350px', opacity: 0.5, height: '60px', width: '60px'}, 5000);
            $("div#box2").css('background-color', "yellow");
            $("div#box3").css('background-color', "yellow");
        } else {
            $("div.box").animate({left: '0px', opacity: 1, height: '100px', width: '100px'}, 5000);
            $("div#box2").css('background-color', "red");
            $("div#box3").css('background-color', "red");
        }
        Animations--;
    });

    $('p#p').click(function(){
        alert("Text: "+ $('p#p').text());
        alert("HTML: "+ $('p#p').html());
    });

    $('button#show').click(function(){
        let Value = Number($('input#input').val())
        alert("Value: " + Value * 2);
    });

});
































// This will make the site unuseable. DO NOT UNCOMMENT
/*$(document).ready(function(){
    $(this).mouseover(function(){
        alert("Mouse has been moved onto website");
        $(this).keydown(function(){
            alert("Key on keyboard was pressed");
            $(this).scroll(function(){
                alert("You scrolled the website");
                $(this).unload(function(){
                    alert("Website unloaded");
                });
            });
        });
        $(this).keyup(function(){
            alert("The key is no longer pressed");
        });
    });
    $(this).mouseout(function(){
        alert("Mouse left the website");
    });
});*/