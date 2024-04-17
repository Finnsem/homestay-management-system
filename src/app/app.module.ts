import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomestayListComponent } from './homestay-list/homestay-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HomestayService } from './homestay.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddComponent } from './add/add.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { HomestayDetailsComponent } from './homestay-details/homestay-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { UpdateOwnerComponent } from './update-owner/update-owner.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { BookingComponent } from './booking/booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingUpdateComponent } from './booking-update/booking-update.component';
import { BookingAddComponent } from './booking-add/booking-add.component';
import { trigger, transition, style, animate } from '@angular/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomestayListComponent,
    BookingFormComponent,
    OwnerDashboardComponent,
    HomeComponent,
    NavbarComponent,
    
    FooterComponent,
         FaqComponent,
         AboutusComponent,
         AddComponent,
         UpdateComponent,
         HomestayDetailsComponent,
         AddOwnerComponent,
         UpdateOwnerComponent,
         OwnerDetailsComponent,
         BookingComponent,
         BookingDetailsComponent,
         BookingUpdateComponent,
         BookingAddComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [HomestayService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
