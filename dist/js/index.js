$(".n-ul li").mouseover(function(){$(this).children("p").slideDown("fast",function(){})}),$(".n-ul li").mouseover(function(){$(this).children("div").slideDown("fast",function(){})}),$(".n-ul li").mouseleave(function(){$(this).children("p").slideUp("fast",function(){})}),$(".n-ul li").mouseleave(function(){$(this).children("div").slideUp("fast",function(){})}),$(".tro-kuzi").hover(function(){$(this).find("p").animate({bottom:"0px"})},function(){$(this).find("p").animate({bottom:"-52px"})});var oWx=document.querySelector(".wx"),we=document.querySelector(".we");oWx.onmouseenter=function(){we.style.display="block"},oWx.onmouseleave=function(){we.style.display="none"};var mySwiper=new Swiper(".swiper-container",{speed:2500,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:4e3,disableOnInteraction:!1}}),txt=document.querySelector("#seh-txt");function fd(e,t,n,i,o){e.mouseenter(function(){$(this).children("img").animate({width:t,height:n,left:"-20px",top:"-20px"},200)}),e.mouseleave(function(){$(this).children("img").animate({width:i,height:o,left:"0",top:"0"},200)})}txt.onmouseenter=function(){txt.style.border="solid 1px #075bbc"},document.body.onclick=function(){txt.style.border="solid 1px #cccccc"};var input=document.querySelector("#seh-txt"),ul=document.querySelector(".seh-ul"),flag=!0;input.addEventListener("compositionstart",function(){flag=!1}),input.addEventListener("compositionend",function(){flag=!0}),input.oninput=function(){setTimeout(function(){if(flag){var e=input.value,i=document.createElement("script"),t="phone"+(new Date).getTime()+Math.random().toString().slice(2);i.src="https://suggest.taobao.com/sug?code=utf-8&q="+e+"&_ksTS=1563970517892_385&callback="+t+"&k=1&area=c2c&bucketid=10",window[t]=function(e){var t=e.result,n="";t.forEach(function(e){n+="<li>"+e[0]+"</li>"}),ul.innerHTML=n,i.remove()},document.body.appendChild(i)}},0)};