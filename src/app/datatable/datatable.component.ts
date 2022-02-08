import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { CustomerModel } from '../customer/customer.model';
import { DatatableService } from './datatable.service';


@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, AfterViewInit, OnDestroy {

    public customers: CustomerModel[] = [];
    destroy$: Subject<boolean> = new Subject<boolean>();

    displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'city', 'postcode'];
    public dataSource = new MatTableDataSource<CustomerModel>(this.customers);

    public clickedRows = new Set<CustomerModel>();
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private datatableService: DatatableService) { }


    ngOnInit(): void {
        this.datatableService.getData().subscribe(data => {
            this.customers = data;
            this.dataSource.data = this.customers;
            });
            
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        // Unsubscribe from the subject
        this.destroy$.unsubscribe();
    }

    public doFilter = (event: any) => {
        
        this.dataSource.filter =event. value.trim().toLocaleLowerCase();
      }

}


const CUSTOMER_DATA: CustomerModel[] = [
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'John', lastName: 'Doe', email: 'john@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },
    { id: 0, firstName: 'Michael', lastName: 'Lindemans', email: 'michael@doe.com', phone: '+49 123456789', address: 'Street 1', city: 'City 1', postcode: '12345' },

]
