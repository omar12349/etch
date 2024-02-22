const container = document.querySelector('.container')
const btn = document.querySelector('button')
let gridNumber = 16
btn.addEventListener('click',()=>{
    gridNumber = parseInt(prompt('Enter Number of Grids'))
    container.innerHTML =''
    for (let i = 0; i < gridNumber; i++){
        const div = document.createElement('div')
        div.setAttribute('style','background-color:blue;display:flex; flex-direction:column; flex:auto; border-style:solid; border-color: black; border-width:1px; box-sizing: border-box')
        for( let j=0; j < gridNumber; j++){
            const div2 = document.createElement('div')
            div2.setAttribute('style','background-color:blue;display:flex; flex:auto; border-style:solid; border-color: black; border-width:1px; box-sizing: border-box')
            div.appendChild(div2)
            div2.addEventListener('mouseover',()=>{
                let randomColor = Math.floor(Math.random()*16777215).toString(16)
                div2.style.backgroundColor = '#' + randomColor
            })
        }
        container.appendChild(div)
    }
    
})
for (let i = 0; i < gridNumber; i++){
    const div = document.createElement('div')
    div.setAttribute('style','background-color:blue;display:flex; flex-direction:column; flex:auto; border-style:solid; border-color: black; border-width:1px; box-sizing: border-box')
    for( let j=0; j < gridNumber; j++){
        const div2 = document.createElement('div')
        div2.setAttribute('style','background-color:blue;display:flex; flex:auto; border-style:solid; border-color: black; border-width:1px; box-sizing: border-box')
        div.appendChild(div2)
        div2.addEventListener('mouseover',()=>{
            let randomColor = Math.floor(Math.random()*16777215).toString(16)
            div2.style.backgroundColor = '#' + randomColor
        })
    }
    container.appendChild(div)
}
