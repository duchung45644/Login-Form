var form = document.querySelector('form')
var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var password2 = document.querySelector('#password-2')
var loginBtn = document.querySelector('#btn-login')

function showError(input, message){
    var inputForm = input.parentElement
    inputForm.className = 'input-form error'
    
    var small = inputForm.querySelector('small')
    small.innerText = message
}

function showSuccess(input){
    var inputForm = input.parentElement
    inputForm.className = 'input-form success'
    
    var small = inputForm.querySelector('small')
    small.innerText = ''
}

function required(listInput){
    listInput.forEach(input => {
        input.value = input.value.trim()
        let field_name = input.id.charAt(0).toUpperCase() + input.id.slice(1) //Get field name and Capitalize
        if(!input.value){
            showError(input, field_name+' không được để trống')
        }
        else{
            showSuccess(input)
        }
    });
}

function checkLength(input, min, max){
    let field_name = input.id.charAt(0).toUpperCase() + input.id.slice(1) //Get field name and Capitalize

    if(input.value.length < min){

        showError(input, `${field_name} cần ít nhẩt ${min} kí tự`)
    }
    else if(input.value.length > max){

        showError(input, `${field_name} cần ít hơn  ${max} kí tự`)
    }
    else{
        showSuccess(input)
    }
}

function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password do not match!')
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    if(!required([username, email, password, password2])){
        checkLength(username,3,15)
        checkLength(password,6,25)
        checkPasswordMatch(password,password2)
    }
})

