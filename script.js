let o;
// fetch('https://hatatori.github.io/twice-api/twice-api-cdn.json')
fetch('twice-api.json')
.then(e=>e.json())
.then(e=>{
    o = e
    e.albums.map(obj=>{
        lista.innerHTML += render(obj)
    })
})

function render(obj){
    let est = `
    <div class="square">
        <img class="poster" src="${obj.images[0]}">
        <ul class="songs">
            ${obj.items.map(item=>{
                return `<li onclick="play('${item.id}')">${item.name}</li>`
            }).join("")}
        </ul>
    </div>`
    return est
}

function play(id){
    k = o.albums.map(e=>e.items).flat().find(e=>e.id==id).preview_url
    aud.src = k
    aud.play()
}