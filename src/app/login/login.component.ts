import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private authenticated: boolean = false;

    public form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    })

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
    ngOnInit(): void {
    }

    public submit() {
        if (this.form.valid) {
            console.log(this.form.value)

            this.authService.auth(this.form.value).subscribe((data: any) => {
                console.log(data)

                if (this.authenticated === false) {
                    localStorage.setItem('token', data.token);
                    this.authenticated = true;
                }

                this.router.navigate(['/dashboard']);

            })
        }
    }

    @Input() error: string | null

}
