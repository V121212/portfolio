
    // about section:
    var tablinks= document.getElementsByClassName("tab-links");
     var tabcontents= document.getElementsByClassName("tab-contents");

     // for show more secition 
     var show_more = document.getElementsByClassName("show-more");


     function showMoreFunction(){
        alert("We are in progress");
     }


function opentab(tabname){
     for(tablink of tablinks){
        tablink.classList.remove("active-link")   //for hiding info
     }
     for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
     }
     event.currentTarget.classList.add("active-link");   //for shows the info
     document.getElementById(tabname).classList.add("active-tab");
}
 

    var sidemeu = document.getElementById("sidemenu");
    function openmenu(){
        sidemeu.style.right = "0";
    }
    function closemenu(){
        sidemeu.style.right = "-200px";
    }
 

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwpU2gaP1CYUjO9T4uiT0_PPw2uqIzZ5kLIaq-KyGanNt-KodoC2rOab8St8fE4uIASyg/exec'    /*gogle sheet link after generaed*/ 
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");  /*this is for message i.e after runs 5s it automatically dusappear and reaset*/
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
   
    
function dark_mode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   var aboutMe = getElementById("about") ;
}
 
