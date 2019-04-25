import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {LoginPageModule} from './login-page/login-page.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardPageModule} from './dashboard-page/dashboard-page.module';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {NeedAuthGuard} from './auth.guard';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: '',
    component: LoginPageComponent
  },
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' },
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  }
  // { path: '',
  //   redirectTo: '/books',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    // LoginPageComponent,
    // DashboardPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    LoginPageModule,
    DashboardPageModule
  ],
  providers: [
    NeedAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
