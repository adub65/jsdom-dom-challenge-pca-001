document.addEventListener("DOMContentLoaded", () => {

  /// counter inner text
  let counter = document.querySelector("#counter")

  ///// runs counter every second
  let count = setInterval(function () {
      counter.innerText++;
  }, 1000);

  /// DOM Elements
  let minus = document.getElementById("minus")
  let plus = document.getElementById("plus")
  let love = document.getElementById("heart")
  let pause = document.getElementById("pause")

  let likes = document.querySelector(".likes")
  let submit = document.querySelector("#submit")
  let commentList = document.querySelector("#list")

// minus button
minus.addEventListener("click", function(e){
  counter.innerText--;
});

// plus button
plus.addEventListener("click", function(e){
  counter.innerText++;
});

// heart button
love.addEventListener("click", function(e){
  let numberLiked = document.getElementById(`${counter.innerText}`);
  if (numberLiked) {
     obj.children[0].innerText++
  } else {
  likes.innerHTML +=
   `<li id=${counter.innerText}> is liked
      <span>1</span> times.
   </li>`
  }
});

 // pause button
 pause.addEventListener("click", function(e){
  if (pause.innerText === "pause"){
      pause.innerText = "resume"
      clearInterval(count)

      plus.disabled = true;
      minus.disabled = true;
      love.disabled = true;
      submit.disabled = true;
  } else {
      count = setInterval(function () {
          counter.innerText++;
      }, 1000);
      pause.innerText = "pause"

      plus.disabled = false;
      minus.disabled = false;
      love.disabled = false;
      submit.disabled = false;
  }
});

 // submit comments button
 submit.addEventListener("click", function(e){
  e.preventDefault();
  let comment = document.querySelector("#comment-form > input[type=text]").value
  commentList.innerHTML += `<li>${comment}</li>`
  document.querySelector("#comment-form").reset();
});

})