import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  title: string;
  date: string;
  img: string;
  desc: string;
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {
      color: '#f006',
      title: 'Food Distribution to Migrant Workers',
      date: 'Lockdown 2020',
      img: './assets/events/food_distribution.jpg',
      desc: `Student Council, IIT Jammu with NSS and Kritash(Social Welfare body) has
      taken the initiative of feeding the laborers who are unable to make the
      arrangements amid the lockdown. The fund is being arranged from
      students by donating the Mess refund days and an equal amount of food is
      being given to the laborers.
      The General Secretary along with other NSS students staying on campus
      are coordinating the arrangements. Along with the food, NSS students are
      spreading awareness regarding the precautions to be taken to fight COVID-
      19.`
    },
    {
      color: 'lightblue',
      title: 'Mansar Lake to MahurGarh Trek',
      date: '25 Jan 2020',
      img: './assets/events/trek.jpg',
      desc: `It is an 8 km long hiking path from Mansar lake deer park to the ruins of
      the MahurGad fort. Although the fort is now destroyed and only the gates
      are remaining, this trek is overwhelmingly beautiful with all the
      surrounding valleys and villages. But sometimes, the beauty of this trail
      gets faded from the litter and garbage spread across it by locals and
      tourists. On Jan 25th, 2020, NSS IIT Jammu undertook the responsibility to
      clean this beautiful trek and restore its natural beauty to make it more
      appealing to tourists. Around 20 students and some faculty members led
      by Dr Suchismita Roy, Dr. Sayantan Mandal and Dr Shantanu Madge
      covered the entire trek in around 8 hours and also picked the litter spread
      around. Encouraged by the students, some locals and tourists also helped
      to pick up the trash. Jay Narayan and Zaheer Abbas of final year took the
      responsibility of logistic arrangement and cleaning the track.`
    },
    {
      color: '#f006',
      title: 'HAM RADIO Workshop',
      date: '15-16 Feb 2020',
      img: '',
      desc: `The department of electrical engineering organised a two-day workshop
      on "HAM Radio" in collaboration with NSS IIT Jammu. The workshop was
      addressed by Mr V. K. Arya, Debashish Das, and Mr VikasVerma, all of them
      being highly renowned and well-known faces in the HAM world The
      workshop saw enthusiastic participation, not only from the students and
      faculty members of IIT Jammu but also from some nearby technical
      colleges. HAM radio, also known as amateur radio, can be used for
      communication across short and long distances without internet and cell
      phone network. They are generally used as a hobby but can also be used
      for communication during a disaster situation when other means of
      communication are disrupted. This workshop aimed to teach students how
      to operate a HAM radio and also to provide knowledge behind its
      development and communication system.`
    },
    {
      color: 'lightblue',
      title: 'Workshop on Fire Safety and First Aid',
      date: '9 Nov 2019',
      img: '',
      desc: `KRITASH, the social welfare club of IIT Jammu organised a workshop on
      fire safety and First Aid to promote the importance of disaster
      management. The workshop was addressed by Mr Sajjan Kumar, ex-fire
      chief, municipal corporation, New Delhi. He informed the students about
      fire safety, how to rescue and the do's and don'ts. Along with the lecture,
      Mr Sajjan also demonstrated how to rescue people trapped in a fire as well
      as how to use fire extinguishers.`
    },
    {
      color: '#f006',
      title: 'Survey at Tanda and Jarri Village',
      date: '7 Nov 2019',
      img: '',
      desc: `Tanda and Jari are among the poorer villages that fall under the Jammu
      district. The village population mostly consists of Scheduled Castes and
      Scheduled Tribes. Most of the villagers are engaged in agriculture activities
      or labourer work. So, NSS IIT Jammu undertook the task of understanding
      the means of income and the living conditions of the villagers. Around 12
      students along with NSS faculty coordinator and UBA Staff went around
      the village interacting with the villagers and knowing about their living
      conditions and understanding the problems faced by them ranging from a
      shortage of water and electricity to shortage of farming area. This survey
      provided the students with an insight into the problems faced and to help
      them develop innovative means to cope up with these shortages.`
    },
    {
      color: 'lightblue',
      title: 'Swachhta Abhiyan',
      date: '2nd Oct 2019',
      img: '',
      desc: `The birthday of Mahatma Gandhi, father of the nation, not only enlightened
      the countrymen about the integrity and solidarity of all the people living in
      the country but also about the importance of cleanliness. Mahatma Gandhi,
      lovingly known as Bapu, always educated people about keeping their
      surroundings clean. Following the footsteps of the great leader, students at
      IIT Jammu took part in a cleanliness campaign called Swachhta Abhiyan
      where around fifty students along with the faculty coordinator and Social
      welfare staff cleaned the crowded and littered Jammu bus stand and
      railway station. It was a full day exercise by the students, and it helped
      encourage the nearby people about the importance of cleanliness, and
      many passengers complimented the students on their effort. NSS IIT
      Jammu always informs people about the importance of cleanliness and
      regularly works toward the same.`
    },
    {
      color: '#f006',
      title: 'NSS Induction Workshop',
      date: '21st September 2019',
      img: '',
      desc: `The National Service Scheme (NSS) was incorporated in IIT Jammu's
      curriculum in the first semester of 2019 – 2020. Dr Jegannathan, Faculty
      coordinator from Central University of Jammu and Mr Sumanta Sarathi
      Sharma, faculty coordinator of NSS, SMVDU enlightened the students about
      the role of NSS in society and how every student can work towards making
      the world a better place to live. Students of The motto of NSS "Not me But
      you" give the insight on the working of NSS. Ms Anil bhat and
      students from Central university Jammu shared their experience with the
      NSS of IIT All the volunteers pledge to do self-less work for society and also
      work toward making people self-sufficient and always working towards
      the betterment of society. Today, IIT Jammu has successfully completed a
      lot of endeavours that keep on motivating not only the students but also
      the citizens to give their part in this venture of improving society.`
    }
  ];

}
