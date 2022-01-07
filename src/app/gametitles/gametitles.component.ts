import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gametitles',
  templateUrl: './gametitles.component.html',
  styleUrls: ['./gametitles.component.css']
})
export class GametitlesComponent implements OnInit {
  public game = '';
  constructor() { }

  ngOnInit(): void {
  }

}
