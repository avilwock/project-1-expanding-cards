//To make this work, change the class from active to inactive unless clicked on
//Use Query Selector All to get all panels in the divs
const panels = document.querySelectorAll('.panel');

console.log(panels[0])

//Loop through panels as an array
panels.forEach((panel) => {
    console.log(panel)
    panel.addEventListener('click', () => {
        // console.log(123)
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    //don't need parenthesis if you don't want 
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}