import { Component, OnInit } from '@angular/core';
import { 
  flip,
  hueRotate,
} from '../animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    flip,
    hueRotate,
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
