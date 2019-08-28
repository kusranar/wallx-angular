import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-wall',
  templateUrl: './update-wall.component.html',
  styleUrls: ['./update-wall.component.css'] 
})
export class UpdateWallComponent implements OnInit {

  updateAccGroup : FormGroup;
  constructor(private router : Router, private builder : FormBuilder) { }

  ngOnInit() {
    this.updateAccGroup = this.builder.group({
      cashtag: ['', Validators.required]
    })
  }

}
