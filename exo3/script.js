var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { render } from "./lib";
// tsc script.ts --lib "es2015, es2016, dom" --target es6
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => data);
    });
}
function getPost() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => data);
    });
}
function displayInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        let todosUser = yield getUser();
        // let todosPost = await getPost();
        //const todos = {todosUser, todosPost }
        let div = document.querySelector('.js-list');
        for (const p in todosUser) {
            if (div instanceof HTMLDivElement) {
                div.innerHTML += `<article>
                           
                            <h2>${todosUser[p].name}</h2>
                            <h4> ${todosUser[p].email}</h4>

                            `;
                div.innerHTML += `                   
                            
        `;
                div.innerHTML += `</article>`;
            }
        }
    });
}
displayInfo();
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("input[type='text']");
    const liste = todosUser.filter(todos => todos.name.toLowerCase().includes(input.value.toLowerCase()));
    render(liste);
});
