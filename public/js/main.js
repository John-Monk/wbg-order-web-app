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

    fetch('/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

})