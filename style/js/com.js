$(function(){
	var btn = $(".menu_app");
	var close_menu = $(".close_menu");
	var menu = $(".menu");
	var main_container = $(".main_container");
	var state = 0; //0:close 1:open
	var cur = 0; // 0:page_1 2:page_2 ...

	function showMenu (argument) {
		main_container.animate({left: -$(".menu").width()}, 300);
		menu.animate({right: '0'}, 300);
		state = 1;
	}
	function hideMenu (argument) {
		main_container.animate({left: '0'}, 300);
		menu.animate({right: -$(".menu").width()-50}, 300);
		state = 0;
	}


	$(".close_menu").click(function() {
		hideMenu();
	});

	btn.click(function(e){
		if (state === 0) {
                        //alert(111); return false;
			showMenu();
		} else{
			hideMenu();
		}
		e.stopPropagation();
	});

	menu.click(function(e) {
		e.stopPropagation();
	});

	var menu_item = menu.find('li');
	menu_item.click(function(event) {
		$(".page_wrap").stop().animate({"top":-(($(this).index())*$(".page").height())}, 800, 'easeInOutExpo');
		menu_item.removeClass('cur');
		$(this).addClass('cur')

		cur = $(this).index();
		// hideMenu();
	});

	menu.mouseleave(function() {
		hideMenu();
	});

	$(document).click(function() {
		hideMenu();
	});

	setSize();

	var timer = 0;
	$(window).resize(function() {
		setSize();
		clearTimeout(timer);
		timer = setTimeout(function(){
			//setSize();
			//$(".menu li").eq(cur-1).trigger('click')
			$(".page_wrap").stop().animate({"top":-(cur*$(".page").height())}, 200, 'swing');
		},100);
	});

	function setSize () {
		$(".page_wrap").css('height', Math.floor($(window).height()*7));
		$(".page").css('height', Math.floor($(window).height()*0.75));
	}

	//work_item
	$(".work_item").hover(function() {
		$(this).find('.cover').stop().fadeIn(200);
	}, function() {
		$(this).find('.cover').stop().fadeOut(200);
	});

	//msg_item hover
	$(".msg_item .msg_q").hover(function() {
		$(this).stop().animate({height:"70%"}, 200);
		$(this).next(".msg_a").stop().animate({height:"30%"}, 200);
	}, function() {
		$(this).stop().animate({height:"50%"}, 200);
		$(this).next(".msg_a").stop().animate({height:"50%"}, 200);
	});

	$(".msg_item .msg_a").hover(function() {
		$(this).stop().animate({height:"69%"}, 200);
		$(this).prev(".msg_q").stop().animate({height:"31%"}, 200);
	}, function() {
		$(this).stop().animate({height:"50%"}, 200);
		$(this).prev(".msg_q").stop().animate({height:"50%"}, 200);
	});

	//close about
	$(".p_about .about_more").click(function(){
		$(".p_about .about_big").stop().animate({"margin-left":"0"}, 400, "easeInOutQuad");
	})
	$(".p_about .close").click(function(){
		$(".p_about .about_big").stop().animate({"margin-left":"-40%"}, 400, "easeInOutQuad");
	})

	//f_links
	$(".add").click(function(){
		$(".m_icon_5").trigger('click')
	})

	$(".show_content").click(function() {
		$(".show_detail").stop().animate({top: "0"}, 600, "easeOutExpo")
	});
})