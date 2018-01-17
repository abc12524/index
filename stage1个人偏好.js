// ==UserScript==
// @name         s1个人偏好
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://bbs.saraba1st.com/2b/*
// @grant        none
// ==/UserScript==



(function () {
    document.getElementById('mn_Nfdb7').style.display='none';
    var b = document.getElementById('mn_N4e4d_menu').children[0].children[0],
        a1= document.getElementById('mn_N22a4').children[0],
        a2= document.getElementById('mn_F77').children[0],
        c = document.getElementById('mn_N4e4d_menu').children[1].children[0],
        h = document.getElementById('aimg_pCLgB'),
        j = document.getElementsByTagName('a'),
        x = [b,c],
        y = ['https://www.bilibili.com/video/online.html',
            'https://space.bilibili.com/251059728/#/',
            ],
        z = ['当前在线','收藏空间'];

    for(let i=0;i<x.length;i++){
        x[i].href=y[i];
        x[i].textContent=z[i];
        x[i].setAttribute('target', '_blank');
    }
    //主窗口打开
    var d = ['mn_N4e4d','mn_N22a4','mn_Necd6','mn_F77','mn_N6033'],
	a=[],
    m =['https://www.bilibili.com/',
        'forum-51-1.html',
		'http://www.pixiv.net/',
		'forum-6-1.html',
		'http://www.ltaaa.com/'
		],
    n = ['哔哩哔哩','数码','pixiv','动漫','龙腾'];
for(let i=0;i<d.length;i++){
	a=document.getElementById(d[i]).children[0];
	a.href=m[i];
    a.textContent=n[i];
    a.setAttribute('target', '_blank');
}
    a1.target = '_self';
    a2.target = '_self';
    //签到
    for(let i=0;i<j.length;i++){
        if(j[i]=='https://bbs.saraba1st.com/2b/study_daily_attendance-daily_attendance.html?formhash=e66b6e75'){j[i].click();}
         }

    h.src='http://ww3.sinaimg.cn/mw690/8fcbeab4gw1f65a1q8l7mg20go0gohdt.gif';
 // h.src='https://i.loli.net/2018/01/07/5a51c8e063908.gif';
    h.style.height='214px';
    // document.getElementById('aimg_N33si').id='aimg_lGbcg';
    //  alert(x.href);

}());
