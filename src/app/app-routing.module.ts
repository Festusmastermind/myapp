import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the component for routing ..
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';


// Adding the respective components has an objects in the routes array
const routes: Routes = [
    { path: '', component: HomeComponent },              
    { path: 'list', component: ListComponent },
    { path: 'contact', component: ContactComponent}        
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
