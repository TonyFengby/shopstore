function bannermove2(){
			var height=$(".index-banner2 .bannerin").innerHeight();
			$(".index-banner2 .bannerin").animate({scrollTop:height},500,function(){
				$(".index-banner2 .bannerin").scrollTop(0)
			})
		}

function movelist(){
			$(".navstyle").click(function(){
				var index=0;
				var width=$(window).width();
				if(width>640){
					width=640;
				}
				if(width<320){
					width=320;
				}
				index=$(this).index();
				var height=$(".mianstyle").eq(index).height()
				$(".navstyle p").removeClass("active");
				$(".listmain").height(height)
				$(".navstyle").eq(index).children("p").addClass("active");
				$(".listmain").scrollLeft(index*width);
			})
		}

function bannermove(obj,num,speed){
			var _obj1=obj+" .bannerin";
			var _obj2=obj+" .controlbox>div";
			var _num=num;
			var _speed=speed;
			var index=0;
			function banner(){
				index++;
				var width=$(_obj1).innerWidth();
				$(_obj1).animate({scrollLeft:index*width},500,function(){
					if(index==_num){
					index=0; 
					$(_obj1).scrollLeft(index*width)
					};
					$(_obj2).removeClass("active");
					$(_obj2).eq(index).addClass("active");
				});
			}
			var auto=setInterval(banner,_speed);
			$(_obj2).click(function(){
				clearInterval(auto);
				var width=$(_obj1).innerWidth();
				var i=$(this).index();
				index=i;
				$(_obj2).removeClass("active");
				$(this).addClass("active");
				$(_obj1).stop().animate({scrollLeft:index*width},500);
				auto=setInterval(banner,_speed);
			})
			
			
		}


function changerem(){
				setTimeout(function(){
				var width=$(window).width();
				if(width<=640){
				$(" .listactive").css("left",0)
				}
				if(width>640){
					$(" .listactive").css("left",(width-640)/2)
					width=640;
				}
				if(width<320){
					width=320;
				}
				$("html").css("font-size",width/16);
				
				},10)
		}



		function cartcount(){
			vm.count=0; 
				for(var i=0;i<vm.arr.length;i++){
					if(vm.arr[i].choice){
					vm.count+=vm.arr[i].num
					}
				}
		}
		


$(window).ready(function(){
				changerem()
			})
			changerem()
			$(window).resize(function(){
				changerem()
			})