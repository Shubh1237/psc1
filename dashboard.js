append();

function append(){
    console.log("yes");
    let data = JSON.parse(localStorage.getItem("students")) || [];
    let container = document. getElementById("container");
    container.innerHTML = null;

    data.forEach(function (elem,index){


    let box = document.createElement("div");
    box.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
    box.style.borderRadius = "20px"
    box.style.paddingBottom = "30px"

    let img = document.createElement("img");
    img.src = elem.image;
    img.style.width = "100%"
    img.style.height = "450px"
    img.style.borderRadius = "20px 20px 0px 0px"

    let name= document.createElement("h3")
    name.innerText = elem.name;

    let course= document.createElement("p");
    course.innerText= elem.course;

    let unit = document.createElement("p");
    unit.innerText = elem.unit;

    let batch =  document.createElement("p")
    batch.innerText = elem.batch;


    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("id","container");
    btn.style.color = "blue"
    btn.style.cursor = "pointer"
    btn.style.borderRadius = "20px"
    btn.style.padding = "10px 25px"
    btn.style.fontSize = "larger"
    btn.addEventListener("click",function(){
        remove(elem,index)
    });

    box.append(img,name,course,batch,unit,btn)
    container.append(box);
    });
}

function remove(elem,index){

    data.splice(index,1)
    localStorage.setItem("students", JSON.stringify(data));
    window.location.reload()
}