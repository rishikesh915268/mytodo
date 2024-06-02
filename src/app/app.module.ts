import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './myComponents/todo/todo.component';
import { TodoItemComponent } from './myComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './myComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './myComponents/about/about.component';
import { ContactUsComponent } from './myComponents/contact-us/contact-us.component';
import { ApiIntegrationComponent } from './myComponents/api-integration/api-integration.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    ContactUsComponent,
    ApiIntegrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
