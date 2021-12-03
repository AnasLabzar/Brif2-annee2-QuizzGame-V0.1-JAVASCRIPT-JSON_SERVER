const AddQuest = document.querySelector('#AddQues')
const AddLevel = document.querySelector('#AddLevel')


export class Questions{
    fetchData = async () => {
        let resp = await fetch("http://localhost:3000/posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    
        let text = await resp.json()
        return text
    }

    insertNewQuestion = (obj) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(obj);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:3000/posts", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
    
}
// function test(){
//     console.log('helloi');

// }

function loadArrayPossibleAnswers() {
    var elem = document.getElementsByClassName("inputs");
    var PossibleAnswers = [];
    for (var i = 0; i < elem.length; ++i) {
        if (typeof elem[i].value !== "undefined") {
            PossibleAnswers.push(elem[i].value);
        }
    }
    return PossibleAnswers;
}
function loadArrayPossibleAnswersCorrect() {
    var elem = document.getElementsByClassName("CorrectINput");
    var PossibleAnswers = [];
    for (var i = 0; i < elem.length; ++i) {
        if (typeof elem[i].value !== "undefined") {
            PossibleAnswers.push(elem[i].value);
        }
    }
    return PossibleAnswers;
}

let quest = new Questions();

document.getElementById('hello').addEventListener('click',()=>{
    let objet = {
        
        question: document.getElementById("AddQues").value,
        answers:  loadArrayPossibleAnswers(),
        correctAnswer: loadArrayPossibleAnswersCorrect(),
        points: document.querySelector(".appendselect").value,
        level:  document.getElementById("level").value,
        type: document.getElementById("type-question").value,
        matiere: document.getElementById("matiere").value
    } 
    
    
    quest.insertNewQuestion(objet)

    console.log(objet);
});