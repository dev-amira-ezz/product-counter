let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let previousP = document.getElementById("previous-p")
let totalP = document.getElementById("total-p")
let count = 0
let totalCount = 0
let countStr = ""

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    previousP.style = "visibility: visible"
    totalP.style = "visibility: visible"
    if (countStr === "") {
       countStr += count
    } else if (count === 0) {
        countStr += ""
    } else {
        countStr = " + " + count
    }
       saveEl.textContent += countStr
       countEl.textContent = 0
       totalCount += count
       totalEl.textContent = totalCount
       count = 0
    }

function reset () {
    saveEl.textContent = ""
    countEl.textContent = 0
    totalEl.textContent = ""
    count = 0
    totalCount = 0
     previousP.style = "visibility: hidden"
    totalP.style = "visibility: hidden"
}