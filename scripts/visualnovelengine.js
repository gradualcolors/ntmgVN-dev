/*
   Code by @ainekisaragi
*/
$(document).ready(function() {
    initialScene();

    $(".handle").click(function() {
        $("#toggle_text").toggle();
    });

    $(".a-back").click(function() {
        if(!maxSpeed)
        {
        $(".arrows").css("pointer-events", "none");
        $("input.autoplay").css("pointer-events", "none");
        }
        else
        {
         $(".arrows").css("pointer-events", "auto");
        $("input.autoplay").css("pointer-events", "auto");   
        }
        backDialogue();
    });

    $(".a-next").click(function() {
        if(!maxSpeed)
        {
        $(".arrows").css("pointer-events", "none");
        $("input.autoplay").css("pointer-events", "none");
        }
        else
        {
         $(".arrows").css("pointer-events", "auto");
        $("input.autoplay").css("pointer-events", "auto");   
        }
        nextDialogue();
    });

    createStoryLog(conversations);

});




$('.reload-link').click(function(e) {
    e.preventDefault();
    window.location.href = window.location.href;
});

/*STORY SCRIPT*/
var convBox = document.getElementById("textbox");
var arrows = document.getElementsByClassName('arrows');
/*var spkBox = document.getElementById('char');*/
var spkBox;
var backBox = document.getElementsByClassName('center_div');
var rend_A = document.getElementById('rend-a');
var rend_B = document.getElementById('rend-b');
var rend_S = document.getElementById('rend');
var index = 0;
var convIndex = 0;
var speed = 21;
var maxSpeed = false;
var tempAutoFlag = false;
$(".autoplay").click(function() {


    if (index != conversations.length - 1) {
        if (($("input.autoplay").is(":checked"))) {
            $(".arrows").css("pointer-events", "none");

            autoTextPlayer();
        } else {
            $(".arrows").css("pointer-events", "auto");
        }
    } else {
        return;
    }


});

 $("#speed").change(function () {
        var speedVal = $("#speed").val();
        if (speedVal != "MAX")
            {
                speed = 21 * speedVal;
                maxSpeed = false;
            }
        else
            {
                maxSpeed = true;
            }
    });

/*MODAL*/

// Get the modal
var modal = document.getElementById("end_chap");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal_branch = document.getElementById("branch");

var closeBranch = document.getElementsByClassName("closeBranch")[0];

closeBranch.onclick = function() {
    modal_branch.style.display = "none";
    $(".arrows").css("pointer-events", "auto");
    $("input.autoplay").prop("checked", tempAutoFlag);  
}



// Get the <span> element that closes the modal
// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it


/*SCENE LOAD*/

