import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppleService } from '..//service/apple.service';

@Component({
  selector: 'app-apple-form',
  templateUrl: './apple-form.component.html',
  styleUrls: ['./apple-form.component.css']
})
export class AppleFormComponent implements OnInit {
  profileForm = new FormGroup({
    text: new FormControl(''),
    color: new FormControl(''),
    size: new FormControl(''),
  });
  constructor(private appleService: AppleService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.profileForm.value);

    this.appleService.sentCustom(this.profileForm.controls['text'].value, this.profileForm.controls['color'].value, this.profileForm.controls['size'].value);
  }

}
