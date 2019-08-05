import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  User
} from '../shared/User';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import axios from 'axios';
import * as HttpStatus from 'http-status-codes'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient) {

  }

  ngOnInit() {}
  private apiUrl = 'http://192.168.0.19:3000/';

  email: string;
  password: string;
  repeatPassword: string;
  public passwordsNotMatching: string = 'hidden';
  errorMessage: string = 'place_holder';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  user = new User()

  registerUser() {
    if (this.password === this.repeatPassword) {
      this.user.email = this.email;
      this.user.password = this.password;
      this.passwordsNotMatching = 'hidden';
      this.postUser(this.user);
    } else {
      this.passwordsNotMatching = 'visible';
      this.errorMessage = 'Passwords do not match';
      console.log('passwords do not match');
    }
  }

  postUser(user: User) {
    axios.post(this.apiUrl + 'users/register-user', user)
      .then((response) => {
        // handle success
        var status = response.data.status;
        if (status == HttpStatus.CONFLICT) {
          this.passwordsNotMatching = 'visible';
          this.errorMessage = 'Account already exists';
          //alert('Account already exists');
        }
        if (status == HttpStatus.CREATED) {
          this.navigateLogin();
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

  navigateLogin() {
    this.router.navigate(['../login'], { relativeTo: this.route });
  }
}
