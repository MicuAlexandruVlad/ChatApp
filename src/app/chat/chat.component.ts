import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { User } from '../shared/User';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }
  users :Array<User> = [];

  ngOnInit() {
    var user = new User();
    user.id = "123";
    user.email = "test@test.com";
    user.password = "testpass123";
    user.firstName = "Trevor"
    user.lastName = "Baggins"
    user.firstLetter = user.firstName.split('')[0];
    var user1 = new User();
    user1.id = "1234";
    user1.email = "test@test.com";
    user1.password = "testpass123";
    user1.firstName = "Danielle"
    user1.lastName = "Gant"
    user1.firstLetter = user1.firstName.split('')[0];
    this.users.push(user);
    this.users.push(user1);


    $("#searchInput").focus(() => {
      $("#searchDiv").css("box-shadow", "2px 6px 16px 2px rgba(199, 199, 199, 0.288)");
    });
    $("#searchInput").focusout(() => {
      $("#searchDiv").css("box-shadow", "");
    });
  }

  firstLetter: string = 'B';

  animateOpacityForId(id: string) {
    console.log('animating');
    this.users.forEach(user => {
      if (user.id != id) {
        $("#" + user.id + "indicator").css("opacity", "0");
      }
    });
    $("#" + id + "indicator").css("opacity", "1");
  }
}
