import { Questions } from "../addQuestion.js"
let quest = new Questions();

const ViewAll = async () => {
    let data = await quest.fetchData();
    console.log(data);
    let div = document.createElement('div')
    div.innerHTML = ""
    data.map(({
        id,
        question,
        answer
    }) => {
        return (
            div.innerHTML += `
              id : ${id} 
              question : ${question} 
              answer : ${answer} 
                                                `
        )

    })
    await swal({
        text: `${div.innerHTML}`
    })
}

document.getElementById('sweet').addEventListener('click',()=> {
    ViewAll();
})