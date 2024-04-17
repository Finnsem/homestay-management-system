import { Component, OnInit } from '@angular/core';
import { HomestayService } from '../homestay.service';
import { Router } from '@angular/router';
import { HomestayDetailsComponent } from '../homestay-details/homestay-details.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-homestay-list',
  templateUrl: './homestay-list.component.html',
  styleUrls: ['./homestay-list.component.css']
})
export class HomestayListComponent implements OnInit {

  homestays: any[] = []; // Initialize homestays as an empty array

  constructor(private homestayService: HomestayService, private router: Router,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchHomestays(); 
  }

  fetchHomestays() {
    this.homestayService.getHomestays().subscribe(data => {
      console.log('Received data:', data);
      this.homestays = data;
    });
  }

  deleteHomestay(id: number) {
    this.homestayService.deleteHomestay(id).subscribe(() => {
      console.log('Homestay deleted successfully');
      // After deletion, fetch homestays again to update the list
      this.fetchHomestays();
    }, error => {
      console.error('Error deleting homestay:', error);
      // Handle error
    });
  }

  updateHomestay(id: number): void {
    // Navigate to the update page with the homestay ID as a parameter
    this.router.navigate(['/update', id]);
  }
  openHomestayDetailsDialog(id: number): void {
    if (id !== undefined) {
      this.homestayService.getHomestay(id).subscribe(
        (homestay: any) => {
          const dialogRef = this.dialog.open(HomestayDetailsComponent, {
            width: '400px',
            data: homestay // Pass the homestay data to the dialog
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