//INITIAL
function initialScene() {

    index = 0;

    $('.back').hide();

    //convBox.innerHTML = conversations[index]["conline"];

    typeWriter(conversations[index]["conline"]);


    if (parseInt(conversations[index]["numofchars"]) > 1) {
        switch (conversations[index]["activespeaker"]) {
            case "charA":
                spkBox = document.getElementById('char');
                $("#char-name").show();
                $("#char-name2").hide();
                $("#rend-a").removeClass("passive");
                $("#rend-b").addClass("passive");
                $("#render_a").addClass("active_rend");
                $("#render_b").removeClass("active_rend");
                $(".bubble").css("background", conversations[index]["hexcolor"]);
                if (parseInt(conversations[index]["numofchars"]) > 1) {
                    $("#textbox").addClass("char-left").removeClass("char-right");
                }
                break;
            case "charB":
                spkBox = document.getElementById('char2');
                $("#char-name2").show();
                $("#char-name").hide();
                $("#rend-b").removeClass("passive");
                $("#rend-a").addClass("passive");
                $("#render_b").addClass("active_rend");
                $("#render_a").removeClass("active_rend");
                $(".bubble").css("background", conversations[index]["hexcolor"]);
                if (parseInt(conversations[index]["numofchars"]) > 1) {
                    $("#textbox").removeClass("char-left").addClass("char-right");
                }
                break;
            case "both":
                spkBox = document.getElementById('char2');
                $("#char-name2").show();
                $("#char-name").hide();
                $(".bubble").css("background", "linear-gradient(140deg, " + conversations[index]["hexcolor"] + " 50%, " + conversations[index]["hexcolor2"] + " 75%)");
                $("#rend-a").removeClass("passive");
                $("#rend-b").removeClass("passive");
                $("#render_a").removeClass("active_rend");
                $("#render_b").removeClass("active_rend");
                $("#textbox").removeClass("char-left").removeClass("char-right");
                break;
            case "":
                spkBox = document.getElementById('char');
                $("#char-name2").hide();
                $("#char-name").hide();
                $("#rend-a").removeClass("passive");
                $("#rend-b").removeClass("passive");
                $("#render_a").removeClass("active_rend");
                $("#render_b").removeClass("active_rend");
                $("#textbox").removeClass("char-left").removeClass("char-right");
                break;
        }
    } else {
        if (conversations[index]["activespeaker"] != "") {
            spkBox = document.getElementById('char2');
            $("#char-name2").show();
            $(".bubble").css("background", conversations[index]["hexcolor"]);
        } else {
            spkBox = document.getElementById('char2');
            $("#char-name2").hide();
        }
        $("#char-name").hide();
        $("#rend-a").removeClass("passive");
        $("#rend-b").removeClass("passive");
        $("#render_a").removeClass("active_rend");
        $("#render_b").removeClass("active_rend");
        $("#textbox").removeClass("char-left").removeClass("char-right");

    }


    /* if(conversations[index]["activespeaker"] == "charA")
     {
     spkBox = document.getElementById('char');    
     $("#char-name").show();
     $("#char-name2").hide();
     $("#rend-a").removeClass("passive");
     $("#rend-b").addClass("passive");
     $("#render_a").addClass("active_rend");
     $("#render_b").removeClass("active_rend");
     
         if(parseInt(conversations[index]["numofchars"]) > 1)
         {
         $("#textbox").addClass("char-left").removeClass("char-right");
         }
     }
     else
     {
     spkBox = document.getElementById('char2');
     $("#char-name2").show();
     $("#char-name").hide();
     $("#rend-b").removeClass("passive");
     $("#rend-a").addClass("passive");
     $("#render_b").addClass("active_rend");
     $("#render_a").removeClass("active_rend");
          if(parseInt(conversations[index]["numofchars"]) > 1)
         {
         $("#textbox").removeClass("char-left").addClass("char-right");
         }
     }*/

    spkBox.innerHTML = conversations[index]["speaker"];


    backBox[0].style.background = "url('" + bg_path + conversations[index]["bg"] + ".png')  no-repeat";
    backBox[0].style.backgroundSize = "cover";


    switch (parseInt(conversations[index]["numofchars"])) {
        case 0:
            $('#sprites').css("display", "none");
            $('#sprite').css("display", "none");
            break;

        case 1:
            $('#sprites').css("display", "none");
            $('#sprite').css("display", "block");

            /*if (conversations[index]["activespeaker"] == "charA") {
                rend_S.src = chapter + conversations[index]["char1tag"]  + ".png";
            } else if (conversations[index]["activespeaker"] == "charB")

            {
                rend_S.src = chapter + conversations[index]["char2tag"]  + ".png";
            }*/

            rend_S.src = chapter + conversations[index]["charsingle"] + ".png";

            break;

        case 2:
            $('#sprite').css("display", "none");
            $('#sprites').css("display", "block");


            rend_A.src = chapter + conversations[index]["char1tag"] + ".png";
            rend_B.src = chapter + conversations[index]["char2tag"] + ".png";
            break;
        default:
            break;
    }
}


