import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
