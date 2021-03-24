import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Company, CompanyCreateCommand } from '../domain/Company'
import { Api } from '../helpers/api';
import { PagedList } from '../domain/paged-list'


@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    
    readonly url = 'companies'

    constructor(private http: HttpClient) { }

    public create(companyCreateCommand: CompanyCreateCommand):  Observable<number> {
        return this.http.post<number>(Api.CreateUrl(`${this.url}/create`), companyCreateCommand);
    }

    public getAll(pageNumber: number, pageSize: number) : Observable<PagedList<Company>>   {
        return this.http.get<PagedList<Company>>(Api.CreateUrl(`${this.url}/${pageNumber}/${pageSize}`));
    }
}
