class MyHeader extends HTMLElement{
    connectedCallback() {
        //createElement = cria uma elemento HTML baseado numa TAG especificada
        const header = document.createElement("header");
        const nav = document.createElement("nav");
        const ul = document.createElement("ul");
        const titleDiv = document.createElement("div");
        const pageTitle = document.createElement("h1");


        const myLinks = [
            ["Inicio", "/"],
            ["Teste", "/teste.html"],
            ["Projeto 1", "/projects/projeto1.html"]


        ];


        for(let i = 0; i < myLinks.length; i++){
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.setAttribute("href", myLinks[i][1]);
            a.textContent = myLinks[i][0];
            li.appendChild(a);
            ul.appendChild(li);
        }


        nav.appendChild(ul);
        pageTitle.textContent = "Meu Site";
        titleDiv.appendChild(pageTitle);
        header.appendChild(titleDiv);
        header.appendChild(nav);
        this.appendChild(header);


    }


}
customElements.define("my-header", MyHeader);
