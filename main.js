const inputAdding = document.querySelector('.input-box')
const listContainer = document.querySelector('.list')


// to-do list oluşturma
function addTask () {

    //   doğrulama yapma
    if (inputAdding.value === '') {
      alert('Add your Task!');
    return;
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputAdding.value
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

  //   formu temizleme
  inputAdding.value = " ";

  saveData();

}
listContainer.addEventListener('click', function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData()

  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    saveData()
  }

}, false)

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data")
}
showTask()