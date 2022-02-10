import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    public form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    })

    constructor(private fb: FormBuilder, private authService: AuthService) { }

   
    ngOnInit(): void {
    }

    public submit() {
        if (this.form.valid) {
            console.log(this.form.value)

            this.authService.auth(this.form.value).subscribe((data) => {
                console.log(data)
            })
        }
    }

    @Input() error: string | null

}
