import { layout } from './layout';
import { users } from './loginData';
import { refs } from './refs';
import { Report } from 'notiflix';
import { Notiflix } from 'notiflix';

// refs.loginForm.addEventListener('submit', login);

export function login(evt) {
  evt.preventDefault();

  let login = evt.target.elements.login.value;
  let password = evt.target.elements.password.value;

  if (password && login) {
    const loginPased = users.find(
      obj => login === obj.username && password === obj.password
    );

    if (loginPased) {
      const role = loginPased.role;
      console.log(refs.loginText.dataset);

      switch (role) {
        case 'administrator':
          refs.loginText.textContent = 'LogOut';
          refs.roleLabel.textContent = 'Сторінка Адміністратора';
          refs.mother.innerHTML = '';
          refs.loginText.dataset.login = 'in';
          console.log('welcome administrator');
          refs.mother.innerHTML = layout.adminPage;
          return;
        case 'economist':
          console.log('welcome economist');

          return;
        case 'ecologist':
          console.log('welcome ecologist');

          return;
        default:
          return;
      }
    }
    Report.init({
      failure: {
        backOverlayColor: 'rgba(255,85,73,0.3)',
      },
    });

    Report.failure(
      'Не вдалося увійти',
      '"Можливо такого користувача ще немає в системі."<br/><br/>',
      'Окей'
    );
    return;
  }
  alert('Заповінть поля!');
}
