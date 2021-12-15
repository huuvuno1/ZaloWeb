!(function() {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    function getFormLogin() {
        return {
            'username': $('#username').value,
            'password': $('#password').value
        }
    }

    function getFormRegister() {
        return {
            'email': $('#email').value,
            'fullname': $('#fullname').value,
            'password': $('#password').value,
            'repassword': $('#repassword').value,
        }
    }

    if (location.pathname.includes('/login')) {
        // handle login logic
        $('#btn_login').addEventListener('click', e => {
            console.log(getFormLogin())
            fetch('/api/v1/login', {
                    'method': 'POST'
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(err => {
                    console.log(err)
                })
        })
    
    } else {
        // handle register
        $('#btn_register').addEventListener('click', e => {
            console.log(getFormRegister())
        })
    }
})()