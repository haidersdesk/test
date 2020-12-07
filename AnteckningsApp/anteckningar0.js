let anteckningslogg = [];  // array för att innehölla anteckningar




// Objekt logg: för att skapa nya inlägg

function logg(title, content, name, time, imgUrl ) {  //konstruktör
    this.title = title;
    this.content = content;
    this.name = name;
    this.time= time;
    this.imgUrl = imgUrl;
  }

     
 // När man klickar på button visas en form
document.getElementById("newlogg").addEventListener("click", function addForm() { 
    
    
    let form = document.createElement("form");
    form.id = "newloggform";
    form.setAttribute("action", "javascript:addToAnteckningslogg();"); // *** funktionen ej gjort än 
        
     document.getElementById("buttonandform").appendChild(form);
});