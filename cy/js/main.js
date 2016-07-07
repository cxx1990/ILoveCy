var _date = $('.date'),_money = $('.money'),_url = $('.preview'),_desc = $('.txt-desc'),_btnArea = $('.oper .item'),_btn3 = $('.btn3'),_btn2 = $('.btn2'),_btn1 = $('.btn1');
function changCont(date,money,url,desc,btnArr,btnType,rand){
	if(money<0){
		cry();
		return;
	}
	if(date)_date.html(date);
	if(money!=null)_money.html(money+"万");
	_url.attr("src",url);
	_desc.html(desc);
	_btnArea.hide().empty();
	for (var i = 0; i < btnArr.length; i++) {
		var pt = btnArr[i].pt;
		if(btnArr[i].alert==1){
			_btn1.append('<button onclick="alert(&apos;那你来干什么！&apos;)">'+btnArr[i].name+'</button>');
			_btn1.show();
			return;
		}
		if(btnArr[i].last==1){  //  最后一个
			_btn3.append('<button onclick="funny('+money+')">'+btnArr[i].name+'</button>');
			_btn3.show();
			return;
		}
		if(btnType==1){
			_btn3.append('<button onclick="nextPoint('+rand+','+btnArr[i].index+',&apos;'+pt+'&apos;);">'+btnArr[i].name+'</button>');
			_btn3.show();
		}else if(btnType==2){
			if(btnArr[i].status){
				_btn1.append('<button  onclick="change();">'+btnArr[i].name+'</button>');
			}else {
				_btn1.append('<button onclick="nextPoint('+rand+','+btnArr[i].index+',&apos;'+pt+'&apos;);">'+btnArr[i].name+'</button>');
			}
			_btn1.show();
		}else if(btnType==3){
			_btn2.append('<button onclick="nextPoint('+rand+','+btnArr[i].index+',&apos;'+pt+'&apos;);">'+btnArr[i].name+'</button>');
			_btn2.show();
		}
	};
};
// 关数 改金币 改图片 改按钮 改日期
function resolve(num,money,rand){
	switch(num){
		case 1:
		changCont("2015年6月",0,"images/face/1.png","公司决定研发一款IP名为“无冬”的游戏，你将成为制作人，享有所有创作自由，你愿意接受这份工作吗？",[{name:"开始研发",index:2},{name:"拒绝工作",index:5,alert:1}],2,rand);
		break;
		case 2:
		changCont("2015年7月",money,"images/face/2.png","首先来决定无冬的游戏类型吧。类型的成本FPS>AVG>RPG>ACT>MMO>SLG，成本越高收入越高。",[{name:"FPS",index:1,pt:"FPS"},{name:"RPG",index:2,pt:"RPG"},{name:"ACT",index:3,pt:"ACT"},{name:"SLG",index:4,pt:"SLG"},{name:"AVG",index:5,pt:"AVG"},{name:"MMO",index:6,pt:"MMO"}],3,rand);
		break;
		case 3:
		changCont("2015年8月",money,"images/face/3.png","平台很重要呢，你是索狗、软饭还是任豚？这三家的独占将获得推广费，但全平台将有更高的销量。",[{name:"PS4独占",index:1,pt:"PS4独占"},{name:"Win10独占",index:2,pt:"Win10独占"},{name:"PC独占",index:3,pt:"PC独占"},{name:"WiiU独占",index:4,pt:"WiiU独占"},{name:"全平台",index:5,pt:"全平台"}],3,rand);
		break;
		case 4:
		changCont("2015年9月",money,"images/face/4.png","你终于将策划、程序、美术的团队雏形组建起来啦。",[{name:"努力工作",index:1},{name:"触发事件",index:3,status:1}],2,rand);
		break;
		case 5:
		changCont("2015年10月",money,"images/face/5.png","Demo制作完毕，给投资人看吧，立项成功后就能正式开工啦！",[{name:"立项",index:2}],1,rand);
		break;
		case 6:
		changCont("2015年11月",money,"images/face/6.png","立项成功，开始招兵买马扩充团队了。",[{name:"努力工作",index:1},{name:"触发事件",index:3,status:1}],2,rand);
		break;
		case 7:
		changCont("2015年12月",money,"images/face/7.png","大家正在努力干活，向着第一次α测试前进！",[{name:"努力工作",index:1},{name:"触发事件",index:3,status:1}],2,rand);
		break;
		case 8:
		changCont("2016年1月",money,"images/face/8.png","α测试来了。100人测试需要5万，300人需要10万，1000人需要20万。测试的人越多发售时效果越好。",[{name:"100人测试",index:1},{name:"300人测试",index:2},{name:"1000人测试",index:3}],3,rand);
		break;
		case 9:
		changCont("2016年2月",money,"images/face/9.png","α测试带来了一堆反馈，首先我们把测出来的BUG修复吧！我们不能学育碧你说对吧？",[{name:"努力工作",index:1},{name:"触发事件",index:3,status:1}],2,rand);
		break;
		case 10:
		changCont("2016年3月",money,"images/face/10.png","是不是觉得自己有朝一日能成为小岛秀夫？",[{name:"努力工作",index:1},{name:"触发事件",index:3,status:1}],2,rand);
		break;
		case 11:
		changCont("2016年4月",money,"images/face/11.png","β测试就在眼前，让我们做好准备吧！",[{name:"努力工作",index:1},{name:"触发事件",index:3,status:1}],2,rand);
		break;
		case 12:
		changCont("2016年5月",money,"images/face/12.png","β测试开始，亚洲测试需要10万，全球测试需要50万。测试的区域越多发售时效果越好。",[{name:"亚洲测",index:1},{name:"全球测",index:3}],2,rand);
		break;
		case 13:
		changCont("2016年6月",money,"images/face/13.png","β测结束，好像又一堆BUG啊……",[{name:"努力工作",index:1},{name:"触发事件",index:3,status:1}],2,rand);
		break;
		case 14:
		changCont("2016年7月",money,"images/face/14.png","市场推广开始啦，根据你的喜好选择推广的模式。",[{name:"明星代言",index:1},{name:"电视投放",index:2},{name:"雇佣水军",index:3},{name:"美女直播",index:4},{name:"低俗炒作",index:5},{name:"媒体推广",index:6}],3,rand);
		break;
		case 15:
		changCont("2016年8月",money,"images/face/15.png","下个月就要上线了，还有好多BUG和优化需求，难道我们也要变成育碧了么……",[{name:"最后冲刺",index:1},{name:"触发事件",index:3,status:1}],2,rand);
		break;
		case 16:
		changCont("2016年9月",money,"images/face/16.png","终于完成，B级以下的BUG已经管不了了，让我们先赚钱吧。",[{name:"上线数钱啦",index:2,last:1}],1,rand);
		break;
		default: alert("系统异常");
	}
}

