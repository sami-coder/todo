import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetriveNotificationService } from '../service/retrive-notification.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  name = ''
  inventories :any

  id : any
  constructor(private route: ActivatedRoute,
    private router: Router,
    private retriveNotification: RetriveNotificationService
    ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['name'])
    this.name=sessionStorage.getItem('authenticaUser');
    this.id=sessionStorage.getItem('authenticateID');
    
    this.retriveNotification.getNotification(this.id).subscribe(data=>{
      this.inventories = data;
    });


    // this.name=this.route.snapshot.params['name']
    // this.id=this.route.snapshot.params['id']
    // sessionStorage.setItem('UserName',this.name);
    // sessionStorage.setItem('UserID',this.id);
  }
  resto(){
    this.router.navigate(['restaurant'])

  }

}
