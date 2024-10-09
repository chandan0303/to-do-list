const title=document.getElementById("title");
const desc=document.getElementById("description");
const form=document.querySelector("form");
const container =document.querySelector(".container");

// const add=()=>{
//     const task=document.createElement("div");
//     task.setAttribute("class","task");
//     container.append(task);
// }

const tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")) : [];
showAlltasks();

function showAlltasks (){
    tasks.forEach((value,index) => {
        const div=document.createElement("div");
        div.setAttribute("class","task");
        const innerdiv=document.createElement("div");
        div.append(innerdiv);

        const p=document.createElement("p");
        p.innerText=value.title;
        innerdiv.append(p);

        const span=document.createElement("span");
        span.innerText=value.desc;
        innerdiv.append(span);

        const button=document.createElement("button");
        button.setAttribute("class","deletebutton");
        button.innerText="-";
        div.append(button);
        
        //Delete Button Functionality
        button.addEventListener('click', ()=>{
            removetask();
            tasks.splice(index,1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showAlltasks();
        });

        container.append(div);
    });
};

function removetask(){
    tasks.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();
    });
};

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removetask();
    tasks.push({
        title:title.value,
        desc:description.value,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
   
    showAlltasks();
});

