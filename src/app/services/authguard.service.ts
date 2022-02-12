import {  Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service'; @Injectable()

@Injectable()
export class AuthGuardService implements CanActivate {

    private token: any =  localStorage.getItem('token');
    
        constructor(public auth: AuthService, public router: Router) { } canActivate(): boolean {
            if (!this.token) {
                this.router.navigate(['login']);
                return false;
            }
            return true;
        }
}