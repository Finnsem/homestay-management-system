import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {


  booking: any; // Define homestay as an input property
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
 
  
  ngOnInit(): void {
    this.booking = this.data; // Assign the data passed to the dialog to homestay
  }
}
