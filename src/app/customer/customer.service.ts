import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CustomerModel } from '../customer/customer.model';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private apiUrl = 'https://localhost:7144/api/customer/';

    constructor(private http: HttpClient) { }

    public getDataById(id: number) {
        return this.http.get<CustomerModel>(this.apiUrl + id)
    }
}
