import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { AddAuthorComponent } from './author/add-author/add-author.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'add-book', component: AddBookComponent },
    { path: 'add-author', component: AddAuthorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AddBookComponent, AddAuthorComponent];