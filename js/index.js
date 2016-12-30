$(function() {
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
			$('.clt').css('background-color','yellow');
			$('.pt-line p').html("灯1");
//		等级二
		} else if(100 < growthlevel && growthlevel <= 300) {
			$('.dbs-grade').html('lv2');
			$('.clt').css('background-color','green');
			$('.pt-line p').html("灯2");
//		等级三
		} else if(300 < growthlevel && growthlevel <= 800) {
			$('.dbs-grade').html('lv3');
			$('.clt').css('background-color','pink');
//		等级四
		} else if(800 < growthlevel && growthlevel <= 1500) {
			$('.dbs-grade').html('lv4');
			$('.clt').css('background-color','coral');
			$('.pt-line p').html("灯王");
//		等级五
		} else if(1500 < growthlevel && growthlevel <= 3000) {
			$('.dbs-grade').html('lv5');
			$('.clt').css('background-color','red');
			$('.pt-line p').html("灯神");
			
		}
	}
	viprank(1500); //最大为3000光点

	//	开关
	$('.check-on').click(function() {
		$(this).toggleClass('check-off');
		var t = $(this).attr('class');
		if(t == 'check-on check-off') {
			$(this).html('未参加');
		} else {
			$(this).html('已参加');
		}
	})

	//	下拉
	$('.arr-bottom').click(function() {
		$('.nav').slideToggle();
		$(this).toggleClass('arr-top');
	})

})