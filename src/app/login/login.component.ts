import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  email: string;
  password: string;

  navigateSignUp() {
    this.router.navigate(['../sign-up'], { relativeTo: this.route });
  }

  authenticateUser() {
    console.log(this.email);
  }

}
