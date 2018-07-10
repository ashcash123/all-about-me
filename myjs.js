

document.addEventListener("DOMContentLoaded",
function() {
    // alert("Wassup");
    // console.log("JEUUUUU");

    let myPhoto = document.getElementById("change-gif")

    myPhoto.addEventListener("click", changeImage)

    function changeImage(){
        console.log(myPhoto.src);
        if (myPhoto.src=="file:///Users/girlswhocode2018/development/about%20me%20/mrkrabsmoney.gif"){
            myPhoto.src="donalddollars.gif"
        } else {
            myPhoto.src="mrkrabsmoney.gif"
        }
    }
})
// <script src="myjs.js"

// file:///Users/girlswhocode2018/development/about%20me%20/mrkrabsmoney.gif
