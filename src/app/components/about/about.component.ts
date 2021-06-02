import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    var scroll = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(scroll, {
      activeClass:'active',
      scrollOffset: 100
    });
  }

}
