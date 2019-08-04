import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  navigateSignUp() {
    this.router.navigate(['../sign-up'], { relativeTo: this.route });
  }

  navigateLogin() {
    this.router.navigate(['../login'], { relativeTo: this.route });
  }

}
