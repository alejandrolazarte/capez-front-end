import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CompanyCreateCommand } from '../../domain/Company';
import { CompanyService } from '../../services/company.service';

@Component({
    selector: 'app-company-create',
    templateUrl: './company-create.component.html'
})
export class CompanyCreateComponent implements OnInit {
    

    constructor(private companyService: CompanyService,
        private location: Location) { }

    ngOnInit(): void {

    }

    save(company: CompanyCreateCommand){        

        this.companyService.create(company).subscribe((id)=>{
            this.location.back();
        });

    }
}
