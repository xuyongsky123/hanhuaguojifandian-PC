function turnto(){
	/*如果右边的下拉菜单没有收回，就点击左边的按钮，效果不好，所以添加本段代码-begin*/
	$('.menu_container').animate({
		'height':'0',
	},700);
	/*如果右边的下拉菜单没有收回，就点击左边的按钮，效果不好，所以添加本段代码-end*/

	$('.container').animate({
		'left':'440px',
	},700);
	
	$("aside").css('z-index','16000').animate({
		'left':'0',
	},700);
}
function closerightmenu(){
	$('.menu_container').animate({
		'height':'0',
	},700);
}
function removeaside(){
	$(".container").animate({
		'left':'0',
	},700);
	$("aside").css('z-index','1').animate({
		'left':'-640px',
	},700);
}
function openmenu(){
	//$('nav').css('height','100%');
	$('nav').toggleClass('nav_height');
	
	var height_sum=$('.menu_container').css('height');

	if(height_sum=='0px'){
		$('.menu_container').animate({
			'height':'530px',
		},700);
	}else{
		$('.menu_container').animate({
			'height':'0',
		},700);
	}
}
function urlto(address){
	alert("test");
	window.location.href='./template.php?action='+address;
}

/*页面遮罩层拉伸*/
function autopop(){
	var btn_input=$("#btn_input").val();
	if(btn_input=='true'){
		$('.content_height').animate({
			'height':'480px',
		},1000);
		$('.content_right_article').animate({
			'height':'400px',
			'width':'370px',
			'font-size':'18px',
		},700);
		$('.content_left').animate({
			'width':'240px',
		},700);
		$('.content_right').animate({
			'width':'390px',
		},700);

		$("#btn_input").val('false');
	}else if(btn_input=='false'){
		$('.content_height').animate({
			'height':'245px',
		},1000);
		$('.content_right_article').animate({
			'height':'150px',
			'width':'300px',
			'font-size':'21px',
		},700);
		$('.content_left').animate({
			'width':'320px',
		},700);
		$('.content_right').animate({
			'width':'320px',
		},700);
		$("#btn_input").val('true');
	}else{
		alert("操作失误，请重新操作！")
	}
}

/*背景产品图片来回移动动画*/
function animate(){
	$('.section_img').animate({
		'left':'-100px',
	},5000).animate({
		'left':'0',
	},5000);
}

$(function(){
	setInterval('animate()',0);
	/*$('.menu li').bind('click',function(){
		var li_value=$(this).index();
		var li_data=$(this).attr('data');
		var li_datatype=$(this).attr('datatype');
		window.location.href="./template.php?model="+li_value+"&data="+li_data+"&datatype="+li_datatype;
	});*/



	/*$('.menu li[data="house"]').bind('click',function(){
		alert("test");
	});*/

});


