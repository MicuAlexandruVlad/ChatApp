import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  navigateHome() {
    this.router.navigate(['./welcome'], { relativeTo: this.route });
  }

  navigateSignUp() {
    this.router.navigate(['./sign-up'], { relativeTo: this.route });
  }

  navigateLogin() {
    this.router.navigate(['./login'], { relativeTo: this.route });
  }
}
