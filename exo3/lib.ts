export function render(data){
    let html = ""
    data.forEach( todosUser => {
        
        html += `
        <article>
          
        <h2>${todosUser.name}</h2>
        <h4> ${todosUser.email}</h4>
        </article>
        `
    } )
    document.querySelector("main").innerHTML = html
}