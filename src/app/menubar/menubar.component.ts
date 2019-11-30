import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  // isUserLoggedin : boolean =false

  showID:string
  showName:string
   name = ''
   id : number
  constructor(
    private route: ActivatedRoute,
    private hardcodedAuthentication:HardcodedAuthenticationService) { }

  ngOnInit() {
     this.name=this.route.snapshot.params['name']
     this.id=this.route.snapshot.params['id']
     console.log(sessionStorage.getItem('authenticateID'));
     this.showID = sessionStorage.getItem('authenticateID');
     this.showName = sessionStorage.getItem('authenticaUser');

    // this.isUserLoggedin = this.hardcodedAuthentication.isUserLogedin(); 
  }

}
