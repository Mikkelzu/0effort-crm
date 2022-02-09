import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerModel } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
    public customer: CustomerModel = new CustomerModel()
    private customerIdFromParams: number

    constructor(private customerService: CustomerService, private route: ActivatedRoute ) { }

    ngOnInit(): void {

        this.route.params.subscribe(params => {
            this.customerIdFromParams = +params['id']
        })
        this.customerService.getDataById(this.customerIdFromParams).subscribe(data => { 
            this.customer = data
        });

    }

}
