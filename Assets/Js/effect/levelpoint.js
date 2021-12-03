const level = document.getElementById('level')
const points = document.getElementById('points')
const appendselect = document.querySelector('.appendselect')

const yo = () =>{
    points.value = level.value
    // points.disabled = true;
    addSelect(level.value)

}

const yoo = () =>{
    level.value = points.value
    // points.disabled = true;

    addSelect(level.value)

}



const addSelect = (selectNbr) =>{
    
    appendselect.innerHTML = ""

    for(var i = selectNbr ;i < parseInt(selectNbr)+ 5; i++){
        appendselect.innerHTML += `
        <option value="${i}">${i}</option>
        `
    }
}