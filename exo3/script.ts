import { render } from "./lib";

export {}
// tsc script.ts --lib "es2015, es2016, dom" --target es6

async function getUser() {
    return await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => data);
}
async function getPost() {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => data);
}



async function displayInfo(){
    let todosUser = await getUser();
   // let todosPost = await getPost();

    //const todos = {todosUser, todosPost }
    
    let div = document.querySelector('.js-list') ;
    for (const p in todosUser) {
        
        if(div instanceof HTMLDivElement){
           
            div.innerHTML += `<article>
                           
                            <h2>${todosUser[p].name}</h2>
                            <h4> ${todosUser[p].email}</h4>

                            `   
                            
        div.innerHTML += `                   
                            
        `;
        div.innerHTML += `</article>`;
        }

     }
}
displayInfo()

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("input[type='text']");
    
   
    const liste = todosUser.filter(todos => todos.name.toLowerCase().includes(input.value.toLowerCase() ));

    render(liste)
});