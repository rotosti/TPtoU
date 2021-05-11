const createAccountFormHandler = async (event) => {

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const firstname = document.querySelector('#firstname').value.trim();
    const lastname = document.querySelector('#lastname').value.trim();
    const address = document.querySelector('#address').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zipcode = document.querySelector('#zipcode').value.trim();
    // add tier choice here

    if (email && password && firstname && lastname && address && city && state && zipcode) {
        const response = await fetch('/api/createaccount', {
            method: 'POST',
            body: JSON.stringify({email, password, firstname, lastname, address, city, state, zipcode}),
            header: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            const response2 = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
          });

            if (response2.ok) {
                document.location.replace('/dashboard');
            }
        }
        
    }
}   

document
.querySelector('#sign-up-form')
.addEventListener('click', createAccountFormHandler);