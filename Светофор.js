function redCircle(){
    document.getElementById('stop').style.display = 'inline';
    document.getElementById('redalert').style.display = 'inline';

    document.getElementById('wait').style.display = 'none';
    document.getElementById('yellowalert').style.display = 'none';

    document.getElementById('go').style.display = 'none';
    document.getElementById('greenalert').style.display = 'none';
}
function yellowCircle() {
    document.getElementById('wait').style.display = 'inline';
    document.getElementById('yellowalert').style.display = 'inline';

    document.getElementById('stop').style.display = 'none';
    document.getElementById('redalert').style.display = 'none';

    document.getElementById('go').style.display = 'none';
    document.getElementById('greenalert').style.display = 'none';
}
function greenCircle() {
    document.getElementById('go').style.display = 'inline';
    document.getElementById('greenalert').style.display = 'inline';

    document.getElementById('stop').style.display = 'none';
    document.getElementById('redalert').style.display = 'none';

    document.getElementById('wait').style.display = 'none';
    document.getElementById('yellowalert').style.display = 'none';
}