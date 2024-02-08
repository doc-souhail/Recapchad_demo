import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-form-recaptcha',
  templateUrl: './form-recaptcha.component.html',
  styleUrls: ['./form-recaptcha.component.css']
})
export class FormRecaptchaComponent implements OnInit {

  aFormGroup: FormGroup = new FormGroup({});
  private subscriptions: Subscription[] = [];
  submitted = false;

  constructor(private formBuilder: FormBuilder){}


  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
     recaptcha: ['', Validators.required]
    }); 
  }

  siteKey : string = "6LdMSGwpAAAAAOVp8yAA9VpArR6hh6vjShGgAC5k";

}
