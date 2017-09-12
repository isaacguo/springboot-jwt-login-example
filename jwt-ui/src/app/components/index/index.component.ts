import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AuthService} from "../../services/auth.service";
import {BookService} from "../../services/book.service";
import {Book} from "../../models/Book";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  username: Observable<string>;
  books: Book[];

  constructor(private authService: AuthService, private bookService: BookService) {
    this.username = this.authService.usernameEmitter;

  }

  ngOnInit() {
  }

  btnLogin() {
    console.log("btnLogin");
    //this.authService.login("Isaac");
    this.authService.authenticate("user", "password");
  }

  btnLogout() {
    this.authService.logout();
  }

  btnGetBooks() {
    this.bookService.getBooks().subscribe(next => {
      this.books=<Book[]>next;
      console.log(this.books);
      });
  }
}
