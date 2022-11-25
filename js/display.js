let count = Cookies.get(`clickCount`);
let count2 = Cookies.get(`secondCount`);
let count3 = Cookies.get(`thirdCount`);
if(count != undefined){
    // inject value if cookie is defined
    document.body.insertAdjacentHTML(`beforeend`, `<h1>You clicked the first button ${count} times.</h1>`);
    // We could use innerHTML because the outer option would actually change the Body tags themselves
    // BUT if you do this more than once they will keep overwriting each other when you click the other buttons on page
    // document.body.innerHTML = `<h1>You clicked the button ${count} times.</h1>`
}else{
    document.body.insertAdjacentHTML(`<h1>You never clicked the first button</h1>`)
}

if(count2 != undefined){
    document.body.insertAdjacentHTML(`beforeend`, `<h1>You clicked the second button ${count} times.</h1>`);
}else{
    document.body.insertAdjacentHTML(`<h1>You never clicked the second button</h1>`)
}

if(count3 != undefined){
    document.body.insertAdjacentHTML(`beforeend`, `<h1>You clicked the third button ${count} times.</h1>`);
}else{
    document.body.insertAdjacentHTML(`<h1>You never clicked the third button</h1>`)
}