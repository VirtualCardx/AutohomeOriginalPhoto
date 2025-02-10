// ==UserScript==
// @name         汽车之家网站查看高清大图
// @namespace    http://tampermonkey.net/
// @version      2024-12-05
// @description  try to take over the world!
// @author       You
// @match        https://club.autohome.com.cn/bbs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=autohome.com.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //let pics = document.getElementsByClassName("tz-picture");
    const pics = [...document.getElementsByClassName("tz-picture"), ...document.getElementsByClassName("tz-figure")];
    for(let index = 0;index<pics.length;index++)
    {
        let origin_img = pics[index].firstChild
        //console.log(origin_img.getAttribute("data-src"))
        let link = document.createElement("a")
        link.innerHTML = "查看高清大图"
        link.href = getBigImageURL(origin_img.getAttribute("data-src"))
        pics[index].append(link)
    }

    // Your code here...
})();

function getBigImageURL(original_image_url){
    let head = original_image_url.substring(0,original_image_url.lastIndexOf("/")+1)
    let tail = original_image_url.substring(original_image_url.lastIndexOf("/")+1,original_image_url.length)
    tail = tail.substring(tail.indexOf("_")+1,tail.length)
    return head + tail
}