//NEXT
function nextDialogue() {

    $('#location').hide();

    if (index <= conversations.length) {
        index++;
        $('.back').show();

        if (index >= conversations.length) {
            $('.forward').hide();
            $('#star').hide();
            modal.style.display = "block";
            $(".arrows").css("pointer-events", "auto");
            //setTimeout('$(".arrows").css("pointer-events", "auto");', 1200);
            return;
        }



        /*   if(conversations[index]["activespeaker"] == "charA")
           {
           spkBox = document.getElementById('char');    
           $("#char-name").show();
           $("#char-name2").hide();
           $("#rend-a").removeClass("passive");
           $("#rend-b").addClass("passive");
           $("#render_a").addClass("active_rend");
           $("#render_b").removeClass("active_rend");
           
               if(parseInt(conversations[index]["numofchars"]) > 1)
               {
               $("#textbox").addClass("char-left").removeClass("char-right");
               }
           }
           else
           {
           spkBox = document.getElementById('char2');
           $("#char-name2").show();
           $("#char-name").hide();
           $("#rend-b").removeClass("passive");
           $("#rend-a").addClass("passive");
           $("#render_b").addClass("active_rend");
           $("#render_a").removeClass("active_rend");
                if(parseInt(conversations[index]["numofchars"]) > 1)
               {
               $("#textbox").removeClass("char-left").addClass("char-right");
               }
           }
           
           */
        
        
        if(conversations[index].hasOwnProperty('branch_flag'))
            
            {   if(conversations[index]["branch_flag"] == true)
                {  
                    modal_branch.style.display = "block";
                    
                    if($("input.autoplay").val() == true)
                    {
                    $("input.autoplay").prop("checked", false);
                    tempAutoFlag = true;
                    }
                    
                    $(".arrows").css("pointer-events", "none");
                    $(".back").css("display", "none");
                    return; 
                }
                
                    
            }

        if (parseInt(conversations[index]["numofchars"]) > 1) {
            switch (conversations[index]["activespeaker"]) {
                case "charA":
                    spkBox = document.getElementById('char');
                    $("#char-name").show();
                    $("#char-name2").hide();
                    $("#rend-a").removeClass("passive");
                    $("#rend-b").addClass("passive");
                    $("#render_a").addClass("active_rend");
                    $("#render_b").removeClass("active_rend");
                    $(".bubble").css("background-color", conversations[index]["hexcolor"]);
                    if (parseInt(conversations[index]["numofchars"]) > 1) {
                        $("#textbox").addClass("char-left").removeClass("char-right");
                    }
                    break;
                case "charB":
                    spkBox = document.getElementById('char2');
                    $("#char-name2").show();
                    $("#char-name").hide();
                    $("#rend-b").removeClass("passive");
                    $("#rend-a").addClass("passive");
                    $("#render_b").addClass("active_rend");
                    $("#render_a").removeClass("active_rend");
                    $(".bubble").css("background-color", conversations[index]["hexcolor"]);
                    if (parseInt(conversations[index]["numofchars"]) > 1) {
                        $("#textbox").removeClass("char-left").addClass("char-right");
                    }
                    break;
                case "both":
                    spkBox = document.getElementById('char2');
                    $("#char-name2").show();
                    $("#char-name").hide();
                    $(".bubble").css("background-image", "linear-gradient(140deg, " + conversations[index]["hexcolor"] + " 50%, " + conversations[index]["hexcolor2"] + " 75%)");
                    $("#rend-a").removeClass("passive");
                    $("#rend-b").removeClass("passive");
                    $("#render_a").removeClass("active_rend");
                    $("#render_b").removeClass("active_rend");
                    $("#textbox").removeClass("char-left").removeClass("char-right");
                    break;
                case "":
                    spkBox = document.getElementById('char');
                    $("#char-name2").hide();
                    $("#char-name").hide();
                    $("#rend-a").removeClass("passive");
                    $("#rend-b").removeClass("passive");
                    $("#render_a").removeClass("active_rend");
                    $("#render_b").removeClass("active_rend");
                    $("#textbox").removeClass("char-left").removeClass("char-right");
                    break;
            }
        } else {
            if (conversations[index]["activespeaker"] != "") {
                spkBox = document.getElementById('char2');
                $("#char-name2").show();
                $(".bubble").css("background-color", conversations[index]["hexcolor"]);
            } else {
                $("#char-name2").hide();
            }
            $("#char-name").hide();
            $("#rend-a").removeClass("passive");
            $("#rend-b").removeClass("passive");
            $("#render_a").removeClass("active_rend");
            $("#render_b").removeClass("active_rend");
            $("#textbox").removeClass("char-left").removeClass("char-right");

        }

        //convBox.innerHTML = conversations[index]["conline"];
        //spkBox.innerHTML = conversations[index]["speaker"];

        if (conversations[index]["conline"] == conversations[index - 1]["conline"]) {
            convBox.innerHTML = conversations[index]["conline"];
            spkBox.innerHTML = conversations[index]["speaker"];
            $(".arrows").css("pointer-events", "auto");
        } else {
            //convBox.style.opacity = 0;


            if (conversations[index]["speaker"] != conversations[index - 1]["speaker"]) {
                spkBox.style.opacity = 0;

                /*  setTimeout(function(){ 
                          convBox.innerHTML = conversations[index]["conline"]; 
                          convBox.style.opacity = 1;
                          spkBox.innerHTML = conversations[index]["speaker"];
                          spkBox.style.opacity = 1;
                          },400);
                */
                spkBox.innerHTML = conversations[index]["speaker"];
                spkBox.style.opacity = 1;
				
				if(!maxSpeed)
				{
                typeWriter(conversations[index]["conline"]);
				}
				else
				{
					$("#textbox").html(conversations[index]["conline"]);
				}


            } else {
                spkBox.style.opacity = 1;
                /* setTimeout(function(){ 
                     convBox.innerHTML = conversations[index]["conline"]; 
                     convBox.style.opacity = 1;
                     },400);
                 */
                spkBox.innerHTML = conversations[index]["speaker"];
				if(!maxSpeed)
				{
                typeWriter(conversations[index]["conline"]);
				}
				else
				{
					$("#textbox").html(conversations[index]["conline"]);
				}


            }

        }

                     switch (parseInt(conversations[index]["numofchars"])) {
                case 0:
                    $('#sprites').css("display", "none");
                    $('#sprite').css("display", "none");
                    break;

                case 1:
                    $('#sprites').css("display", "none");
                    $('#sprite').css("display", "block");

                    rend_S.src = chapter + conversations[index]["charsingle"] + ".png";
                    break;

                case 2:
                    $('#sprite').css("display", "none");
                    $('#sprites').css("display", "block");


                    rend_A.src = chapter + conversations[index]["char1tag"] + ".png";
                    rend_B.src = chapter + conversations[index]["char2tag"] + ".png";
                    break;
                default:
                    break;
            }
        
        
        if(conversations[index]["bg"].includes("BG"))
        { 
            
            if(conversations[index]["bg"] != conversations[index-1]["bg"] && conversations[index-1]["bg"].includes("BG"))
            {
            backBox[0].style.background = "url('" + bg_path + conversations[index]["bg"] + ".png')  no-repeat";
            backBox[0].style.backgroundSize = "cover";
            }

            else
                {
                    if(conversations[index-1]["bg"].includes("CG"))
                    {
                        $('#cg').fadeOut(1000);
                        backBox[0].style.background = "url('" + bg_path + conversations[index]["bg"] + ".png')  no-repeat";
                        backBox[0].style.backgroundSize = "cover";
                    }
                    else if(conversations[index-1]["bg"].includes("fade"))
                        {
                            $('.fade').fadeOut(1000);
                            $("#arrowbox").show();
                            $("#star").show();
                            backBox[0].style.background = "url('" + bg_path + conversations[index]["bg"] + ".png')  no-repeat";
                            backBox[0].style.backgroundSize = "cover";

                        }
                }
            
        }

        else if (conversations[index]['bg'].includes("CG")) {
            

            if ((conversations[index]['bg']) != conversations[index - 1]['bg'] && !(conversations[index - 1]['bg'].includes("CG"))) {
   
                
                    $('#cg').attr("src", cg_path + conversations[index]["bg"] + ".png");
                    $('#cg').fadeIn(1000);
            } 
                                    
            
            else if (conversations[index]['bg'] != conversations[index - 1]['bg'] &&
                conversations[index - 1]['bg'].includes("CG")) {

                
                $('#cg').fadeOut(500, function() {
                    $('#cg').attr("src", cg_path + conversations[index]["bg"] + ".png");
                }).fadeIn(500);
            }
        } 
        

        else if (conversations[index]['bg'] == "fade_black") {
  
            $("#arrowbox").hide();
            $("#star").hide();
            //$('.fade').css("background-color", "black");
            $('.fade').fadeIn(1000);
        } 

    }
    //setTimeout('$(".arrows").css("pointer-events", "auto");', 1200);


}

