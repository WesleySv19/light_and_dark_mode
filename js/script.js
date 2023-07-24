const chageThemeBtn = document.querySelector('#change_theme')

chageThemeBtn.addEventListener('change', function() {
    document.body.classList.toggle('dark')
})