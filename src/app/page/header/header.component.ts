import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() currentPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onMenuClick(currentPage: string) {
    this.currentPage.emit(currentPage);
  }
}
