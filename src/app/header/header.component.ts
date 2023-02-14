import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    items: MenuItem[];

  constructor(){
    this.items = [];
  }

    ngOnInit() {
        this.items = [
            {
                label: 'Usuario',
                items: [{
                        label: 'Acceso', 
                        icon: 'pi pi-fw pi-envelope ,m',
                        items: [
                            {label: 'Email', icon: 'pi pi-fw pi-envelope'},
                            {label: 'Login', icon: 'pi pi-fw pi-check'},
                            {label: 'Logout', icon: 'pi pi-fw pi-times'},
                            {label: 'Register', icon: 'pi pi-user-edit'}
                        ]
                    },
                ]
            }
        ];
    }
}