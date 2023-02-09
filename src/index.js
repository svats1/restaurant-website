import './style.css';
import './loadpage';
import breads from './page1';

const btn = document.createElement('button')
const container = document.createElement('div')

btn.addEventListener('click', breads)

const content = document.querySelector('#content')
const body = document.querySelector('body')


btn.textContent = "BREADS"
btn.style.padding = "10px"

body.appendChild(btn)

