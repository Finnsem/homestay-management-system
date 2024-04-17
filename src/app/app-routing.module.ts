import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component'; 
// Import your components
import { HomeComponent } from './home/home.component';
import { HomestayListComponent } from './homestay-list/homestay-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { AddComponent } from './add/add.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { UpdateOwnerComponent } from './update-owner/update-owner.component';

import { BookingAddComponent } from './booking-add/booking-add.component';
import { BookingComponent } from './booking/booking.component';
import { BookingUpdateComponent } from './booking-update/booking-update.component';

// Define routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'homestays', component: HomestayListComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'dashboard', component: OwnerDashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'add', component: AddComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'add-owner', component: AddOwnerComponent },
  { path: 'update-owner/:id', component: UpdateOwnerComponent },
  { path: 'add-booking', component: BookingAddComponent },
  // Add more routes as needed
  { path: 'booking-update/:id', component: BookingUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
