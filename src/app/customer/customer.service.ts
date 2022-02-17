import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CustomerModel } from '../customer/customer.model';
import { OrderModel } from '../models/order.model';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private apiUrl = 'https://localhost:7144/api/';

    constructor(private http: HttpClient) { }

    public getDataById(customerId: string) {
        return this.http.get<CustomerModel>(this.apiUrl + 'customer/' + customerId)
    }

    public getCustomerOrderData(customerId: string) {
        return this.http.get<OrderModel[]>(this.apiUrl + 'Orders/customer/' + customerId)
    }
}
