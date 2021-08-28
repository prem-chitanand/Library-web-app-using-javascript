console.log("this is library app")
function Book(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}

function Dsiplay(){

}

Dsiplay.prototype.add=function(book){
    tablebody=document.getElementById('tableBody')
 let random=Math.floor(Math.random() * 10)
    
    let uiString=`<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    <td>${random}</td>
    <td> <button class="btn btn-danger" id="delete" value="Delete" onclick="">delete book</td>
    </tr>`;
    tablebody.innerHTML+=uiString;
    let del=document.getElementById('delete');
       }

Dsiplay.prototype.clear=function(){
    let libraryform=document.getElementById('libraryform');
    libraryform.reset();
}

Dsiplay.prototype.validate=function(book){
    if(book.name.length<2 || book.author.length<2){
        return false
    }
    else{
        return true;

    }
   
    }
        
  
Dsiplay.prototype.show=function(type,displaymessage){
    let msg=document.getElementById('message');
    console.log(msg);
    msg.innerHTML=`<div class="alert alert-${type} alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>message!</strong> ${displaymessage}.
  </div>`
  setTimeout(function(){
      msg.innerHTML=""
  },5000);
}
let libraryform=document.getElementById('libraryform');
console.log(libraryform);
libraryform.addEventListener('submit',libraryFormSubmit);
function libraryFormSubmit(e){
    
    console.log('submitted');
    let name=document.getElementById('bookName').value;
   
    let author=document.getElementById('author').value;
  
    let action=document.getElementById('action');
    let fiction=document.getElementById('fiction');
    let programing=document.getElementById('programming');
    let health=document.getElementById('health');
    let type
   
    if(action.checked){
        type=action.value;
        console.log(type);
    }
    else if(fiction.checked){
        type=fiction.value;
    }
    else if(programing.checked){
        type=programing.value;
    }
    else if(health.checked){
        type=health.value;
    }
    let book=new Book(name,author,type);
    localStorage.setItem('name',JSON.stringify(book));
    console.log(book);
    
    
    let display=new Dsiplay();
    
    if(display.validate(book)){
        display.add(book);
    display.clear();
    display.show('success','your book have been added!!')
}
else{
    display.show('danger','sorry we cannot add your book');
}
e.preventDefault(e);
}