import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  { path: 'nav', component: NavBarComponent,
  children: [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
  ]
},
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: 'nav' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
