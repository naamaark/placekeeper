'use strict'
var gUserData = _setDefUser();
const KEY = 'userData';
_saveUserPrefsToStorage();

var gAst = [
    'Don\'t worry! all your apps are gonna work today and your designs are the best!',
    'you might wanna consider to change the route of your life, not every answer is found on the internet',
    'Oh wow, looks like your cat catch some bugs!, might want to consider take him to the vet soon'
]

function _saveUserPrefsToStorage() {
    saveToStorage(KEY, gUserData);
}

function setUserPrefs(bgColor, txtColor, birthday) {
    gUserData.bgColor = bgColor;
    gUserData.txtColor = txtColor;
    gUserData.birthday = birthday;
}

function _setDefUser() {
    return {
        bgColor: 'black',
        txtColor: 'blue',
        birthday: null
    }

}

function getBgColor() {
    var user = loadFromStorage(KEY);
    return user.bgColor;
}

function getTxtColor() {
    var user = loadFromStorage(KEY);
    return user.txtColor;
}

function getAst() {
    return gAst[getRandomInt(0, 2)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}