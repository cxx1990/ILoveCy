//1、翻面控制
function turn(elem){
  var cls = elem.className;
  var n = elem.id.split('_')[1];//var n = elem.id.substr(-1, 1)，但是不推荐 substr;
  if(/photo_center/.test(cls) == false){//判断当前点击的元素是不是 photo_center，不是的话不执行后面的翻转而进行海报排序
    return rsort(n);
  }else
  if(/photo_front/.test(cls) == true){
    cls = cls.replace(/photo_front/, 'photo_back');
  }else{
    cls = cls.replace(/photo_back/, 'photo_front');
  }
  return elem.className = cls;
}

//3、通用函数
function g(selector){
  return selector.substring(0, 1) == '.' ? document.getElementsByClassName(selector.substring(1)) : document.getElementById(selector.substring(1));
}

//随机生成一个值 0-20
function random( range ){
  var max = Math.max(range[0], range[1]);
  var min = Math.min(range[0], range[1]);


  var diff = max - min;
  var number = Math.ceil(Math.random()*diff + min);
  return number;
}

//4、输出所有海报
var data = [];
var llength = dataStr.length;
for (var j = 0; j < llength; j++) {
  var d = dataStr[j].split('<br><br><br>');
  data[j] = [];
  for (var i = 0; i < d.length; i++) {
    var c = d[i].split('<br><br>');
    data[j].push({
      img: c[0].split('、')[0] + '.jpg',
      caption: c[0].split('、')[1],
      desc: c[1]
    });
  };
};
var wrapIndex;
var strIn = '<div class="photo photo-front" onclick="turn(this)" id="photo_{{index}}"><div class="photo-wrap"><div class="side side-front"><p class="image"><img src="./images/{{img}}" alt=""></p><p class="caption">{{caption}}</p></div><div class="side side-back"><p class="desc">{{desc}}</p></div></div></div>';
// 入口
addPhotos(data[0],0);
function addPhotos(data,index){
  wrapIndex = "#wrap"+index;
  var template = strIn;
  var html = [];

  for(s in data){
    var _html = template.replace('{{index}}',s)
    .replace('{{img}}',data[s].img)
    .replace('{{caption}}',data[s].caption)
    .replace('{{desc}}',data[s].desc);
    html.push(_html);
  }
  g(wrapIndex).innerHTML = html.join('');
  rsort(random([0,data.length])-1);
}
//5、排序海报
function rsort(n){
  var _photo = $(wrapIndex+' .photo');
  var photos = [];
  for(var s = 0; s<_photo.length; s++){
    _photo[s].className = 'photo photo_front';
    /*重排序之前去除所有图片样式*/
    _photo[s].style.left = '';
    _photo[s].style.top = '';
    _photo[s].style['transform'] = _photo[s].style['-webkit-transform'] = 'rotate(360deg) scale(2.3)';
    photos.push(_photo[s]);
  }

  var photo_center = g('#photo_'+n);
  photo_center.className = photo_center.className + ' photo_center';
  photo_center = photos.splice(n,1)[0];

  //把海报分为左右两个区域
  var photos_left = photos.splice(0,Math.ceil(photos.length/2));
  var photos_right = photos;
  var ranges = range();
  // 对左右区域的海报位置进行随机赋值
  for(var j = 0; j < photos_left.length; j++){
    var photo = photos_left[j];

    photos_left[j].style.left = random(ranges.left.x)+'px';
    photo.style.top = random(ranges.left.y)+'px';
    photo.style['transform'] = photo.style['-webkit-transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
  }
  for(var s = 0; s < photos_right.length; s++){
    var photo = photos_right[s];

    photo.style.left = random(ranges.right.x)+'px';
    photo.style.top = random(ranges.right.y)+'px';
    photo.style['transform'] = photo.style['-webkit-transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
  }
}

//6、计算左右分区的范围
function range(){
  var range = {
    left:{x: [],y: []},
    right:{x: [],y: []}
  }
  //获取最外围容器的宽度和高度
  var wrap = {
    w: g(wrapIndex).clientWidth,
    h: g(wrapIndex).clientHeight
  }
  //获取每一张海报的宽度和高度，因为海报的大小都是一样的，所以取第一张
  var photo = {
    w: g('.photo')[0].clientWidth,
    h: g('.photo')[0].clientHeight
  }
  range.wrap = wrap;
  range.photo = photo;
  //左区域范围
  range.left.x = [ 0, wrap.w/2-photo.w/2];
  range.left.y = [ 0, wrap.h - photo.h/2];
  //右区域范围
  range.right.x = [ wrap.w/2+photo.w/2, wrap.w];
  range.right.y = range.left.y;
  return range;
}




















