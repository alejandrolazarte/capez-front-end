import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyCreateCommand } from '../../domain/Company';

@Component({
    selector: 'app-company-form',
    templateUrl: './company-form.component.html',
    styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

    form: FormGroup;
    
    @Output()
    save: EventEmitter<CompanyCreateCommand> = new  EventEmitter<CompanyCreateCommand>()
    
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            businessName: ['', {
                validators: [Validators.required, Validators.minLength(3)]
            }],
            email: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required]],
            taxId: ['', [Validators.required]]
        })
    }

    public get formControls() {
        return this.form.controls;
    }

    onSubmit() {
        
        if(!this.form.valid){
            return;
        }        
        
        const company = this.form.value as CompanyCreateCommand;

        this.save.emit(company);
    }
}
