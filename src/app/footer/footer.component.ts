import { Component, OnInit } from '@angular/core';
import { faPhone, faMapLocationDot, faEnvelope, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faPhone = faPhone;
  faMapLocationDot = faMapLocationDot;
  faEnvelope = faEnvelope;
  faArrowRightLong = faArrowRightLong;

  constructor (private modalService: NgbModal) {}



  ngOnInit(): void {
  }

  openLg(content: any) {
    this.modalService.open(content, {size: 'lg' });
  }

}
