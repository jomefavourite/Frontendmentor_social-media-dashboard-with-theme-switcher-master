function call(name) {
    return document.querySelector(name)
}

function callAll(tag) {
    return document.querySelectorAll(tag)
}

let check = call('input[type="checkbox"]')
let topColor = call('.top-color')
let body = call('body');
let card = callAll('.card_one');
let card2 = callAll('.card_two')
let h1 = call('.h1')
let h = call('.h')
let p1 = call('.change')
let p = callAll('p')

check.addEventListener('click', () => {
    
    check.classList.toggle('toggle')
    body.classList.toggle('lightBG')
    card.forEach(cards => {
        cards.classList.toggle('cardLight')
    })
    card2.forEach(cards => {
        cards.classList.toggle('cardLight2')
    })
    topColor.classList.toggle('topColor')
    h1.classList.toggle('h11')
    h.classList.toggle('lighttext')
    p1.classList.toggle('span--green')
    p.forEach(i => {
        i.classList.toggle('p')
    })
        
    console.log(h);
   
})

