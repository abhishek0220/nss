import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(num: number): void {
    if(this.domains[num]['section']){
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        data: this.domains[num]
      });
    }
    
  }

  domains = [
    {
      'name': 'Media Group',
      'cover' : 'https://images.unsplash.com/photo-1424223022789-26fd8f34bba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'section':[
        {
          'name':'Journalism Club',
          'desc': `This club is initiated under the NSS (National Social Service) scheme implement at IIT Jammu.
                    The rapid emergence of technology and easy access to the internet has allowed us to create
                    and share content we like with the world. But this came with its demerits. Today there are
                    multiple sources of information ranging from newspaper to television to “Social media.”
                    During this pandemic, it was observed that too much information causes panic attacks and
                    fear-mongering among the public. So, it becomes essential to infer meaning from this vast
                    data and serve it to people as credible sources to know reality and only with minimal data.`,
          'social': {
            'insta': 'https://www.instagram.com/journalism.iitjmu/',
            'wordpress': 'https://journalismiitjammu.wordpress.com/',
            'twitter': 'https://twitter.com/JournalismNss'
          }
        },
        {
          'name':'Be the Change Club',
          'desc': `BeTheChange is a social media initiative of IIT Jammu aiming to spread awareness about
                  the burning Social Issues. Through our posts, we try to provide an alternative perspective
                  and enable people to adopt a sustainable way to react and act towards the Glocal issues.`,
          'social': {
            'insta': 'https://www.instagram.com/bethechangeiitj/',
            'wordpress': 'https://bethechangeiitjammuin.wordpress.com/',
            'twitter': 'https://twitter.com/BeTheChangeIITJ'
          }
        }
      ]
    },
    {
      'name': 'Education Group',
      'cover' : 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      'name': 'Environment Group',
      'cover' : 'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    },
    {
      'name': 'Webiner Group',
      'cover' : 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      'name': 'Health Group',
      'cover' : 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      'name': 'Film Making Group',
      'cover' : 'https://images.unsplash.com/photo-1534939118136-e6f032db3c33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    },
    {
      'name': 'Unnat Bharat Abhiyaan Group',
      'cover' : 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80',
    }
  ]

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      console.log(this.data)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
