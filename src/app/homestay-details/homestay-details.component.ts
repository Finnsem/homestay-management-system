import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-homestay-details',
  templateUrl: './homestay-details.component.html',
  styleUrls: ['./homestay-details.component.css']
})
export class HomestayDetailsComponent implements OnInit {
  homestay: any; // Define homestay as an input property

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.homestay = this.data; // Assign the data passed to the dialog to homestay
  }

  
}
