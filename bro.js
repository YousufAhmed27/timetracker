let data = {
    work: [5, 32, 103],
    pwork: [7, 36, 128],
    play: [1, 10, 23],
    pplay: [2, 8, 29],
    study: [0, 4, 13],
    pstudy: [1, 7, 19],
    exercise: [1, 4, 11],
    pexercise: [1, 5, 18],
    social: [1, 5, 21],
    psocial: [3, 10, 23],
    selfcare: [0, 2, 7],
    pselfcare: [1, 2, 11]
}

let cards = document.querySelectorAll(".timetrack .card")

for (let i = 0; i < cards.length; i++) {
    let img = document.createElement("img")
    img.src = `icon-${cards[i].dataset.name}.svg`
    img.alt = `${cards[i].dataset.name}`

    let btm = document.createElement("div")
    btm.classList.add("btm")

    let name = document.createElement("div")
    name.classList.add("name")

    let para = document.createElement("p")
    let paraTXT = document.createTextNode(`${cards[i].dataset.name.toUpperCase()}`)
    para.append(paraTXT)

    let elli = document.createElement("img")
    elli.src = "icon-ellipsis.svg"
    elli.alt = "not"

    name.append(para)
    name.append(elli)
    btm.append(name)

    let cont = document.createElement("div")
    cont.classList.add("content")
    let contTXT = document.createTextNode(`${data[`${cards[i].dataset.name}`][1]}` + "hrs")
    cont.append(contTXT)
    btm.append(cont)

    let foot = document.createElement("div")
    let footTXT = document.createTextNode("Last Week - " + `${data[`p${cards[i].dataset.name}`][1]}` + "hrs")
    foot.classList.add("foot")
    foot.append(footTXT)
    btm.append(foot)

    cards[i].append(img)
    cards[i].append(btm)
}

let btns = document.querySelectorAll(".timetrack .main .bottom div")
let ti = ""
btns.forEach(btn => btn.addEventListener("click", e => {
    btns.forEach(b => b.classList.remove("active"))
    e.currentTarget.classList.add("active")
    ti = e.currentTarget.classList[0]
    TimeChange(ti)
}))

function TimeChange(time) {
    cards.forEach(e => e.innerHTML = "")
    for (let i = 0; i < cards.length; i++) {
        let img = document.createElement("img")
        img.src = `icon-${cards[i].dataset.name}.svg`
        img.alt = `${cards[i].dataset.name}`

        let btm = document.createElement("div")
        btm.classList.add("btm")

        let name = document.createElement("div")
        name.classList.add("name")

        let para = document.createElement("p")
        let paraTXT = document.createTextNode(`${cards[i].dataset.name.toUpperCase()}`)
        para.append(paraTXT)

        let elli = document.createElement("img")
        elli.src = "icon-ellipsis.svg"
        elli.alt = "not"

        name.append(para)
        name.append(elli)
        btm.append(name)

        let cont = document.createElement("div")
        cont.classList.add("content")


        let contTXT, footTXT
        if (time === "day") {
            contTXT = document.createTextNode(`${data[`${cards[i].dataset.name}`][0]}` + "hrs")
            footTXT = document.createTextNode("Last " + ti + " - " + `${data[`p${cards[i].dataset.name}`][0]}` + "hrs")
        } else if (time === "week") {
            contTXT = document.createTextNode(`${data[`${cards[i].dataset.name}`][1]}` + "hrs")
            footTXT = document.createTextNode("Last " + ti + " - " + `${data[`p${cards[i].dataset.name}`][1]}` + "hrs")
        } else if (time === "month") {
            contTXT = document.createTextNode(`${data[`${cards[i].dataset.name}`][2]}` + "hrs")
            footTXT = document.createTextNode("Last " + ti + " - " + `${data[`p${cards[i].dataset.name}`][2]}` + "hrs")
        } else {
            contTXT = document.createTextNode("0hrs")
            footTXT = document.createTextNode("Last " + ti + " - " + "0hrs")
        }


        cont.append(contTXT)
        btm.append(cont)

        let foot = document.createElement("div")
        foot.classList.add("foot")
        foot.append(footTXT)
        btm.append(foot)

        cards[i].append(img)
        cards[i].append(btm)
    }
}