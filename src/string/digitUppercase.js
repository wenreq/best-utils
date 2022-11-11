/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-10 23:22:07
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-12 00:06:51
 * @FilePath: /realize-utils/src/string/digitUppercase.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 现金额转大写
 * @date 2022-02-27
 * @param {Number} n
 * @returns {String}
 */
export let digitUppercase = function digitUppercase(n) {
  var fraction = ['角', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ];
  var head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
    s += (
      digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
    ).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (var l = 0; l < unit[0].length && n > 0; l++) {
    var p = '';
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return (
    head +
    s
      .replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整')
  );
};
