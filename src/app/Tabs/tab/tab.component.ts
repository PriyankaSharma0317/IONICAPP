import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {

  constructor(private router: Router) { }

  openRequestPage() {
    this.router.navigate(['add'])
  }

  ngOnInit() {}

}
