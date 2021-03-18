var likeIcon=document.querySelector(".like-icon");
var commentIcon=document.querySelector(".comment-icon");
var saveIcon=document.querySelector(".save-icon");
var savedIcon=document.querySelector(".saved-icon");
var likeCounter=document.querySelector(".like-counter");
var commentCounter=document.querySelector(".comment-counter");
var countLikeVar=0;
var countCommentVar=0;
function likeListener(){
  countLikeVar++;
  // console.log(countLikeVar);
  likeCounter.innerHTML=countLikeVar;
}
function commentListener(){
  countCommentVar++;
  // console.log(countCommentVar);
  commentCounter.innerHTML=countCommentVar;
}
function saveListener(){
  saveIcon.style.display="none";
  savedIcon.style.display="block";
}
likeIcon.addEventListener("click",likeListener);
commentIcon.addEventListener("click",commentListener);
saveIcon.addEventListener("click",saveListener);