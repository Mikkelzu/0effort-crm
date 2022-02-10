import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserModel } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'https://localhost:7144/api/Auth/login';

    constructor(private http: HttpClient) { }

    public auth(user: UserModel) {
        return this.http.post<UserModel>(this.apiUrl, user)
    }
}