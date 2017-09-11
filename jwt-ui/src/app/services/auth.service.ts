import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class AuthService {

  private authSubject_: BehaviorSubject<any> =
    new BehaviorSubject(null);
  usernameEmitter: Observable<string>;

  constructor() {
    this.usernameEmitter = this.authSubject_.asObservable();
    this.logout();
  }

  login(username: string): void {
    this.setAuthState_(username);
  }

  logout(): void {
    this.setAuthState_(null);
  }

  private setAuthState_(username: string): void {
    this.authSubject_.next(username);
  }
}
