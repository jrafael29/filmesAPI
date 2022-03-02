const container = document.querySelector('.container')
async function fazerRequest(){
    await fetch('https://api.b7web.com.br/cinema/')
    .then( (req) => {
        return req.json()
    })
    .then((json)=>{
        json.map(
            t =>
            container.innerHTML += ` <div class="filme-area"> <div id="image"> <img src="${t.avatar}" alt="${t.titulo}"> </div> <div class="titulo">${t.titulo}</div> </div>`
        )
    })
}
fazerRequest()