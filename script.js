console.log('Add validation!');

//defines all the elements by id
let parkingForm = document.getElementById("parking-form")
let nameField = document.getElementById('name')
let carYear = document.getElementById('car-year')
let carMake = document.getElementById('car-make')
let carModel = document.getElementById('car-model')
let startDate = document.getElementById('start-date')
let creditCard = document.getElementById('credit-card')
let CVV = document.getElementById('CVV')
let expiration = document.getElementById('expiration')

parkingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validateName();
    validateCarYear();
    validateCarMake();
    validateCarModel();
    validateStartDate();
    validateCreditCard(creditCard.value);
    validateCVV();
    validateExpiration();

})

function validateName() {
    if (/\d/.test(nameField.value) === true || nameField.value === '')
    {
        nameField.parentElement.classList.remove('input-valid');
        nameField.parentElement.classList.add('input-invalid');
    }
    else {
        nameField.parentElement.classList.remove('input-invalid');
        nameField.parentElement.classList.add('input-valid');
    }

}

function validateCarYear() {
    if (carYear.value <= 1900) {
        carYear.classList.remove('input-valid')
        carYear.classList.add('input-invalid')
    }
    else {
        carYear.classList.remove('input-invalid')
        carYear.classList.add('input-valid')
    }
}

function validateCarMake() {
    if () {
        
    } else {
        
    }
}

function validateCarModel() {
    if () {
        
    } else {
        
    }
}

function validateStartDate() {
    if () {
        
    } else {
        
    }
}

function validateCreditCard() {
    if () {
        
    } else {
        
    }
}

function validateCVV() {
    if () {
        
    } else {
        
    }
    
}

function validateExpiration() {
    if () {
        
    } else {
        
    }
}