import { AuthService } from './../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pgr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private r:Router, public authService: AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.r.navigate([''])
  }
  logout(){
    this.authService.logout().subscribe(() =>{
      this.r.navigate(['']);
    })
  }
}
