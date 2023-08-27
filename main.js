

let notelistRootElement = document.querySelector('#notelist')
let notelandRootElement = document.querySelector('.checknote')
let mainRootdivElement= document.querySelector('.notebody')
let onenote = document.querySelector('.notebodyone')
let taskdivmain = document.querySelector('.taskdiv')

let header = document.getElementById('contentvalueone') ;

console.log(header)


document.querySelector('.createNote').style.display = 'none';
document.querySelector('.notedisplay').style.display = 'none';
document.querySelector('.createNoteButton').style.display = 'none'
document.querySelector('.addnewtask').style.display = 'none'
document.querySelector('.notebodyone').style.display = 'none'
document.querySelector('.notebody').style.display = 'none'

 let tasklist = []

let notes = []

let array =[]

function renderElementToscreen(){

    if(localStorage.getItem('notes')){

        notes = JSON.parse(localStorage.getItem('notes'))
        notes.forEach(note => {
            renderListNoteLand(note , note.uniqueId)
        });
        
    }

}


function renderElementToScreen(){
    if(localStorage.getItem('tasklist')){
        tasklist = JSON.parse(localStorage.getItem('tasklist'))
        tasklist.forEach(task => {
            // addtask(task)
            // renderElementTotask(task , uniqueId)
            console.log(tasklist , uniqueId)
        })
            

    }
}

document.querySelector('.newnotebutton').addEventListener('click',()=>{
    document.querySelector('.createNoteButton').style.display = 'block'
    document.querySelector('.createNote').style.display = 'block';
    document.querySelector('.chechnotes').style.display = 'none'

    
})

document.querySelector('.createNoteButton').addEventListener('click',  ()=> {
       let note = {
            Title: document.querySelector('#createNoteTitle').value,
            content: document.querySelector('#createNoteContent').value, 
            
        }
        
        let uniqueId = Math.floor(Math.random() * 1000000);

        document.querySelector('.createNoteButton').style.display = 'none'
        document.querySelector('.createNote').style.display = 'none';
        addNoteTolocalstorage(note , uniqueId)
        renderListNoteLand(note ,uniqueId);
        // removeElementFormUnique(id)
    })

    let rohit = JSON.parse(localStorage.getItem('notes'))
    let rahul = JSON.parse(localStorage.getItem('tasklist'))
    console.log(rahul)
function renderListNoteLand(note , uniqueId){
    let noteElement = document.createElement('div');
    noteElement.classList.add('note' , uniqueId)
    let noteTitle = document.createElement('h2');
    noteTitle.className = 'noteonemain';
    let noteContent = document.createElement('p') ;
    noteContent.id = 'contentvalueone';

    console.log(noteContent)

    // document.createElement('p')   contentvalue

    noteTitle.innerText = note.Title;
    noteContent.innerText = note.content;



    noteElement.append(noteTitle);
    noteElement.append(noteContent);

    notelistRootElement.append(noteElement)

    // console.log(noteTitle.parentElement)

    document.querySelector('#createNoteTitle').value  = '';
    document.querySelector('#createNoteContent').value = '';

    //
    let item = {
        itemname : note.Title.value , 
        itemcontent : note.Content,
    }

    
   noteElement.addEventListener('click' , ()=>{
          document.querySelector('.notedisplay').style.display = 'block';
         document.querySelector('.notebody').style.display = 'block';
         document.querySelector('.notebodyone').style.display = 'block';
         document.querySelector('.chechnotes').style.display = 'none';
        console.log('click')
        console.log('click')
        // document.querySelector('.')
        
       

        for(let i = 0 ;i < rohit.length ; i++){
            document.querySelector('#noteonemain').innerHTML = rohit[i].Title
            document.querySelector('#header').innerHTML = rohit[i].content
        } 


        addNewTaskToTitleAndContent(item)

        removeElementFormUnique(uniqueId)
        

        addItem(item)
    
    })

    
}

 function addNewTaskToTitleAndContent(item){
    let mainonedisplay = document.createElement('div');
    mainonedisplay.classList.add('notedisplay');

    let mainonebody = document.createElement('div');
    mainonebody.classList.add('titledisplay');

    let noteonemain = document.createElement('h2');

    let buttonone = document.createElement('button');
    buttonone.classList.add('addtask');

    let buttontwo = document.createElement('button');
    buttontwo.classList.add('deletenote');

    let notebodyone = document.createElement('div');
    notebodyone.setAttribute('class' , 'notebodyone');
    notebodyone.classList.add('notebodyone');

    let taskheading = document.createElement('p');
    taskheading.setAttribute('id' , 'header');

    noteonemain.innerHTML = item.itemname;
    taskheading.innerText = item.itemcontent;
    buttonone.innerHTML = 'Ad';


    

   

    mainonebody.appendChild(noteonemain);
    mainonebody.appendChild(buttonone);
    mainonebody.appendChild(buttontwo);
    notebodyone.appendChild(taskheading);


    mainonedisplay.appendChild(mainonebody)
    mainonedisplay.appendChild(notebodyone)

    }

