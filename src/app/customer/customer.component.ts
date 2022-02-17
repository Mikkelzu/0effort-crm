import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderModel } from '../models/order.model';
import { CustomerModel } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
    public customer: CustomerModel = new CustomerModel()
    public customerOrders: OrderModel[]
    private customerIdFromParams: string

    constructor(private customerService: CustomerService, private route: ActivatedRoute ) { }

    ngOnInit(): void {

        this.route.params.subscribe(params => {
            this.customerIdFromParams = params['id']
        })

        console.log(this.customerIdFromParams)
        this.customerService.getDataById(this.customerIdFromParams).subscribe(data => { 
            this.customer = data
        })

        this.customerService.getCustomerOrderData(this.customerIdFromParams).subscribe(data => { 
            this.customerOrders = data

            console.log(this.customerOrders)
        })
    }

}
