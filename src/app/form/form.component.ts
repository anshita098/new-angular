import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  formdata;
  emailid;
  passwd;
  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
         Validators.required,
         Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("")
   });

  }
  onClickSubmit(data) {this.emailid = data.emailid;}
}
