import {Component} from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'oscar';
  public nameUpper: string = 'OSCAR';
  public fullName: string = 'OsCaR';

  public customDate: Date = new Date();

}
