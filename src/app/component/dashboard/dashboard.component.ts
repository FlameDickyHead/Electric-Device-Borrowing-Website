import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/shared/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  email : string = '';
  password : string = '';
  @ViewChild(MatSidenav)
  sidenav! : MatSidenav;


  constructor(private auth : AuthService , private observer : BreakpointObserver, private router : Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
        if(res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        }else{
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
    });
  }
}
