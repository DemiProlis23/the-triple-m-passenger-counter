let entries = document.getElementById("entries")
let changingNumber = document.getElementById("changing number")
let count = 0

function increment() {
    count += 1
    changingNumber.textContent = count
}

function save() {
    let countStr = count + " - "
    entries.textContent += countStr
    changingNumber.textContent = 0
    count = 0
}

function reset() {
    let count = 0
    entries.textContent = "Previous Entries: "
    changingNumber.textContent = 0
}