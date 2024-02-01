var images=['images/img1.jpg','images/img3.jpg','images/img4.jpg'];
var prev=document.querySelector('.previous');
var next=document.querySelector('.next');
var photo=document.querySelector("img");
var count=0;
var header=document.querySelector(".title h1");

// this part of code will work with buttons......

// prev.addEventListener('click',()=>{
//     count--;
//     if(count<0){
//         count=images.length-1;
//         photo.src=images[count];
//     }
//     else{
//         photo.src=images[count];
//     }
// })


// next.addEventListener("click",()=>{
//     count++;
//     if(count>images.length-1){
//         count=0;
//         photo.src=images[count];
//     }
//     else{
//         photo.src=images[count];
//     }
// })




//.................................*.................


function nextimage(){
    count++
    if(count>=images.length){
        count=0;
    }
    photo.src=images[count];

}
setInterval(nextimage,2000);