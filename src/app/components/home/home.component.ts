import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    var slider = document.querySelectorAll('.slider');
    var instances = M.Slider.init(slider, {
      indicators: false,
      height: 550
    });
    var carousel = document.querySelectorAll('.carousel.carousel-slider');
    M.Carousel.init(carousel, {
      fullWidth: true,
      indicators: true
    });
  }

  carousel = [
    {
      'name': 'Serving food to Construction Workers',
      'desc': `Student Council, IIT Jammu with NSS and Kritash(Social Welfare body) has
              taken the initiative of feeding the laborers who are unable to make the
              arrangements amid the lockdown. Along with the food, NSS students are
              spreading awareness regarding the precautions to be taken to fight COVID-19.`,
      'img': './assets/food_serving.jpg',
      'tags': '#help #covid19 #pandemic'
    },
    {
      'name': 'Trek to Mahor Garh',
      'desc': `It is an 8 km long hiking path from Mansar lake deer park to the ruins of
                the Mahur Garh fort. On Jan 25th, 2020, NSS IIT Jammu undertook the
                responsibility to clean this beautiful trek and restore its natural beauty
                to make it more appealing to tourists. Around 20 students and some faculty
                members led by Dr Suchismita Roy, covered the entire trek in around 8 hours
                and also picked the litter spread around.`,
      'img': './assets/cover_image.jpg',
      'tags': '#Savenature #NSS #greenlife #cleanliness #tourism'
    },
    {
      'name': 'Cloth Donation Drive',
      'desc': `Students donated cloths to the less privilaged members of Indian Society,
                So as to boost equality and help those in need.`,
      'img': './assets/cloth_donation_drive.jpg',
      'tags': ' #clothdonation #equality #help #righttoclothing'
    },
    {
      'name': 'Cleanliness Drive',
      'desc': `On the occasion of Gandhi jayanti,students of IIT Jammu went to Jammu Tavi
              Railway station and bus stand to honor the Swachh Bharat Abhiyaan drive
              started by our honorable prime minister Narendra modi. NSS IIT Jammu always
              informs people about the importance of cleanliness and regularly works for
              the same`,
      'img': './assets/cleanlinessdrive.jpg',
      'tags': '#clean #swachhBharat #IITjammu #cleanlinessdrive #onesteptowardsgreenfuture'
    }
  ]

}