//BACK
function backDialogue() {


    if (index > 0) {

        if (index >= conversations.length) {
            index = index - 2;
        } else {
            index--;
        }
        $('.forward').show();
        //convBox.innerHTML = conversations[index]["conline"];
        //spkBox.innerHTML = conversations[index]["speaker"];

        if (index == 0) {
            $('#location').show();
            $('.forward').show();
            $('.back').hide();
            $(".arrows").css("pointer-events", "auto");
        } else {
            $('.back').show();
        }

        /*        if(conversations[index]["activespeaker"] == "charA")
           {
           spkBox = document.getElementById('char');    
           $("#char-name").show();
           $("#char-name2").hide();
           $("#rend-a").removeClass("passive");
           $("#rend-b").addClass("passive");
           $("#render_a").addClass("active_rend");
           $("#render_b").removeClass("active_rend");
           if(parseInt(conversations[index]["numofchars"]) > 1)
               {
           $("#textbox").addClass("char-left").removeClass("char-right");
               }
           }
           else
           {
           spkBox = document.getElementById('char2');
           $("#char-name2").show();
           $("#char-name").hide();
           $("#rend-b").removeClass("passive");
           $("#rend-a").addClass("passive");

           $("#render_b").addClass("active_rend");
           $("#render_a").removeClass("active_rend");
                       if(parseInt(conversations[index]["numofchars"]) > 1)
               {
           $("#textbox").removeClass("char-left").addClass("char-right");
               }
           }
           
           */
        if (parseInt(conversations[index]["numofchars"]) > 1) {
            switch (conversations[index]["activespeaker"]) {
                case "charA":
                    spkBox = document.getElementById('char');
                    $("#char-name").show();
                    $("#char-name2").hide();
                    $("#rend-a").removeClass("passive");
                    $("#rend-b").addClass("passive");
                    $("#render_a").addClass("active_rend");
                    $("#render_b").removeClass("active_rend");
                    $(".bubble").css("background-color", conversations[index]["hexcolor"]);
                    if (parseInt(conversations[index]["numofchars"]) > 1) {
                        $("#textbox").addClass("char-left").removeClass("char-right");
                    }
                    break;
                case "charB":
                    spkBox = document.getElementById('char2');
                    $("#char-name2").show();
                    $("#char-name").hide();
                    $("#rend-b").removeClass("passive");
                    $("#rend-a").addClass("passive");
                    $("#render_b").addClass("active_rend");
                    $("#render_a").removeClass("active_rend");
                    $(".bubble").css("background-color", conversations[index]["hexcolor"]);
                    if (parseInt(conversations[index]["numofchars"]) > 1) {
                        $("#textbox").removeClass("char-left").addClass("char-right");
                    }
                    break;
                case "both":
                    spkBox = document.getElementById('char2');
                    $("#char-name2").show();
                    $("#char-name").hide();
                    $(".bubble").css("background", "linear-gradient(140deg, " + conversations[index]["hexcolor"] + " 50%, " + conversations[index]["hexcolor2"] + " 75%)");
                    $("#rend-a").removeClass("passive");
                    $("#rend-b").removeClass("passive");
                    $("#render_a").removeClass("active_rend");
                    $("#render_b").removeClass("active_rend");
                    $("#textbox").removeClass("char-left").removeClass("char-right");
                    break;
                case "":
                    spkBox = document.getElementById('char');
                    $("#char-name2").hide();
                    $("#char-name").hide();
                    $("#rend-a").removeClass("passive");
                    $("#rend-b").removeClass("passive");
                    $("#render_a").removeClass("active_rend");
                    $("#render_b").removeClass("active_rend");
                    $("#textbox").removeClass("char-left").removeClass("char-right");
                    break;
            }
        } else {
            if (conversations[index]["activespeaker"] != "") {
                spkBox = document.getElementById('char2');
                $("#char-name2").show();
                $(".bubble").css("background-color", conversations[index]["hexcolor"]);
            } else {
                $("#char-name2").hide();
            }
            $("#char-name").hide();
            $("#rend-a").removeClass("passive");
            $("#rend-b").removeClass("passive");
            $("#render_a").removeClass("active_rend");
            $("#render_b").removeClass("active_rend");
            $("#textbox").removeClass("char-left").removeClass("char-right");

        }

        if (conversations[index]["conline"] == conversations[index + 1]["conline"]) {
            convBox.innerHTML = conversations[index]["conline"];
            spkBox.innerHTML = conversations[index]["speaker"];
            $(".arrows").css("pointer-events", "auto");
        } else {

            if (conversations[index]["speaker"] != conversations[index + 1]["speaker"]) {
                spkBox.style.opacity = 0;
                spkBox.innerHTML = conversations[index]["speaker"];
                spkBox.style.opacity = 1;
				if(!maxSpeed)
				{
                typeWriter(conversations[index]["conline"]);
				}
				else
				{
					$("#textbox").html(conversations[index]["conline"]);
				}


            } else {
                spkBox.style.opacity = 1;
                spkBox.innerHTML = conversations[index]["speaker"];
				if(!maxSpeed)
				{
                typeWriter(conversations[index]["conline"]);
				}
				else
				{
					$("#textbox").html(conversations[index]["conline"]);
				}

            }

        }
        
                   switch (parseInt(conversations[index]["numofchars"])) {
                case 0:
                    $('#sprites').css("display", "none");
                    $('#sprite').css("display", "none");
                    break;

                case 1:
                    $('#sprites').css("display", "none");
                    $('#sprite').css("display", "block");

                    rend_S.src = chapter + conversations[index]["charsingle"] + ".png";
                    break;

                case 2:
                    $('#sprite').css("display", "none");
                    $('#sprites').css("display", "block");


                    rend_A.src = chapter + conversations[index]["char1tag"] + ".png";
                    rend_B.src = chapter + conversations[index]["char2tag"] + ".png";
                    break;
                default:
                    break;
            }
        

        if(conversations[index]["bg"].includes("BG"))
        {   
            if(conversations[index]["bg"] != conversations[index+1]["bg"] && conversations[index+1]["bg"].includes("BG"))
            {
            backBox[0].style.background = "url('" + bg_path + conversations[index]["bg"] + ".png')  no-repeat";
            backBox[0].style.backgroundSize = "cover";
            }

            else
                {
                    if(conversations[index+1]["bg"].includes("CG"))
                    {
                        $('#cg').fadeOut(1000);
                        backBox[0].style.background = "url('" + bg_path + conversations[index]["bg"] + ".png')  no-repeat";
                        backBox[0].style.backgroundSize = "cover";
                    }
                    else if(conversations[index+1]["bg"].includes("fade"))
                        {
                            $('.fade').fadeOut(1000);
                            $("#arrowbox").show();
                            $("#star").show();
                            backBox[0].style.background = "url('" + bg_path + conversations[index]["bg"] + ".png')  no-repeat";
                            backBox[0].style.backgroundSize = "cover";

                        }
                }
            
        }

        else if (conversations[index]['bg'].includes("CG")) {
            

            if ((conversations[index]['bg']) != conversations[index + 1]['bg'] && !(conversations[index + 1]['bg'].includes("CG"))) {

                
                
                    $('#cg').attr("src", cg_path + conversations[index]["bg"] + ".png");
                    $('#cg').fadeIn(1000);
            } 
                                    
            
            else if (conversations[index]['bg'] != conversations[index + 1]['bg'] &&
                conversations[index + 1]['bg'].includes("CG")) {

                
                $('#cg').fadeOut(500, function() {
                    $('#cg').attr("src", cg_path + conversations[index]["bg"] + ".png");
                }).fadeIn(500);
            }
        } 
        

        else if (conversations[index]['bg'] == "fade_black") {
  
            $("#arrowbox").hide();
            $("#star").hide();
            //$('.fade').css("background-color", "black");
            $('.fade').fadeIn(1000);
        } 


    } else {
        $('.star').show();
        $('.forward').show();
        $('.back').hide();
        $(".arrows").css("pointer-events", "auto");
    }

    //setTimeout('$(".arrows").css("pointer-events", "auto");', 1200);
}

