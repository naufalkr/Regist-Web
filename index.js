const form = document.getElementById('form');
const nama = document.getElementById('nama');
const nrp = document.getElementById('nrp');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    //Untuk mengecek apakah email valid
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); 
}

const isValidNRP = nrp => {
    //Untuk mengecek apakah NRP tepat 10 angka
    const nrpRegex = /^\d{10}$/; 
    return nrpRegex.test(nrp);
}

const validateInputs = () => {
    const namaValue = nama.value.trim();
    const nrpValue = nrp.value.trim();
    const emailValue = email.value.trim();

    if(namaValue === '') {
        setError(nama, 'Masukkan nama');
    } else {
        setSuccess(nama);
    }

    if(nrpValue === '') {
        setError(nrp, 'Masukkan NRP');
    }
    else if (!isValidNRP(nrpValue)) {
        setError(nrp, 'Masukkan NRP yang valid');
    }   
    else {
        setSuccess(nrp);
    }
    
    if(emailValue === '') {
        setError(email, 'Masukkan email');
    } 
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Masukkan Email yang valid');
    } 
    else {
        setSuccess(email);
    }

};
