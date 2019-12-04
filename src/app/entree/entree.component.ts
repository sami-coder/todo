import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetriveEntreeService } from '../service/retrive-entree.service';

export class entree {
  constructor(
    public id: number,
    public name: string,
    public price: number
  ) { }
}

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css']
})
export class EntreeComponent implements OnInit {

  id: any
  entrees: any
  restoName: any


  constructor(
    private route: ActivatedRoute,
    private retriveEntreeService: RetriveEntreeService,
    private router:Router
    ) { }

  ngOnInit() {
    this.getEntreeagain();
    this.restoName=sessionStorage.getItem("RestoName");

  }

  getEntreeagain() {
    // this.id = this.route.snapshot.params['id'];
    this.id = sessionStorage.getItem('showEntree');
    this.retriveEntreeService.getEntree(this.id).subscribe(data => {
      this.entrees = data;
    });

  }
  removeEntree(entree_id) {
    if(confirm('Are you sure you want to delete this?')){

    this.retriveEntreeService.deleteEntree(entree_id).subscribe(data => {
      console.log(data);
      this.getEntreeagain();
    });
  }
  }
  editEntree(id){
    sessionStorage.setItem('updateEntree',id);
    this.router.navigate(['update-entree']);
  }
  addEntree(){
    this.router.navigate(['add-entree']);
  }

  showRecipe(entreeID, name){
    sessionStorage.setItem('entreeRecipeID',entreeID);
    sessionStorage.setItem('DishName',name);
    this.router.navigate(['recipe']);
  }
}


  //  entrees=[]


  //   if(this.id==1){
  //     this.entrees = [
  //       new entree(1,'Entree 1', 5),
  //       new entree(2,'Entree 2', 5),
  //       new entree(3,'Entree 3', 5),
  //       new entree(4,'Entree 4', 5)
  //     ]
  //   } else if(this.id==2){
  //     this.entrees = [
  //       new entree(1,'Entree 11', 5),
  //       new entree(2,'Entree 22', 5),
  //       new entree(3,'Entree 33', 5),
  //       new entree(4,'Entree 44', 5)
  //     ]
  //   } else if(this.id==3){
  //     this.entrees = [
  //       new entree(1,'Entree 111', 5),
  //       new entree(2,'Entree 222', 5),
  //       new entree(3,'Entree 333', 5),
  //       new entree(4,'Entree 444', 5)
  //     ]
  //   } else if(this.id==4){
  //     this.entrees = [
  //       new entree(1,'Entree 1111', 5),
  //       new entree(2,'Entree 2222', 5),
  //       new entree(3,'Entree 3333', 5),
  //       new entree(4,'Entree 4444', 5)
  //     ]
  //   } else {
  //     this.entrees = [
  //       new entree(0,'Error! No Entree found', 0)
  //     ]
  //   }
  // }