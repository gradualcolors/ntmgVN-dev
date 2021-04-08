        var chapter = "../assets/sprites/";
        var bg_path = "../assets/backgrounds/";
        var cg_path = "../assets/cgs/";
        var getUrl = window.location;
        var devURL = getUrl.protocol + "//" + getUrl.host + "/ntmgVN-dev";
        var assets = "/assets/";
        var dir = devURL + "/assets/sprites/"
        var char1tag = "N";
        var char2tag = "T";
        var char3tag = "S";
        var numofCharA = 9;
        var numofCharB = 16;
        var numofCharC = 4;
		var imageSrcs = [];
        var bgsnum = 22;
        imageSrcs.push("../assets/cgs/CG1.png", "../assets/cgs/CG2.png", "../assets/cgs/CG2A.png", "../assets/cgs/CG3.png", "../assets/cgs/CG4.png", "../assets/cgs/CG5.png");

		imageSrcs.push("../assets/menubutton.png", "../assets/menubutton_open.png", "../assets/story_menu.png","../assets/card_menu.png", "../assets/idol_menu.png", "../assets/map_menu.png", "../assets/home_menu.png", "../assets/modalbg.png");
		//imageSrcs.push("/bgs/BG_Game_Club_Room.jpg","/bgs/Pool_BG_1.jpg", "/bgs/Pool_BG_2.jpg");
		//imageSrcs.push("../assets/rai.jpg","../assets/byeol.jpg", "../assets/kari.jpg");
		//imageSrcs.push("/cgs/CG1.jpg");


		for(var s = 1; s<=numofCharA; s++)
		    {
		        var charA = dir + char1tag +s+ ".png";
		        imageSrcs.push(charA);
		    }

		for(var n = 1; n<=numofCharB; n++)
		    {
		        var charB =  dir + char2tag +n+ ".png";
		        imageSrcs.push(charB);
		    }

        for(var t = 1; t<=numofCharC; t++)
		    {
		        var charC =  dir + char3tag +t+ ".png";
		        imageSrcs.push(charC);
		    }
        
   /*     for(var b = 1; b<=bgsnum; b++)
		    {
		        var bg =  bg_path + "BG" +n+ ".png";
		        imageSrcs.push(bg);
		    }
        */
        Array.prototype.push.apply(imageSrcs, bgs);
		var images = [];

		preloadImages(imageSrcs, images, loadModels);

		function preloadImages(srcs, imgs, callback) {
		    var img;
		    var remaining = srcs.length;
		    for (var i = 0; i < srcs.length; i++) {
		        img = new Image();
		        img.onload = function() {
		            --remaining;
		            if (remaining <= 0) {
		                callback();
		            }
		        };
		        img.src = srcs[i];
		        imgs.push(img);
		    }
		}

		function loadModels() {
		  console.log("Images loaded");
		}