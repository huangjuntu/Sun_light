$(function() {
	setTimeout(function() {
						$('.rule').addClass("animated bounceInRight");

					}, 100);
	
	//	图像上传
	var pic_ad = 'img/head-img.png';
	var name = 'hjt';

	$(".head-img img").attr('src', pic_ad);
	$('.head-dsb').find('p').eq(0).html('昵称：' + name);

	function lightProgressBar(growthlevel) {
		var width_big = $('.dsb-bar').width();
		//假设满分3000
		console.log("取得的宽是：" + width_big); //500
		var width_sm = growthlevel / 3000;
		$("h3").css("width", width_sm * 100 + "%");
	}

	function viprank(growthlevel) {
		lightProgressBar(growthlevel);
		$('.dbs-point').html('光点：' + growthlevel);
		//		等级一:
		if(0 < growthlevel && growthlevel <= 100) {
			$('.dbs-grade').html('lv1');
			$('.drop').css('background-color', 'yellow');
			$('.nav p').html("灯1");
			//		等级二
		} else if(100 < growthlevel && growthlevel <= 300) {
			$('.dbs-grade').html('lv2');
			$('.drop').css('background-color', 'green');
			$('.nav p').html("灯2");
			//		等级三
		} else if(300 < growthlevel && growthlevel <= 800) {
			$('.dbs-grade').html('lv3');
			$('.drop').css('background-color', 'pink');
			$('.nav p').html("灯3");
			//		等级四
		} else if(800 < growthlevel && growthlevel <= 1500) {
			$('.dbs-grade').html('lv4');

			$('.drop img').click(function() {
					$('.drop').css('background-color', 'coral');
					$('.nav p').html("灯王");
					
				})
				//		等级五
		} else if(1500 < growthlevel && growthlevel <= 3000) {
			$('.dbs-grade').html('lv5');
			$('.drop').css('background-color', 'red');
			$('.nav p').html("灯神");

		}
	}
	viprank(1500); //最大为3000光点

	//	开关
	$('.check-on').click(function() {
		$(this).toggleClass('check-off');
		var t = $(this).attr('class');
		if(t == 'check-on check-off') {
			$(this).html('已参加');
		} else {
			$(this).html('报名');
		}
	})

	//	下拉
	$('.arr-bottom').click(function() {
		$('.nav').slideToggle();
		$(this).toggleClass('arr-top');
	})

	$('.mt-1').find('.act').click(function() {
		var myindex = $(this).index();
		console.log(myindex);
		$(this).next().next().slideToggle();
		//		$('.act-content').slideDown();

	})

})