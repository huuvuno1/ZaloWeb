!(function() {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const popupCenter = ({url, title, w, h}) => {
        // Fixes dual-screen position                             Most browsers      Firefox
        const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;
    
        const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    
        const systemZoom = width / window.screen.availWidth;
        const left = (width - w) / 2 / systemZoom + dualScreenLeft
        const top = (height - h) / 2 / systemZoom + dualScreenTop
        const newWindow = window.open(url, title, 
          `
          scrollbars=yes,
          width=${w / systemZoom}, 
          height=${h / systemZoom}, 
          top=${top}, 
          left=${left}
          `
        )
    
        if (window.focus) newWindow.focus();
    }

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

    $('#btn_signInWithGG').addEventListener('click', e => {
        popupCenter({
            url: 'http://localhost:3000/auth/google/',
            title: 'login gg',
            w: 500,
            h: 500
        })
    })


    
})()