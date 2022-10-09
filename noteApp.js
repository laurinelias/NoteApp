
showNotes();

let addbtn = document.getElementById("addbtn");
    addbtn.addEventListener("click", function() {
    let addText = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    }else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    showNotes();
    console.log(notes);
});

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else {
        notesObj = JSON.parse(notes);
    }
    let html = " ";
    notesObj.forEach( function(element, index) {
            html +=`
                    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h4 class="card-title"> Note ${index + 1} </h5>
                            <p class="card-text"> ${element} </p>
                            <button id="${index}" onclick="deleteNotes(this.id)" class="btn-danger">
                                    Delete Notes
                            </button>
                        </div>
                    </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0){
        notesElm.innerHTML = html;
    }else {
        notesElm.innerHTML = `Nothing to show here. Create your Notes !`;
    }
         
}

function deleteNotes(index){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

