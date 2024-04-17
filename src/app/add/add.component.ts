import { Component, OnInit } from '@angular/core';
import { HomestayService } from '../homestay.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  successMessage!: string; // 1. Add ! for definite assignment assertion

  constructor(private homestayService: HomestayService) { }

  errorMessage: string = ''; // Initialize errorMessage

  homestayForm = new FormGroup({ // 2. Import FormGroup and correct usage
    'owner_id': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required),
    'price': new FormControl('', Validators.required),
    'rooms_available': new FormControl('', Validators.required)
  });
  ngOnInit(): void {
  }
  addHomestay(): void{
    if (this.homestayForm.valid) {
      console.log(this.homestayForm.value);
      this.homestayService.addHomestay(this.homestayForm.value).subscribe( // 3. Ensure addHomestay returns Observable<any>
        (response: any) => { // 4. Explicitly define types for response and error
          console.log(response);
          this.homestayForm.reset();
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


