import { Component, OnInit } from '@angular/core';
import { 
  flipInY, 
  navFadeInLeft,
  headerFadeInDown,
  hueRotate,
} from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    flipInY,
    navFadeInLeft,
    headerFadeInDown,
    hueRotate,
  ]
})
export class AppComponent implements OnInit {
  title = 'tan-resume-project';

  ngOnInit(): void {
  }
}
