import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    private token: any =  localStorage.getItem('token');

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     //   add auth header with jwt if jwt token is present in localstorage
        const isLoggedIn = this.token
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${this.token}` }
            });
        }

        return next.handle(request);
    }
}