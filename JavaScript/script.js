const fname = document.querySelector('#name')
const mail = document.querySelector('#mail')
const link = document.querySelector('#link')
const submit = document.querySelector('#submit')
const form = document.querySelector('form')

test = (id) => {
    if(id.value == ''){
        return false
    }else{
        return true
    }
}

testborder = (id) => {
    if(id.value == ''){
        id.style.borderColor = 'red'
    }else{
        id.style.borderColor = 'black'
    }
}


form.addEventListener('submit', () => {
    submit.className = 'btn';
    document.querySelector('#person').innerHTML = fname.value
    setTimeout(() => {
        submit.className = '';
        if(test(fname) & test(mail) && test(link)){
            document.querySelector('#form').className = 'hidden'

            document.querySelector('#done').className = 'done'

            setTimeout(() => {
                document.querySelector('#done').className = 'block'
            }, 1000);

        }else{
            testborder(fname);
            testborder(mail);
            testborder(link);
        }
        
    }, 1000);
})