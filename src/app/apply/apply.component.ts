import { Component, OnInit } from '@angular/core';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  faArrowRightLong = faArrowRightLong;

  constructor() { }

  ngOnInit(): void {
  }

}
