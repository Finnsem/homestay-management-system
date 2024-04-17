import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomestayService } from '../homestay.service';

@Component({
  selector: 'app-update',
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.css']
})
export class UpdateOwnerComponent implements OnInit {
  ownerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    
  });


  constructor(
    private homestayService: HomestayService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHomestayDetails();
  }

  getHomestayDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.homestayService.getOwner(id).subscribe(
      (homestay: any) => {
        this.ownerForm.patchValue({
          name: homestay.name,
          email: homestay.email,
          password: homestay.password,
          
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateowner(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const homestayData = this.ownerForm.value;
    this.homestayService.updateowner(id, homestayData).subscribe(
      () => {
        console.log('Homestay updated successfully');
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
