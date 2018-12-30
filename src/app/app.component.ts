import {Component} from '@angular/core';
import {AuthenticationService} from './security/_services/authentication.service';
import {User} from './security/_models/user';
import {Router} from '@angular/router';
import {Role} from './security/_models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentUser: User;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.authService.currentUser.subscribe((user) => {
      if (user) {
        this.currentUser = user[0]; // array format, so we have to filter it out like this
      }
    }, error => console.log(error));
  }

  get isPersoneel() {
    return this.currentUser && this.currentUser.role === Role.Personeel;
  }

  logout() {
    this.currentUser = null;
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
