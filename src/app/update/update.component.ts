import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomestayService } from '../homestay.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  homestayForm: FormGroup = new FormGroup({
    owner_id: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    rooms_available: new FormControl('', Validators.required)
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
    this.homestayService.getHomestay(id).subscribe(
      (homestay: any) => {
        this.homestayForm.patchValue({
          owner_id: homestay.owner_id,
          address: homestay.address,
          price: homestay.price,
          rooms_available: homestay.rooms_available
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateHomestay(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const homestayData = this.homestayForm.value;
    this.homestayService.updateHomestay(id, homestayData).subscribe(
      () => {
        console.log('Homestay updated successfully');
        this.router.navigate(['/homestays']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
