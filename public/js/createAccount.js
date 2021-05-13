const createAccountFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const firstname = document.querySelector('#firstname').value.trim();
    const lastname = document.querySelector('#lastname').value.trim();
    const address = document.querySelector('#address').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zipcode = document.querySelector('#zipcode').value.trim();
    const tierchoice = document.querySelector('#tier_id').value;

    if (email && password && firstname && lastname && address && city && state && zipcode && tierchoice) {
        const response = await fetch('/api/createaccount', {
            method: 'POST',
            body: JSON.stringify({email, password, firstname, lastname, address, city, state, zipcode, tierchoice}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace("/dashboard");
          } else {
            alert("Failed to log in");
          }      
    }
}   

document
.querySelector('#sign-up-form')
.addEventListener('submit', createAccountFormHandler);