import { Component, OnInit } from '@angular/core';
import { HomestayService } from '../homestay.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.css']
})
export class BookingAddComponent implements OnInit {
  successMessage!: string;
  errorMessage: string = '';
  
  constructor(private homestayService: HomestayService) { }
  
  bookingForm = new FormGroup({
    'homestay_id': new FormControl('', Validators.required),
    'guest_id': new FormControl('', Validators.required),
    'check_in_date': new FormControl('', Validators.required),
    'check_out_date': new FormControl('', Validators.required),
    'num_guests': new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  addBooking(): void {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
      this.homestayService.addBooking(this.bookingForm.value).subscribe(
        (response: any) => {
          console.log(response);
          this.bookingForm.reset();
          this.successMessage = 'Booking added successfully';
        },
        (error: any) => {
          console.error(error);
          this.errorMessage = 'Failed to add booking';
        }
      );
    } else {
      this.errorMessage = 'Please fill out all fields';
    }
  }
}
