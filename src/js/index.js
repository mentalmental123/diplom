import { users } from './loginData';
import { refs } from './refs';
import { Report } from 'notiflix';
import { Notiflix } from 'notiflix';
import { login } from './login';
import { logout } from './logout';
import readXlsxFile from 'read-excel-file';

refs.loginForm.addEventListener('submit', login);
refs.loginText.addEventListener('click', logout);
console.log(refs.exelInput);

console.log(refs.loginText);

// refs.exelInput.addEventListener('change', readExel);

// function readExel(e) {
//   let file = e.target.files[0];
//   readXlsxFile(file).then(row => {
//     console.log(row);
//   });
// }
