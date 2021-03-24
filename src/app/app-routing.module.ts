import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyCreateComponent } from './company/company-create/company-create.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyListComponent } from './company/compnay-list/company-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [    
    { path: '', component: HomeComponent },
    { path: 'companies', component: CompanyListComponent },
    { path: 'companies/create', component: CompanyCreateComponent },
    { path: 'companies/edit', component: CompanyEditComponent },
    //WildCard
    { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
