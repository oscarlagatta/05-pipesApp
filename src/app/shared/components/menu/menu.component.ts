import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent {
  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',

        items: [
          {
            label: 'Text and Date',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'No Common',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          }
        ]
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom 1',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          },
        ]

      },

    ];
  }
}
