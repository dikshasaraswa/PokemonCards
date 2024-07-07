// var h = document.querySelector("main");//var h = document.querySelector("h1");
// main.innerHTML = "goodbye";//<h1>Hi</h1> se Goodbye hogya

var main = document.getElementById("main");
let arr =["https://i.pinimg.com/736x/92/85/98/928598f36408dcfc7d1d13d2753395ad.jpg","https://i.pinimg.com/736x/43/67/d5/4367d5df3d7c3bcc56edf621370e72ae.jpg","https://i.pinimg.com/736x/51/07/4b/51074b761c8550562fc5fd22c0a8d83d.jpg","https://i.pinimg.com/736x/94/7b/1c/947b1ce1efafcafe844ee8ca371230cc.jpg","https://i.pinimg.com/736x/77/2c/d3/772cd37d1066eab594201f3ab99d00c8.jpg","https://i.pinimg.com/736x/d1/d8/3f/d1d83f3fd729ae6d92c8f1ea6225cb8b.jpg"];
let s ="";
for (let i=1;i<=65;i++) {
    let r = Math.floor(Math.random()*6);
    s += `<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;//h1 of html doesnt matter when we have changed innerhtml in js 

// "https://i.pinimg.com/736x/92/85/98/928598f36408dcfc7d1d13d2753395ad.jpg","https://i.pinimg.com/736x/43/67/d5/4367d5df3d7c3bcc56edf621370e72ae.jpg","https://i.pinimg.com/736x/51/07/4b/51074b761c8550562fc5fd22c0a8d83d.jpg","https://i.pinimg.com/736x/94/7b/1c/947b1ce1efafcafe844ee8ca371230cc.jpg","https://i.pinimg.com/736x/77/2c/d3/772cd37d1066eab594201f3ab99d00c8.jpg"