function changeSwitch(even){
	switch(even){
		case 101:
		changCont(null,null,"images/face/"+even+".png","为了增加资金，卖出魔都内环房一套套现400万，惹怒老婆与你离婚。",[{name:"是",index:1},{name:"否",index:3}],2,even);
		break;
		case 102:
		changCont(null,null,"images/face/"+even+".png","套取VR投资人1000万。你可以选择将本作改造成真VR游戏，或者只是做个皮毛。",[{name:"真·VR化",index:1,pt:"真·VR化"},{name:"假·VR化",index:3,pt:"假·VR化"}],2,even);
		break;
		case 103:
		changCont(null,null,"images/face/"+even+".png","结识王校长，靠肮脏的PY交易套取投资2000万。",[{name:"确认",index:1}],1,even);
		break;
		case 104:
		changCont(null,null,"images/face/"+even+".png","结识某富二代，靠三♂寸♂不♂烂♂之♂舌套取投资500万。",[{name:"确认",index:1}],1,even);
		break;
		case 105:
		changCont(null,null,"images/face/"+even+".png","我觉得我们是下一款莎木！众筹500万。",[{name:"确认",index:1}],1,even);
		break;
		case 106:
		changCont(null,null,"images/face/"+even+".png","找奸商做周边贩卖赚取奶粉钱200万。",[{name:"确认",index:1}],1,even);
		break;
		case 107:
		changCont(null,null,"images/face/"+even+".png","向银行申请贷款1000万。",[{name:"确认",index:1}],1,even);
		break;
		case 108:
		changCont(null,null,"images/face/"+even+".png","我三大姑八大姨是富太，作为妇女之友，向她们借债500万。",[{name:"确认",index:1}],1,even);
		break;
		case 109:
		changCont(null,null,"images/face/"+even+".png","公司食堂由于采购过期辣条，导致员工食物中毒，赔偿100万。",[{name:"确认",index:1}],1,even);
		break;
		case 110:
		changCont(null,null,"images/face/"+even+".png","别跟老子谈理想，老子要钱！员工要求增加工资共计200万。",[{name:"确认",index:1}],1,even);
		break;
		case 111:
		changCont(null,null,"images/face/"+even+".png","为了更好玩三大妈正版游戏，员工要求公司电脑硬件进行升级。花费50万。",[{name:"确认",index:1}],1,even);
		break;
		case 112:
		changCont(null,null,"images/face/"+even+".png","精虫上脑，包养了一个showgirl，每月花费5万。",[{name:"确认",index:1}],1,even);
		break;
		case 113:
		changCont(null,null,"images/face/"+even+".png","为了给女主角提供海飞丝，升级引擎花费200万。",[{name:"确认",index:1}],1,even);
		break;
		case 114:
		changCont(null,null,"images/face/"+even+".png","为了去看TGS，公司出资员工日本三日游花费50万。",[{name:"确认",index:1}],1,even);
		break;
		case 115:
		changCont(null,null,"images/face/"+even+".png","索尼、微软都是爸爸，请平台商吃吃喝喝。花费50万。",[{name:"确认",index:1}],1,even);
		break;
		case 116:
		changCont(null,null,"images/face/"+even+".png","包租婆之怒，公司大厦房租上涨300万。",[{name:"确认",index:1}],1,even);
		break;
		default: alert("系统异常");
	}
}


function funny(money){
	_url.attr("src","images/face/107.png");
	_desc.html("恭喜你大制作人，你的游戏共盈利"+money+"万元。");
	_btnArea.hide().empty();
	_btn3.append('<button onclick="goR();">确定</button>');
	_btn3.show();
}

function cry(){
	_money.html("资金欠费");
	_url.attr("src","images/face/115.png");
	_desc.html("项目组破产，去TM的游戏梦！");
	_btnArea.hide().empty();
	_btn3.append('<button onclick="goR();">确定</button>');
	_btn3.show();
}
//  跳到结总结
function goR(){
	window.location.href = 'result.html';
}