import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Company } from '../../domain/Company'
import {CompanyService} from '../../services/company.service'
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-company',
    templateUrl: './company-list.component.html'
})

export class CompanyListComponent implements AfterViewInit {

    interval: any;
    companyList: Company[];
    
    displayedColumns: string[] = ['businessName', 
    'email', 
    'phoneNumber', 
    'taxId',  
    'createdDateAtUtc',
    'actions'];
    resultsLength = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private companyService: CompanyService) { }
    
    ngAfterViewInit(): void {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            return this.companyService.getAll(this.paginator.pageIndex,10)
          }),
          map(data  => {
            this.resultsLength = data.totalItems; 
            return data.results;
          }),
          catchError(() => {
            return observableOf([]);
          })
        ).subscribe(companyList => {
            this.companyList = companyList;
        },(error) => {
            console.log(error);
        });
    }
}


