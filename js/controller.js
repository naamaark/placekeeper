'use srtict'

function onInit() {
    debugger
    renderUserPrefs();
}

function onSetPrefs() {
    var elbgColor = document.querySelector('[name=background-color]');
    var bgColor = elbgColor.value;
    var eltxtColor = document.querySelector('[name=text-color]');
    var txtColor = eltxtColor.value;
    var elBirthday = document.querySelector('[name=text-color]');
    var birthday = elBirthday.value;
    setUserPrefs(bgColor, txtColor, birthday)

}

function renderUserPrefs() {
    debugger
    var elBody = document.querySelector('.home-body');
    var elCard = document.querySelector('.card-text');
    elBody.style.backgroundColor = getBgColor();
    elBody.style.color = getTxtColor();
    elCard.innerText = getAst();

}