//TYPEWRITER
function typeWriter(str) {
    convBox.innerHTML = "";

    setTimeout(function() {
        if (!($("input.autoplay").is(":checked"))) {
            $(".arrows").css("pointer-events", "auto");
            $("input.autoplay").css("pointer-events", "auto");
        } else {
            $(".arrows").css("pointer-events", "none");
        }
    }, speed+1 + str.length * 20);

    for (let i = 0; i <= str.length; i++) {
        setTimeout(function() {
            convBox.innerHTML = str.substr(0, i);
        }, speed + i * 20);
    }

}

function createStoryLog(conversations) {

    var iDiv = document.createElement('div');
    iDiv.id = 'story_inner';
    iDiv.className = 'block';
    $("#story_div").append(iDiv);

    iDiv.innerHTML = "<div style='text-align:center;'><strong>Swim Lesson #1</strong></div>";

    var innerDiv = [];

    var index = 0;
    innerDiv[index] = document.createElement('div');
    innerDiv[index].className = 's_box log-' + index;
    $(iDiv).append(innerDiv[index]);
    innerDiv[index].innerHTML = "<strong>" + conversations[index]["speaker"] + "</strong><br/>" + conversations[index]["conline"];

    // Now create and append to iDiv
    for (index = 1; index <= conversations.length - 1; index++) {
        if (conversations[index]["conline"] == conversations[index - 1]["conline"]) {

            innerDiv[index] = document.createElement('div');
            innerDiv[index].className = 's_box log-' + index;
            $(iDiv).append(innerDiv[index]);
            innerDiv[index].innerHTML = "<strong>*** CG Image ***</strong>";

        } else {
            innerDiv[index] = document.createElement('div');
            innerDiv[index].className = 's_box log-' + index;
            $(iDiv).append(innerDiv[index]);
            innerDiv[index].innerHTML = "<strong>" + conversations[index]["speaker"] + "</strong><br/>" + conversations[index]["conline"];
        }
    }
}

async function autoTextPlayer() {

    do {
        if (($("input.autoplay").is(":checked"))) {


           // $("input.autoplay").css("pointer-events", "none");
            nextDialogue();
            setTimeout(function() {

            //    $("input.autoplay").css("pointer-events", "auto");
            }, speed + conversations[index]["conline"].length * 20 + 2000);


            await new Promise(r => setTimeout(r, speed + conversations[index]["conline"].length * 20 + 4000));

        } else {
            break;
        }
    }
    while (index < conversations.length - 1);
    $("input.autoplay").prop("checked", false);
    
    if (index == conversations.length - 1)
    {
    $('.forward').hide();
    $('#star').hide();
    modal.style.display = "block";
    $(".arrows").css("pointer-events", "auto");
    }
}