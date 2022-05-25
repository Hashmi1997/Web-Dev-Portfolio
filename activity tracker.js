console.log("This is a Webpage activity tracker");
let i=0;
let tr= [];
document.addEventListener("click", function(e) {
  let variable;
  // console.log(e)
  variable = e.target;
//   console.log("You have clicked the"+ e.target);
  variable = e.target.className;
  tr[i]=e+ e.target;
  i++;

  console.log(i, tr);
  
});