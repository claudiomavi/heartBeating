const $ = (el) => document.getElementById(el)

const $heart = $('heart')
const $bodyEl = $('body-el')
const $iEl = $('i-el')

$heart.addEventListener('click', darkMode)

// Leer estado darkMode desde el localStorage
let isDarkMode = JSON.parse(localStorage.getItem('darkMode'))

// Estado inicial del darkMode
if (isDarkMode) {
	$bodyEl.classList.add('darkMode')
	$iEl.classList.add('darkMode')
}

function darkMode() {
	if (isDarkMode) {
		$bodyEl.classList.remove('darkMode')
		$iEl.classList.remove('darkMode')
	} else {
		$bodyEl.classList.add('darkMode')
		$iEl.classList.add('darkMode')
	}

	// Cambiar el estado y guardarlo en localStorage
	isDarkMode = !isDarkMode
	localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
}
