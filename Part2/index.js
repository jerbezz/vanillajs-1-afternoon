const id = document.getElementById('idInput')
const color = document.getElementById('colorInput')

const setCard = () => {
    const card = document.getElementById(id.value)
    card.style.color = color.value;
}