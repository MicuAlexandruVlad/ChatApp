import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import * as HttpStatus from 'http-status-codes'
import { User } from '../shared/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  private apiUrl = 'http://192.168.0.19:3000/';

  ngOnInit() {
  }

  email: string;
  password: string;
  errorMessage: string = 'place_holder';
  errorVisibility: string = 'hidden';

  navigateSignUp() {
    this.router.navigate(['../sign-up'], { relativeTo: this.route });
  }

  authenticateUser() {
    var user = new User();
    user.email = this.email;
    user.password = this.password;
    console.log('auth user');

    axios.post(this.apiUrl + 'users/auth-user', user)
      .then((response) => {
        // handle success
        var status = response.data.status;
        if (status == HttpStatus.NOT_FOUND) {
          this.errorVisibility = 'visible';
          this.errorMessage = 'Account does not exist';
          //alert('Account already exists');
        }
        if (status == HttpStatus.UNAUTHORIZED) {
          this.errorVisibility = 'visible';
          this.errorMessage = 'Email or password are wrong';
        }
        if (status == HttpStatus.OK) {
          // nav somewhere
          alert('Authenticated');
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

}
