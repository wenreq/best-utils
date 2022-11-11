rollup 最大的亮点就是 Tree-shaking，即可以静态分析代码中的 import，并排除任何未
使用的代码。这允许我们架构于现有工具和模块之上，而不会增加额外的依赖或使项目的大
小膨胀。如果用 webpack 做，虽然可以实现 tree-shaking，但是需要自己配置并且打包出
来的代码非常臃肿，所以对于库文件和 UI 组件，rollup 更加适合。

[rollup 参考视频](https://www.bilibili.com/video/BV1bi4y1c7fU/?spm_id_from=333.337.search-card.all.click&vd_source=08f7a2ca46536916f537de5075cece94)

> es 分支，主要是为了，打三种类型（cjs、esm、umd）的模块包，切出来的。

[github](https://github.com/ChenWoyao/baleExample/tree/master/woyao_util)

```tree
realize-utils
|-- lib/（存放打包后的文件）
|-- src/（每个模块实现函数的源码文件）
|-- test (每个模块实现函数的测试文件)
|-- package.json (npm package的一些基本信息)
|-- rollup.config.base.js（rollup基础配置）
|-- rollup.config.dev.js（rollup开发配置）
|-- rollup.config.js（rollup正式配置）
|-- README.md
```

[![realize-utils](http://oss.tianmasport.com/gx/size/2022-02-23/196/946000020912472064.png)](https://github.com/wenreq/realize-utils)

# realize-utils

[![npm version](https://img.shields.io/static/v1?label=npm&message=v1.7.2&color=blue)](https://www.npmjs.com/package/realize-utils)
[![license](https://img.shields.io/static/v1?label=license&message=MIT&color=green)](https://www.npmjs.com/package/realize-utils)
[![coverage](https://img.shields.io/static/v1?label=coverage&message=80.71%&color=ff69b4)](https://github.com/wenreq/realize-utils/tree/master/test)

前端业务代码工具库

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用
到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免
不同项目多次复制粘贴的麻烦，这里统一封装，并发布到 npm，以提高开发效率。如果你也
有常用的代码，欢迎为本项目提交 pr

## 安装和使用 :wrench:

### CDN

直接下载 `lib` 目录下的
[realize-utils.browser.js](https://github.com/wenreq/realize-utils/blob/master/lib/realize-utils.browser.js)
使用，支持 CDN 方式，直接在 html 文件中引入使用。

```html
<script src="./js/realize-utils.js"></script>
<script>
  const newArr = utils.uniqueArray([1, 3, 5, 1, 2, 3, 5]);
  console.log(newArr); // [1, 3, 5, 2]

  const bFlag = utils.equalityArray([1, 2, 3], [1, 2, 3]);
  console.log(bFlag); // true
</script>
```

### ESM

使用 npm 安装。支持 Tree-shaking。

```shell
npm i realize-utils -D
```

```js
import { setStorage, getStorage, uniqueArray } from 'realize-utils';
setStorage('name', 'wen');
let name = getStorage('name');
console.log(name); // wen

let arr = [1, 3, 5, 1, 2, 3, 5];
let uniqueArr = uniqueArray(arr);
console.log(uniqueArr); // [1, 3, 5, 2]
```

### CJS

直接下载 `lib` 目录下的
[realize-utils.cjs.js](https://github.com/wenreq/realize-utils/blob/master/lib/realize-utils.cjs.js)
使用，在 node 环境中引入使用。

## npm 链接 :link:

[realize-utils](https://www.npmjs.com/package/realize-utils)

## API 文档 :package:

### Array

- [equalityArray](https://github.com/wenreq/realize-utils/blob/master/src/array/equalityArray.js)
  判读两个数组是否相等
- [mergeArrayDelRepeat](https://github.com/wenreq/realize-utils/blob/master/src/array/mergeArrayDelRepeat.js)
  合并数组后去重
- [uniqueArray](https://github.com/wenreq/realize-utils/blob/master/src/array/uniqueArray.js)
  数组去重
- [subArray](https://github.com/wenreq/realize-utils/blob/master/src/array/subArray.js)
  数组相减

### Class

- [addClass](https://github.com/wenreq/realize-utils/blob/master/src/class/addClass.js)
  为元素添加 class
- [hasClass](https://github.com/wenreq/realize-utils/blob/master/src/class/hasClass.js)
  判断元素是否有某个 class
- [removeClass](https://github.com/wenreq/realize-utils/blob/master/src/class/removeClass.js)
  为元素移除 class

### Cookie

- [getCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/getCookie.js)
  根据 name 读取 Cookie
- [setCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/setCookie.js)
  根据 name,value,days 设置 Cookie
- [removeCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/removeCookie.js)
  根据 name 删除 Cookie

### Device

- [getExplore](https://github.com/wenreq/realize-utils/blob/master/src/device/getExplore.js)
  获取浏览器：版本号
- [getOS](https://github.com/wenreq/realize-utils/blob/master/src/device/getOS.js)
  获取操作系统类型

### Dom

- [getScrollTop](https://github.com/wenreq/realize-utils/blob/master/src/dom/getScrollTop.js)
  获取滚动条距顶部的距离
- [offset](https://github.com/wenreq/realize-utils/blob/master/src/dom/offset.js)
  获取一个元素的距离文档(document)的位置，类似 JQ 中的 offset() ele.offset()
- [scrollTo](https://github.com/wenreq/realize-utils/blob/master/src/dom/scrollTo.js)
  在${duration}时间内，滚动条平滑滚动到${to}指定位置 scrollTo(to, duration)
- [setScrollTop](https://github.com/wenreq/realize-utils/blob/master/src/dom/setScrollTop.js)
  设置滚动条距顶部的距离
- [windowResize](https://github.com/wenreq/realize-utils/blob/master/src/dom/windowResize.js)
  H5 软键盘缩回、弹起回调

### Function

- [debounce](https://github.com/wenreq/realize-utils/blob/master/src/function/debounce.js)
  函数防抖
- [throttle](https://github.com/wenreq/realize-utils/blob/master/src/function/throttle.js)
  函数节流

### Keycode

- [getKeyName](https://github.com/wenreq/realize-utils/blob/master/src/keycode/getKeyName.js)
  根据 keycode 获得键名

### Number

- [standardAmount](https://github.com/wenreq/realize-utils/blob/master/src/number/standardAmount.js)
  将数字（整数逢三一断）含小数转换成标准的金额模式，最多保留三位小数
  。standardAmount(999999999.9991) => '999,999,999.999'
- [standardIntegerAmount](https://github.com/wenreq/realize-utils/blob/master/src/number/standardIntegerAmount.js)
  将 "整数" 数字（整数逢三一断）。standardIntegerAmount(99999999999) =>
  '99,999,999,999'

### Object

- [deepClone](https://github.com/wenreq/realize-utils/blob/master/src/object/deepClone.js)
  对象的深拷贝
- [shallowClone](https://github.com/wenreq/realize-utils/blob/master/src/object/shallowClone.js)
  对象的浅拷贝
- [isEmptyObject](https://github.com/wenreq/realize-utils/blob/master/src/object/isEmptyObject.js)
  判断对象是否为空
- [getFormData](https://github.com/wenreq/realize-utils/blob/master/src/object/getFormData.js)
  将对象转换为 formData 对象

### Random

- [randomColor](https://github.com/wenreq/realize-utils/blob/master/src/random/randomColor.js)
  随机生成颜色
- [randomNum](https://github.com/wenreq/realize-utils/blob/master/src/random/randomNum.js)
  生成指定范围随机数

### Regexp

- [isColor](https://github.com/wenreq/realize-utils/blob/master/src/regexp/isColor.js)
  判断是否为 16 进制颜色，rgb 或 rgba
- [isEmail](https://github.com/wenreq/realize-utils/blob/master/src/regexp/isEmail.js)
  判断是否为邮箱地址
- [isIdCard](https://github.com/wenreq/realize-utils/blob/master/src/regexp/isIdCard.js)
  判断是否为身份证号
- [isPhoneNum](https://github.com/wenreq/realize-utils/blob/master/src/regexp/isPhoneNum.js)
  判断是否为手机号
- [isUrl](https://github.com/wenreq/realize-utils/blob/master/src/regexp/isUrl.js)
  判断是否为 URL 地址

### Screen

- [toFullScreen](https://github.com/wenreq/realize-utils/blob/master/src/screen/toFullScreen.js)
  全屏 toFullScreen()
- [exitFullscreen](https://github.com/wenreq/realize-utils/blob/master/src/screen/exitFullscreen.js)
  退出全屏 exitFullscreen()

### Storage

- [getStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)
  根据 name 读取 localStorage
- [setStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)
  根据 name,value 添加 localStorage
- [removeStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)
  根据 name 删除 localStorage

### String

- [digitUppercase](https://github.com/wenreq/realize-utils/blob/master/src/string/digitUppercase.js)
  现金额转大写 digitUppercase(1314521) => '壹佰叁拾壹万肆仟伍佰贰拾壹元整'

### Supprot

- [isSupportWebP](https://github.com/wenreq/realize-utils/blob/master/src/support/isSupportWebP.js)
  判断浏览器是否支持 webP 格式图片
- [downloadFile](https://github.com/wenreq/realize-utils/blob/master/src/support/downloadFile.js)
  base64 数据导出文件，文件下载 downloadFile(filename, data)

### Time

- [dateFormater](https://github.com/wenreq/realize-utils/blob/master/src/time/dateFormater.js)
  格式化时间 dateFormater('YYYY-MM-DD HH:mm') => '2022-08-07 14:40'
  dateFormater('YYYY-MM-DD', '2020.11.29') => '2020-11-29'
  dateFormater('YYYYMMDDHHmm', '2020-11-29 18:10:07') => '202011291810'
- [dateStrFormat](https://github.com/wenreq/realize-utils/blob/master/src/time/dateStrFormat.js)
  将指定字符串由一种时间格式转化为另一种。dateStrForma('20220807', 'YYYYMMDD',
  'YYYY 年 MM 月 DD 日') ==> 2022 年 08 月 07 日 dateStrForma('2022 年 08 月 07
  日', 'YYYY 年 MM 月 DD 日', 'YYYYMMDD') ==> 20220807
- [formatRemainTime](https://github.com/wenreq/realize-utils/blob/master/src/time/formatRemainTime.js)
  计算一个时间到现在过去了多久 '451 天 15 小时 17 分钟 25 秒'
- [formatPassTime](https://github.com/wenreq/realize-utils/blob/master/src/time/formatPassTime.js)
  计算一个时间到现在过去了多久 '1 年前' '6 个月前' '45 分钟前'
- [isLeapYear](https://github.com/wenreq/realize-utils/blob/master/src/time/isLeapYear.js)
  判断是否为闰年 isLeapYear(2020) => true isLeapYear(2021) => false
  isLeapYear(2022) => false
- [isSameDay](https://github.com/wenreq/realize-utils/blob/master/src/time/isSameDay.js)
  判断是否为同一天 isSameDay('2022-08-06', '2022-08-06') => true
- [monthDays(month)](https://github.com/wenreq/realize-utils/blob/master/src/time/monthDays.js)
  获取指定日期月份的总天数 monthDays('2022-08') => 31 monthDays('2022-06') => 30
- [timeLeft(startTime, endTime)](https://github.com/wenreq/realize-utils/blob/master/src/time/timeLeft.js)
  计算${startTime - endTime}的剩余时间 timeLeft('2022-08-06 10:10:10',
  '2022-08-10 11:15:15') => {d: 4, h: 1, m: 5, s: 5} // 剩余 4 天 1 小时 5 分 5
  秒
- [twoDateBetweenAllDay(startDay, endDay)](https://github.com/wenreq/realize-utils/blob/master/src/time/twoDateBetweenAllDay.js)
  根据指定的两个日期，计算并返回中间的所有日期
  。twoDateBetweenAllDay('2022-06-01', '2022-06-09') // ['2022-06-01',
  '2022-06-02', '2022-06-03', '2022-06-04', '2022-06-05', '2022-06-06',
  '2022-06-07', '2022-06-08', '2022-06-09']
- [twoDaysBetweenNum(startDay, endDay)](https://github.com/wenreq/realize-utils/blob/master/src/time/twoDaysBetweenNum.js)
  计算两个日期之间的天数。 使用场景：距今天已有 N 天
  。twoDaysBetweenNum('2022-06-16', '2022-06-20') // 4

### Url

- [parseQueryString](https://github.com/wenreq/realize-utils/blob/master/src/url/parseQueryString.js)
  url 参数转对象 parseQueryString('?a=1&b=2&c=3') => {a: '1', b: '2', c: '3'}
- [stringifyQueryString](https://github.com/wenreq/realize-utils/blob/master/src/url/stringifyQueryString.js)
  对象序列化 stringifyQueryString({a: '1', b: '2', c: '3'}) => 'a=1&b=2&c=3'
