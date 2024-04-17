import { Component, OnInit } from '@angular/core';
import { HomestayService } from '../homestay.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {
  successMessage!: string; // 1. Add ! for definite assignment assertion

  constructor(private homestayService: HomestayService) { }

  errorMessage: string = ''; // Initialize errorMessage

  ownerForm = new FormGroup({ // 2. Import FormGroup and correct usage
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  });
  ngOnInit(): void {
  }
  addowner(): void{
    if (this.ownerForm.valid) {
      console.log(this.ownerForm.value);
      this.homestayService.addowner(this.ownerForm.value).subscribe( // 3. Ensure addHomestay returns Observable<any>
        (response: any) => { // 4. Explicitly define types for response and error
          console.log(response);
          this.ownerForm.reset();
          this.successMessage = 'Homestay added successfully';
        },
        (error: any) => { // 4. Explicitly define types for response and error
          console.error(error);
          this.errorMessage = 'Failed to add homestay';
        }
      );
    } else {
      this.errorMessage = 'Please fill out all fields';
    }
  }
  }


