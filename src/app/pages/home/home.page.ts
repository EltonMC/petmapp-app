import { PetshopService } from './../../services/petshop.service';
import { Component, OnInit } from '@angular/core';
import { Petshop } from '../../models/petshop';
import { Router, NavigationExtras } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: User;
  type: String = 'shower';
  shower: Petshop;
  cough: Petshop;

  constructor(
    private petshopService: PetshopService, 
    private userService: UserService,
    private router: Router) { 
    }

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    try{
      const { data, ...meta } = await this.petshopService.getAll('shower');
      this.shower = data;
    } catch {
      console.log("Err");
    }
    try{
      const { data, ...meta } = await this.petshopService.getAll('cough');
      this.cough = data;
    } catch {
      console.log("Err");
    }
    try{
      this.user = await this.userService.get();
    } catch {
      console.log("Err");
    }
  }

  toPetshop(petshop: Petshop){
    // this.router.navigate(['/petshop'], { state: { petshop } });
    this.router.navigate(['/petshop']).then( () =>{
      this.petshopService.set(petshop);
    });
  }

}
