import { Component, OnInit } from '@angular/core';
import { faPhone, faMapLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faPhone = faPhone;
  faMapLocationDot = faMapLocationDot;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
