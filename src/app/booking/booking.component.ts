import { Component, OnInit } from '@angular/core';
import { HomestayService } from '../homestay.service';
import { Router } from '@angular/router';
import { HomestayDetailsComponent } from '../homestay-details/homestay-details.component';
import { MatDialog } from '@angular/material/dialog';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  booking: any[] = []; // Initialize homestays as an empty array
  constructor(private homestayService: HomestayService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchBooking(); 
  }

  fetchBooking() {
    this.homestayService.getbooking().subscribe(data => {
      console.log('Received data:', data);
      this.booking = data;
    });
  }

  deletebooking(id: number) {
    this.homestayService.deletebooking(id).subscribe(() => {
      console.log('Homestay deleted successfully');
      // After deletion, fetch homestays again to update the list
      this.fetchBooking();
    }, error => {
      console.error('Error deleting homestay:', error);
      // Handle error
    });
  }
  updateBooking(id: number): void {
    // Navigate to the update page with the homestay ID as a parameter
    this.router.navigate(['/booking-update', id]);
  }
  openbookingDetailsDialog(id: number): void {
    if (id !== undefined) {
      this.homestayService.getBooking(id).subscribe(
        (booking: any) => {
          const dialogRef = this.dialog.open(BookingDetailsComponent, {
            width: '400px',
            data: booking // Pass the homestay data to the dialog
          });
  
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // You can perform any additional actions here after the dialog is closed
          });
        },
        (error) => {
          console.error(error);
          // Handle error
        }
      );
    }
  }


}
