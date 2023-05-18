const form = document.getElementById('orderForm');

const formSubmit = form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    for(let item in data){
        if(data[item] === '0'){
            delete data[item]
        }
    }
    console.log(data)


})