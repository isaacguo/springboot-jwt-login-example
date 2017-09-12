import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {AuthHttpService} from "./auth-http.service";

@Injectable()
export class AuthService {

  private authSubject_: BehaviorSubject<any> =
    new BehaviorSubject(null);
  usernameEmitter: Observable<string>;

  constructor(private http: Http, private authHttpService: AuthHttpService) {
    this.usernameEmitter = this.authSubject_.asObservable();
    this.logout();
  }

  authenticate(username: string, password: string) {
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option
    this.http.post('http://localhost:7890/auth',
      JSON.stringify({username: username, password: password}), options)
      .map((token: Response) => {
        console.log(token.json());
        localStorage.setItem('authToken', token.json().token);
        this.setAuthState_(username);
      }).subscribe({error: e => console.error(e)});
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
