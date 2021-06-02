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

  async goto(link : string){
    console.log(link)
    if(link != ''){
      window.open(link, '_blank')
    }
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

  students = [
    {
      'name': 'Shubham',
      'img': './assets/team/students/default.png',
      'role': 'NSS Admin & Group Head',
      'link': ''
    },
    {
      'name': 'Naveen',
      'img': './assets/team/students/default.png',
      'role': 'NSS Admin',
      'link': ''
    },
    {
      'name': 'Agrima',
      'img': './assets/team/students/Agrima.jpg',
      'role': 'NSS Admin & Group Head',
      'link': ''
    },
    {
      'name': 'Shantanu',
      'img': './assets/team/students/default.png',
      'role': 'NSS Admin',
      'link': ''
    },
    {
      'name': 'Venkatesh',
      'img': './assets/team/students/default.png',
      'role': 'NSS Admin',
      'link': ''
    },
    {
      'name': 'Abhishek',
      'img': './assets/team/students/abhishek.jpg',
      'role': 'NSS Admin & Web Developer',
      'link': 'https://iamabhishek.live/'
    },
    {
      'name': 'Deepansh',
      'img': './assets/team/students/default.png',
      'role': 'NSS Admin',
      'link': ''
    },
    {
      'name': 'Mansi',
      'img': './assets/team/students/default.png',
      'role': 'NSS Admin',
      'link': ''
    },
    {
      'name': 'Amay',
      'img': './assets/team/students/default.png',
      'role': 'NSS Admin',
      'link': ''
    },
    {
      'name': 'Tejaswi',
      'img': './assets/team/students/default.png',
      'role': 'NSS Admin',
      'link': ''
    },
    {
      'name': 'Mukund',
      'img': './assets/team/students/default.png',
      'role': 'NSS Admin',
      'link': ''
    },
    {
      'name': 'Haritika',
      'img': './assets/team/students/haritika.jpg',
      'role': 'Web Developer',
      'link': ''
    }
  ]

}
