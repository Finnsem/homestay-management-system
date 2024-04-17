import { Component, OnInit } from '@angular/core';
import { HomestayService } from '../homestay.service';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { OwnerDetailsComponent } from '../owner-details/owner-details.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})




export class OwnerDashboardComponent implements OnInit {

  constructor(private homestayService: HomestayService, private http: HttpClient, private router:Router, private dialog:MatDialog) { }
  owner: any[] = [];
  ngOnInit(): void {
    this.fetchOwner();
    this.homestayService.getowner().subscribe(data => {
      console.log('Received data:', data);
      this.owner = data;
    });
  }

 

  fetchOwner() {
    this.homestayService.getowner().subscribe(data => {
      console.log('Received data:', data);
      this.owner = data;
    });
  }

  updateowner(id: number): void {
    // Navigate to the update page with the homestay ID as a parameter
    this.router.navigate(['/update-owner', id]);
  }

  deleteowner(id: number) {
    this.homestayService.deleteowner(id).subscribe(() => {
      console.log('Homestay deleted successfully');
      // After deletion, fetch homestays again to update the list
      this.fetchOwner();
    }, error => {
      console.error('Error deleting homestay:', error);
      // Handle error
    });
  }

  openOwnerDetailsDialog(id: number): void {
    if (id !== undefined) {
      this.homestayService.getOwner(id).subscribe(
        (owner: any) => {
          const dialogRef = this.dialog.open(OwnerDetailsComponent, {
            width: '400px',
            data: owner // Pass the homestay data to the dialog
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
