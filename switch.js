function toggleTheme() {
    
    var theme = document.getElementsByTagName('link')[0];

    console.log(theme.getAttribute('href'));
    if (theme.getAttribute('href') == 'CSS/accueil.css') {
        theme.setAttribute('href', 'CSS/accueil2.css');
    } else {
        theme.setAttribute('href', 'CSS/accueil.css');
    }
}
