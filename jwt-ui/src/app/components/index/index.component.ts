import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  username:Observable<string>;

  constructor(private authService:AuthService) {
    this.username=this.authService.usernameEmitter;
  }

  ngOnInit() {
  }

  btnLogin()
  {
    console.log("btnLogin");
    this.authService.login("Isaac");
  }
  btnLogout()
  {
    this.authService.logout();
  }

}
