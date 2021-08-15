const submitClicked = document.getElementById('login');

submitClicked.addEventListener('click', function () {
    const locateEmail = document.getElementById('locate-email');
    const readEmail = locateEmail.value;

    const locatePassword = document.getElementById('locate-password');
    const readPassword = locatePassword.value;
    
    if (readEmail == 'abcd@gh.com' && readPassword == 'abcd@gh.com')
    {
        locateEmail.value = '';
        locatePassword.value = '';
        window.location.href = 'manage.html';
    }

    else 
    {
        window.alert('Try Again!');
    }

});