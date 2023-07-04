## 1. 面试题：介绍一下CSS的盒子模型

```
CSS的盒子模型有哪些：标准盒子模型、IE盒子模型
CSS的盒子模型区别：
	标准盒子模型：margin、border、padding、content
	IE盒子模型 ：margin、content（ border +  padding  + content ）
通过CSS如何转换盒子模型：
	box-sizing: content-box;	/*标准盒子模型*/
	box-sizing: border-box;	  /*IE盒子模型*/
```

​				面试题：line-height和height区别【大厂】

```
line-height是每一行文字的高，如果文字换行则整个盒子高度会增大（行数*行高）。
height是一个死值，就是这个盒子的高度。
```

​				面试题：CSS选择符有哪些？哪些属性可以继承？

```
CSS选择符：
    通配（*）
    id选择器（#）
    类选择器（.）
    标签选择器（div、p、h1...）
    相邻选择器(+)
    后代选择器(ul li)
    子元素选择器（ > ）
    属性选择器(a[href])
    
CSS属性哪些可以继承：
		文字系列：font-size、color、line-height、text-align...
***不可继承属性：border、padding、margin...
```

​				面试题：CSS优先级算法如何计算？

```
优先级比较：!important > 内联样式 > id > class > 标签 > 通配
```

```
CSS权重计算：
第一：内联样式（style）  权重值:1000
第二：id选择器  				 权重值:100
第三：类选择器 				  权重值:10
第四：标签&伪元素选择器   权重值:1
第五：通配、>、+         权重值:0
```

​				面试题：用CSS画一个三角形

```
用边框画（border）,例如：
{
		width: 0;
		height: 0;

		border-left:100px solid transparent;
		border-right:100px solid transparent;
		border-top:100px solid transparent;
		border-bottom:100px solid #ccc;
}
```

​				面试题：一个盒子不给宽度和高度如何水平垂直居中？

##### 方式一：

```
<div class='container'>
	<div class='main'>main</div>
</div>

.container{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 300px;
		height: 300px;
		border:5px solid #ccc;
}
.main{
		background: red;
}
```

##### 方式二：

```
<div class='container'>
	<div class='main'>main</div>
</div>

.container{
		position: relative;
		width: 300px;
		height: 300px;
		border:5px solid #ccc;
}
.main{
		position: absolute;
		left:50%;
		top:50%;
		background: red;
		transform: translate(-50%,-50%);
}
```

​				面试题：display有哪些值？说明他们的作用。

```
none     			隐藏元素
block    			把某某元素转换成块元素
inline   			把某某元素转换成内联元素
inline-block 	把某某元素转换成行内块元素
```

​				面试题：对BFC规范(块级格式化上下文：block formatting context)的理解？

```
BFC就是页面上一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。

1. 了解BFC ： 块级格式化上下文。
2. BFC的原则：如果一个元素具有BFC，那么内部元素再怎么弄，都不会影响到外面的元素。
3. 如何触发BFC：
		float的值非none
		overflow的值非visible
		display的值为：inline-block、table-cell...
		position的值为:absoute、fixed
```

​				面试题：清除浮动有哪些方式？

```
1. 触发BFC
2. 多创建一个盒子，添加样式：clear: both;
3. after方式
	ul:after{
			content: '';
			display: block;
			clear: both;
	}
```

​				面试题：在网页中的应该使用奇数还是偶数的字体？为什么呢？

```
偶数 : 让文字在浏览器上表现更好看。

另外说明：ui给前端一般设计图都是偶数的，这样不管是布局也好，转换px也好，方便一点。
```

​				面试题：position有哪些值？分别是根据什么定位的？

```
static [默认]  没有定位
fixed  固定定位，相对于浏览器窗口进行定位。
relative  相对于自身定位，不脱离文档流。
absolute	相对于第一个有relative的父元素，脱离文档流。


relative和absolute区别
1. relative不脱离文档流 、absolute脱离文档流
2. relative相对于自身 、 absolute相对于第一个有relative的父元素
3. relative如果有left、right、top、bottom ==》left、top
	 absolute如果有left、right、top、bottom ==》left、right、top、bottom
```

​				面试题：写一个左中右布局占满屏幕，其中左、右俩块固定宽200，中间自适应宽，要求先加载中间块，请写出结构及样式。

```
双飞翼
```

​				面试题：什么是CSS reset？

```
reset.css   		是一个css文件，用来重置css样式的。
normalize.css 	为了增强跨浏览器渲染的一致性，一个CSS 重置样式库。
```

​				面试题：css sprite是什么,有什么优缺点

```
1. 是什么
	把多个小图标合并成一张大图片。
2. 优缺点
	优点：减少了http请求的次数，提升了性能。
	缺点：维护比较差（例如图片位置进行修改或者内容宽高修改）
```

​				面试题：display: none;与visibility: hidden;的区别

```
1. 占用位置的区别
display: none; 				是不占用位置的
visibility: hidden;   虽然隐藏了，但是占用位置

2. 重绘和回流的问题

visibility: hidden; 、 display: none;  产生重绘
display: none;     还会产生一次回流

产生回流一定会造成重绘，但是重绘不一定会造成回流。

产生回流的情况：改变元素的位置(left、top...)、显示隐藏元素....
产生重绘的情况：样式改变、换皮肤
```

​				面试题：opacity 和 rgba区别

```
共同性：实现透明效果

1. opacity 取值范围0到1之间，0表示完全透明，1表示不透明
2. rgba   R表示红色，G表示绿色，B表示蓝色，取值可以在正整数或者百分数。A表示透明度取值0到1之间

区别：继承的区别
opacity会继承父元素的opacity属性，而RGBA设置的元素的后代元素不会继承不透明属性。
```