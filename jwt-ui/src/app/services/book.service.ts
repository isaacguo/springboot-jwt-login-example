import {Observable} from "rxjs/Observable";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Book} from "../models/Book";
import {AuthHttpService} from "./auth-http.service";
import {Http, Headers, RequestOptions, Response} from "@angular/http";

@Injectable()
export class BookService {

  constructor(private  http: Http, private  authHttpService: AuthHttpService) {

  }

  getBooks(): Observable<Book[]> {
    return this.authHttpService.get("http://localhost:8082/books").map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
