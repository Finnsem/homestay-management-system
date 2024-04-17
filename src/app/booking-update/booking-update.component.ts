import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomestayService } from '../homestay.service';

@Component({
  selector: 'app-booking-update',
  templateUrl: './booking-update.component.html',
  styleUrls: ['./booking-update.component.css']
})
export class BookingUpdateComponent implements OnInit {
  bookingForm: FormGroup = new FormGroup({
    homestay_id : new FormControl('', Validators.required),
    guest_id : new FormControl('', Validators.required),
    check_in_date: new FormControl('', Validators.required),
    check_out_date: new FormControl('', Validators.required),
    num_guests: new FormControl('', Validators.required)
  });

  constructor(
    private homestayService: HomestayService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getbookingDetails();
  }

  getbookingDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.homestayService.getBooking(id).subscribe(
      (booking: any) => {
        this.bookingForm.patchValue({
          homestay_id : booking.homestay_id ,
          guest_id : booking.guest_id ,
          check_in_date: booking.check_in_date,
          check_out_date: booking.check_out_date,
          num_guests: booking.num_guests
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updatebooking(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const bookingData = this.bookingForm.value;
    this.homestayService.updatebooking(id, bookingData).subscribe(
      () => {
        console.log('booking updated successfully');
        this.router.navigate(['/booking']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
