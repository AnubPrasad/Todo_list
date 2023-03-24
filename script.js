/*
function doOnClick() {
    let inp = document.getElementById('input-box');
    
    let my_div = document.getElementById('my-div');

    let h1 = document.createElement('h1');
    
    h1.innerText = inp.value;
    my_div.append(h1);
}

function main() {
    let button1 = document.getElementById('butt');
    button1.addEventListener('click', doOnClick);
}

main();
*/


/*
let butid=document.getElementById('butt');
//console.log(butid);
function man(){
butid.addEventListener('click',fun);
}
function fun(){
let userinput=document.getElementById('input-box');
let res=userinput.innerText;
console.log(res);
}
man();
*/



let but=document.getElementById('butt');
but.addEventListener("click",onClick);

function onClick(){
    let lists=document.getElementById("lists");
    let li=document.createElement("li");
    let input=document.getElementById('input-box');
    if(input.value.length !==0){
      //adding a li  
        let text_div=document.createElement('div');
        text_div.innerText=input.value;
        li.append(text_div);
        input.value="";
        // deleting a li
        let del_button = document.createElement('button');
        del_button.style.padding='5px';
        del_button.style.color='grey';
        del_button.type = 'button';
        del_button.innerText = "DELETE";
        li.append(del_button);
        del_button.addEventListener('click', doOnDel);
        //creating a edit in li
        let edit_button = document.createElement('button');
        edit_button.style.padding='5px';
        edit_button.style.color='grey';
        edit_button.type = 'button';
         edit_button.innerText = 'EDIT';
         li.append(edit_button);
         edit_button.addEventListener('click', doOnEdit);
    
        lists.append(li);
    }
        
        function doOnDel() {
            li.remove();
        }
        
    
    function doOnEdit() {
        input.value = li.childNodes[0].innerText;
        doOnDel();
    }
    

   
}




