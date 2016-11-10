'use strict';
function template(tpl, data) {
  return tpl.replace(/(?:<|&lt;)%(.+?)%(?:&gt;|>)/g, (match, key) => {
    return data[key];
  });
};

function render(tpl, data) {
	var tpl = template(tpl, data);
	document.body.innerHTML = tpl;
}

function changeLanguage(tpl, data, language) {
	localStorage.setItem('language', language);
	render(tpl, data[language]);
}

function isLanguage(language) {
	return localStorage.getItem('language') === language;
}

var RU = 'ru';
var EN = 'en'

$(document).ready(function() {
	var main = document.getElementById('main').innerHTML;
	var language = localStorage.getItem('language');

	if (!language) {
		localStorage.setItem('language', RU);
		language = RU;
	}

	render(main, DICTIONARY[language]);

	function onChangeLanguage() {
		$('#en').on('click', function() {
			if (isLanguage(RU)) {
				changeLanguage(main, DICTIONARY, EN);
				onChangeLanguage()
			}
		})

		$('#ru').on('click', function() {
			if (isLanguage(EN)) {
				changeLanguage(main, DICTIONARY, RU);
				onChangeLanguage()
			}
		})	
	}
	
	onChangeLanguage();
})