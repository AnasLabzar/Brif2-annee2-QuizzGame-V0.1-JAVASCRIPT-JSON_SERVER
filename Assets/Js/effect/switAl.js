const fetchData = async () => {
    let resp = await fetch("http://localhost:3000/posts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    let text = await resp.json()
    return text
}

const ViewAll = async () => {
    let data = await fetchData()

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