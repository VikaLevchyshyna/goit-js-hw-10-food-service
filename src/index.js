'use strict';
import './styles.css';
import menu from './menu.json';
import menuCardTpl from './templates/menu-cards.hbs'; 

const refs = {
    menuCardList: document.querySelector('.js-menu'),
    containerThemeSwitch: document.querySelector('.theme-switch'),
    toolbarThemeSwitch: document.querySelector('#theme-switch-toggle '),
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const cardsMarkup = createMenuCardsMarkup(menu);
refs.menuCardList.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(menu) {
  return menuCardTpl(menu);
}

refs.toolbarThemeSwitch.addEventListener('change', onChangeThemeSwitch);
getTheme();

function onChangeThemeSwitch(evt) {
  const darkTheme = document.body.classList.toggle(Theme.DARK);
  localStorage.setItem('dark', darkTheme);
}

function getTheme() {
  const keyTheme = localStorage.getItem('dark');
  const strTheme = JSON.parse(keyTheme);

  if (strTheme) {
    refs.toolbarThemeSwitch.checked = true;
    document.body.classList.add(Theme.DARK);
  }
}