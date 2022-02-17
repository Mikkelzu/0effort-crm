import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-appbar',
    templateUrl: './appbar.component.html',
    styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

    private token: any =  localStorage.getItem('token');
    public authed: boolean = this.token ? true : false;

    constructor() {

        console.log("is authed " + this.authed)

    }

    ngOnInit(): void {

    }

}
