import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './myComponents/about/about.component';
import { TodoComponent } from './myComponents/todo/todo.component';
import { ContactUsComponent } from './myComponents/contact-us/contact-us.component';
import { ApiIntegrationComponent } from './myComponents/api-integration/api-integration.component';

const routes: Routes = [
  { path: '', component: TodoComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactUsComponent},
  { path: 'github', component: ApiIntegrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
