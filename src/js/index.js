// 导航 衣服

$('.n-ul li').mouseover(function() {
	$(this).children('p').slideDown('fast', function() {
	// Animation complete.
	// $(this).children('.div1').slideDown('fast')
	
	});
});
$('.n-ul li').mouseover(function() {
	$(this).children('div').slideDown('fast', function() {
	// Animation complete.
	// $(this).children('.div1').slideDown('fast')
	
	});
});

$('.n-ul li').mouseleave(function() {
	$(this).children('p').slideUp('fast', function() {
	// Animation complete.
	});
});

$('.n-ul li').mouseleave(function() {
	$(this).children('div').slideUp('fast', function() {
	// Animation complete.
	});
});

	//找元素 $("")
	$(".tro-kuzi").hover(
		function(){
			$(this).find("p").animate({bottom:"0px"})
		},
		function(){
			$(this).find("p").animate({bottom:"-52px"})
		}
	);
	
	// 头部小功能
	var oWx = document.querySelector('.wx');
	var we = document.querySelector('.we');
	//console.log(oWx)
	 oWx.onmouseenter = function(){
		we.style.display = 'block';
	 }
	 oWx.onmouseleave = function(){
	 	we.style.display = 'none';
	 }
	
	
	// 轮播图
	var mySwiper = new Swiper('.swiper-container',{
	    speed:2500,
		loop: true, 
		pagination: {
		      el: '.swiper-pagination',
			  clickable :true
		},
		//透明度
		effect : 'fade',
		fadeEffect: {
			crossFade: true,
		},
		
		//左右点击
		  navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		//自动切换
	    autoplay: {
	      delay: 4000,
	      disableOnInteraction: false,
	      // waitForTransition: false,
	    },
	  })
	  // var mySwiper = new Swiper ('.swiper-container', {
	  //     autoplay:{
	  //       el:true,
	  //       disableOnInteraction : false,
	  //     },
	    
	  //     loop: true, 
	  //     pagination:{
	  //       el:'.swiper-pagination',
	  //       clickable :true,
	  //     },
	  //     effect : 'fade',
	  //     fade: {
	  //     crossFade: false,
	  //    },
	      
	  //     navigation: {
	  //       nextEl: '.swiper-button-next',
	  //       prevEl: '.swiper-button-prev',
	  //     },
	     
	  //   })
	  
	// 文本框
	var txt = document.querySelector("#seh-txt");
	// // console.log(txt)
	txt.onmouseenter = function(){
		txt.style.border='solid 1px #075bbc';
	}		
	document.body.onclick = function(){
		txt.style.border='solid 1px #cccccc';
	}  
	  
	  

		function fd(obj,w1,h1,w2,h2){
		    obj.mouseenter(function(){
		      var oImg = $(this).children('img')
		      oImg.animate({width:w1,height:h1,left:'-20px',top:'-20px'},200)
		    })
		    obj.mouseleave(function(){
		     var oImg = $(this).children('img')
		     oImg.animate({width:w2,height:h2,left:'0',top:'0'},200)
		   })
		}
		// fd($('.mkg-wrap a'),'610px','460px','590px','440px')
	  
	  
	// AJKS JSONP跨域  
	//需求分心: 在文本框输入的内容,根据输入的内容,请求接口,参数将根据内容不同而不同,得到的数据渲染在ul里  
	var input = document.querySelector('#seh-txt')
	var ul = document.querySelector('.seh-ul')
	//console.log(input)
	var flag = true;//判断用户是否输入完成,默认是完成的
	input.addEventListener('compositionstart',function(){
		flag = false;
	})
	input.addEventListener('compositionend',function(){
		flag = true;
	})
	  
	input.oninput  = function(){
		setTimeout(function(){
			if(flag){
				var keyword = input.value;//输入关键字 
				//创建script标签
				var script = document.createElement('script');
				//定义一个函数名
				var cbName = 'phone'+new Date().getTime()+Math.random().toString().slice(2);
				//设置该标签的src属性	
				script.src = "https://suggest.taobao.com/sug?code=utf-8&q="+keyword+"&_ksTS=1563970517892_385&callback="+cbName+"&k=1&area=c2c&bucketid=10";
				
				//定义一个函数
				window[cbName] = function(data){
					//console.log(data)
					var result = data.result//是一个数组
					var str = "";
					result.forEach(function(value){
						str +="<li>"+value[0]+"</li>"
					})
					ul.innerHTML = str;
					script.remove();
				}
				document.body.appendChild(script);  
			}
		
		},0)	
	}
	
	  
	  
	  
	  
	  
	  
	  
	