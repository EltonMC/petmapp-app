import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  user: User;

  selectedPath = '';
  pages = [
    {
      icon: 'assets/images/menu/icon-reservation.png',
      title: 'Reservas',
      url: '/reservation-list'
    },
    {
      icon: 'assets/images/menu/icon-pata.png',
      title: 'Meus Pets',
      url: '/pet-list'
    },
    {
      icon: 'assets/images/menu/icon-hearth.png',
      title: 'Apoie a causa animal',
      url: '#'
    },
    {
      icon: 'assets/images/menu/icon-app.png',
      title: 'Sobre o APP',
      url: '/about'
    },
  ];

  constructor(private userService: UserService) {
  }

  async ngOnInit() {
    this.user = await this.userService.get();
  }

}
