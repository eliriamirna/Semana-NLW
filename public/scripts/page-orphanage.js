const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-27.2189759,-49.6469789], 15)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//crate icon
const icon = L.icon({
    iconUrl: "public/images/map-marker.svg",
    inconsizes: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker
L
.marker([-27.2189759,-49.6469789], { icon })
.addTo(map)

/* image gallery */

function selectImage(event) {
    const button = event.currentTarget
    
    //remover tds as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove('active')
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para este botão
    button.classList.add('active')
}

