import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get currentUser() : string {
    return localStorage.getItem("nick") ?? ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