document.querySelector('.deletenote').addEventListener('click' ,()=>{
    document.querySelector('.note').remove() , 
    console.log('note delete')
    document.querySelector('.notedisplay').style.display = 'none';
    document.querySelector('.notebody').style.display = 'none';
    document.querySelector('.notebodyone').style.display = 'none';
    document.querySelector('.chechnotes').style.display = 'block'
    // removeElementFormUnique(uniqueId)
    localStorage.clear()
})
 
// newtask


document.querySelector('.newtask').addEventListener('click',()=>{
    console.log('click')
    document.querySelector('.addnewtask').style.display = 'block'
    document.querySelector('.addnewtask').style.position = 'absolute'
    document.querySelector('.createNote').style.position = 'relative'
    
    

})
    


function addNoteTolocalstorage(note , uniqueId){
        
    note = { ...note , uniqueId}

    notes.push(note)
   localStorage.setItem('notes' , JSON.stringify(notes))

}

document.querySelector('.notelist').addEventListener('click', ()=>{
    console.log('click')
    document.querySelector('.notedisplay').style.display = 'block';
    document.querySelector('.notebody').style.display = 'block';
    document.querySelector('.notebodyone').style.display = 'block';
    document.querySelector('.chechnotes').style.display = 'none'
    
    removeElementFormUnique(uniqueId)
    localStorage.clear()


 addItem(item)
    
    })


    


document.querySelector('.Createtask').addEventListener('click' , ()=>{
    
   
    let uniqueId = Math.floor(Math.random() * 100);

    let task={
        checktask : document.querySelector('#checkbox').type, 
        taskname : document.querySelector('.rohitinput').value,

    }
        
       //create

       if(document.querySelector('.rohitinput').value.trim().length >0 ){
        renderElementTotask(task , uniqueId)
        addTaskTolocalstorage(task , uniqueId)
    }else{
        alert('please enter task')
        console.log('please enter task')
    }
//   renderElementTotasklist(task)
})


    function addTaskTolocalstorage(task , uniqueId){
        
        task = { ...task , uniqueId}
    
        tasklist.push(task)
       localStorage.setItem('tasklist' , JSON.stringify(tasklist))
    
    }//

    function renderElementTotask(task) {
        let taskdivonemain = document.createElement('li');
        taskdivmain.classList.add('taskdivone')
        let inputtask = document.createElement('input');
        inputtask.type= 'checkbox'
        inputtask.id = 'checkbox'
        inputtask.value = task.checktask;
        let label = document.createElement('label')
        let createbutton = document.createElement('button')
        createbutton.className = 'Createtask'
    
    
        taskdivonemain.append(inputtask);
        taskdivonemain.append(label);
    
    
        taskdivmain.append(taskdivonemain)
        
    
        inputtask.innerText = task.checktask;
        label.innerText = task.taskname;
        
    
    
        document.querySelector('.rohitinput').value = '';
    
        document.querySelector('.addnewtask').style.display = 'none'
    
        // console.log(taskdivonemain , uniqueId)
    }


   

 document.querySelector('.notes-found').innerText= JSON.parse(localStorage.getItem('notes')).length


renderElementToscreen()

renderElementToScreen()



function removeElementFormUnique(id){

    console.log(id)
    document.querySelector('.' + id).remove()

    notes = JSON.parse(localStorage.getItem('notes'))

    let index = notes.findIndex(note=> note.uniqueId==id)

    notes.splice(index ,1)

    localStorage.setItem('notes' , JSON.stringify(notes))



 }


 function addItem(item){
    let mainonedisplay = document.createElement('div');
    mainonedisplay.classList.add('notedisplay');

    let mainonebody = document.createElement('div');
    mainonebody.classList.add('titledisplay');

    let noteonemain = document.createElement('h2');

    let buttonone = document.createElement('button');
    buttonone.classList.add('addtask');

    let buttontwo = document.createElement('button');
    buttontwo.classList.add('deletenote');

    let notebodyone = document.createElement('div');
    notebodyone.setAttribute('id' , 'notebodyone');
    notebodyone.classList.add('notebodyone');

    let taskheading = document.createElement('p');
    taskheading.setAttribute('id' , 'header');

    noteonemain.innerHTML = item.itemname;
    taskheading.innerHTML = item.itemcontent;


    buttonone.addEventListener('click' , ()=>{
        console.log('click')
    document.querySelector('.addnewtask').style.display = 'block'
    document.querySelector('.addnewtask').style.position = 'absolute'
    document.querySelector('.createNote').style.position = 'relative'
    
    })

    buttontwo.addEventListener('click' , ()=>{
        document.querySelector('.note').remove() , 
        console.log('note delete')
        document.querySelector('.notedisplay').style.display = 'none';
        document.querySelector('.notebody').style.display = 'none';
        document.querySelector('.notebodyone').style.display = 'none';
        document.querySelector('.chechnotes').style.display = 'block'
        // removeElementFormUnique(Id)
        localStorage.clear()
    })

    mainonebody.appendChild(noteonemain);
    mainonebody.appendChild(buttonone);
    mainonebody.appendChild(buttontwo);
    notebodyone.appendChild(taskheading);


    mainonedisplay.appendChild(mainonebody)
    mainonedisplay.appendChild(notebodyone)
  
 }
    // thak you
