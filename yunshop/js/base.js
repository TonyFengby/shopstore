function changerem(){
				setTimeout(function(){
				var width=$(window).width();
				if(width>640){
					width=640;
				}
				if(width<320){
					width=320;
				}
				$("html").css("font-size",width/16)
				},10)
		}
			$(window).ready(function(){
				changerem()
			})
			changerem()
			$(window).resize(function(){
				changerem()
			})