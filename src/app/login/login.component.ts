import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

    constructor(private fb: FormBuilder) { }

   
    ngOnInit(): void {
    }

    public submit() {
        if (this.form.valid) {
            this.submitEm.emit(this.form.value)
        }
    }

    @Input() error: string | null

    @Output() submitEm = new EventEmitter()

}
