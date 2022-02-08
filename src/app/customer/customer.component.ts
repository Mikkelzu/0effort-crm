import { Component, OnInit } from '@angular/core';
import { CustomerModel } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
    public customer: CustomerModel = new CustomerModel()

    constructor() { }

    ngOnInit(): void {

        this.customer = {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
            phone: '123-456-7890',
            address: '123 Main St.',
            city: 'Anytown',
            postcode: '12345',
        }
    }
}
