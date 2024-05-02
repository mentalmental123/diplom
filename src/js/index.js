import { users } from './loginData';
import { refs } from './refs';
import { Report } from 'notiflix';
import { Notiflix } from 'notiflix';
import { login } from './login';
import { logout } from './logout';
import { readExel } from './importExel';

try {
  refs.loginForm.addEventListener('submit', login);
  refs.loginText.addEventListener('click', logout);
} catch (error) {
  console.error(error);
}

console.log(refs.exelInput);

refs.exelInput.addEventListener('change', readExel);