function changepage(data,datatype){
	if(data=='house'){
		if(datatype=='BZJ'){
			$('.section_img').attr('src','images/BZJ_one.jpg');
			$('.content_right_article').text('标准间150间，每个房间的面积为35平米...');
			closerightmenu();
		}else if(datatype=='XZJ'){
			$('.section_img').attr('src','images/XZJ_one.jpg');
			$('.content_right_article').text('行政间29间，每个房间的面积为35平米...');
			closerightmenu();
		}else if(datatype=='HHJ'){
			$('.section_img').attr('src','images/HHJ_one.jpg');
			$('.content_right_article').text('豪华间121间，每个房间的面积为45平米...');
			closerightmenu();
		}else if(datatype=='SWTJ'){
			$('.section_img').attr('src','images/SWTJ_one.jpg');
			$('.content_right_article').text('商务套间8间，每个套间的面积为60平米...');
			closerightmenu();
		}else if(datatype=='XZTJ'){
			$('.section_img').attr('src','images/XZTJ_one.jpg');
			$('.content_right_article').text('行政套间6间，每个套间的面积为70平米...');
			closerightmenu();
		}else if(datatype=='HHTJ'){
			$('.section_img').attr('src','images/HHTJ_one.jpg');
			$('.content_right_article').text('豪华套间42间，每个套间的面积为80平米...');
			closerightmenu();
		}else if(datatype=='HHXZTJ'){
			$('.section_img').attr('src','images/HHXZTJ_one.jpg');
			$('.content_right_article').text('汉华行政套间4间，面积为138平方米...');
			closerightmenu();
		}else{
			alert("操作失误，请重新操作！");
		}
	}else if(data=="entertainment"){
		if(datatype=='swim'){
			$('.section_img').attr('src','images/entertainment_two.jpg');
			$('.content_right_article').html('室内恒温游泳池为您提供舒适畅泳的休闲场所。<br/>营业时间：6.：30—23：00<br/>地点：地下一层 ');
			closerightmenu();
		}else if(datatype=='sanna'){
			$('.section_img').attr('src','images/sanna_one.jpg');
			$('.content_right_article').html('让您消除一天工作后的疲劳和紧张。<br/>营业时间：6.：30—23：00<br/>地点：地下一层 ');
			closerightmenu();
		}else if(datatype=='jianshen'){
			$('.section_img').attr('src','images/jianshen.jpg');
			$('.content_right_article').html('是您享受运动乐趣的理想场所。<br/>营业时间：6.：30—23：00<br/>地点：地下一层 ');
			closerightmenu();
		}else if(datatype=='tianlu'){
			$('.section_img').attr('src','images/tianlu.jpg');
			$('.content_right_article').text('闹中取静的精神家园－天禄阁书吧，汉文化精髓的聚集库。 “无声品茶凝神致，有韵华章随意来” <br/>地点：五层 ');
			closerightmenu();
		}else{
			alert("操作失误，请重新操作！");
		}
	}else if(data=='food'){
		if(datatype=='HYKFT'){
			$('.section_img').attr('src','images/HYKFT.jpg');
			$('.content_right_article').html('胡杨咖啡厅温馨惬意，环境幽雅。为您提供丰盛的自助餐及24小时零点服务。<br/>地点：一层 <br/>营业时间：24小时营业<br/>订餐电话：86-10 58139988-23');
			closerightmenu();
		}else if(datatype=='HGZC'){
			$('.section_img').attr('src','images/HGZC.jpg');
			$('.content_right_article').html('汉宫中餐拥有十余间豪华舒适的贵宾房，为您提供鲍、翅珍馐，精巧粤、湘、川、鲁、淮扬美馔。<br/>地点：二层 <br/>营业时间：<br/>午餐：11:30-14:00<br/>晚餐：17:30-22:00<br/>订餐电话：86-10 58139886');
			closerightmenu();
		}else if(datatype=='HSLXC'){
			$('.section_img').attr('src','images/HSLXC.jpg');
			$('.content_right_article').html('位于饭店二十层的汉丝路西餐有国际名厨主理，您在享受欧洲，东南亚传统美食和地道香醇的美酒的同时，故宫，钟鼓楼，景山，雍和宫等多处景观可尽收眼底。您可尽情体验古老浪漫的情调，健康精致的生活。<br/>地点：二十层 <br/>营业时间：11:00-22:00<br/>订餐电话：86-10 58139988-27');
			closerightmenu();
		}else if(datatype=='GBDTB'){
			$('.section_img').attr('src','images/GBDTB.jpg');
			$('.content_right_article').html('戈壁大堂吧精致优雅，各式酒水荟萃，是小憩及会友的理想场所。<br/>地点：一层<br/>营业时间：9:00-24:00<br/>预订电话：86-10 58139988-25');
			closerightmenu();
		}else if(datatype=='YGBJB'){
			$('.section_img').attr('src','images/YGBJB.jpg');
			$('.content_right_article').html('温馨的装饰，开阔的视野，使您可以一览西山美景及古都风貌，是休闲娱乐的尚好选择。<br/><br/>地点：二十层<br/>营业时间：11:00-22:00<br/>预订电话：86-10 58139988-27');
			closerightmenu();
		}else{
			alert("操作失误，请重新操作！");
		}
	}else if(data=='meeting'){
		if(datatype=='multi'){
			$('.section_img').attr('src','images/multi_one.jpg');
			$('.content_right_article').html('宴会、多功能厅：十余间多功能厅能同时接纳不同规模的专业会议和主题宴会。 装饰高雅，配有音响、舞台等会议设备。<br/><br/><br/>多功能厅：十多余间大小不同规模的多功能会议室，提供数字会议系统，设施齐全，是承办大型活动、各种会议的理想场所。');
			closerightmenu();
		}else if(datatype=='weiyang'){
			$('.section_img').attr('src','images/weiyang_one.jpg');
			$('.content_right_article').text('宏大华丽的无柱式宴会厅，是承办各种会议、宴会及婚礼的理想场所。635平方米的大宴会厅，可容纳300人同时就餐和500人的会议，配有音响和舞台的多功能厅可同时接纳不同规模的商务会议、主题宴会和产品展览活动。');
			closerightmenu();
		}else{
			alert("操作失误，请重新操作！");
		}
	}else{
		alert("操作失误，请重新操作！");
	}
}

