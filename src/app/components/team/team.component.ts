import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  coord_team = [
    {
      'name': 'Suchismita Roy',
      'role': 'Faculty Incharge',
      'img': './assets/team/coordinators/suchismita.jpg',
      'link': 'https://iitjammu.ac.in/hss_engineering/faculty-list/~suchismitaroy'
    },
    {
      'name': 'Karan Nathwani',
      'role': 'Instructor',
      'img': './assets/team/coordinators/karan.jfif',
      'link': 'https://iitjammu.ac.in/electrical_engineering/faculty-list/~karannathwani'
    },
    {
      'name': 'Gaurav A Bhaduri',
      'role': 'Instructor',
      'img': './assets/team/coordinators/gaurav.jpg',
      'link': 'https://iitjammu.ac.in/chemical-engineering/faculty-list/~gauravabhaduri'
    }
  ]

  admins = [
    {
      'name': 'Naveen',
      'img': './assets/team/students/default.png',
      'link': ''
    },
    {
      'name': 'Abhishek',
      'img': './assets/team/students/abhishek.jpeg',
      'link': ''
    },
    {
      'name': 'Agrima',
      'img': './assets/team/students/Agrima.jpg',
      'link': ''
    },
    {
      'name': 'Deepansh',
      'img': './assets/team/students/default.png',
      'link': ''
    }
  ]

}
