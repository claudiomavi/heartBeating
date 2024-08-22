const $ = (el) => document.getElementById(el)

const $heart = $('heart')
const $bodyEl = $('body-el')
const $iEl = $('i-el')

$heart.addEventListener('click', darkMode)

function darkMode() {
	$bodyEl.classList.toggle('darkMode')
	$iEl.classList.toggle('darkMode')
}
