import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-admin', 
  templateUrl: './side-bar-admin.component.html',
  styleUrls: ['./side-bar-admin.component.css']
})
export class SideBarAdminComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  } 

  @Output()
  refreshSidebar = new EventEmitter;
  togle : boolean;   
 
  show(){
    this.togle = !this.togle;
  }
  idt ;
  idBe :any;
  logout() {
    this.idBe = localStorage.removeItem("idBe");
    this.idt = localStorage.removeItem("idt");
    this.router.navigate(['/login']);
  }

}
 