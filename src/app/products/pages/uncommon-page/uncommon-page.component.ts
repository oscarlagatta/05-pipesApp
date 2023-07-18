import {Component} from '@angular/core';
import {interval, Observable, tap} from "rxjs";


// properties
// public
// private
// constructor
// methods


@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UnCommonPageComponent {

  // i18n Select
  public name: string = 'Oscar';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  public clients = ['Maria', 'Pedro', 'Fernando', 'Hernan', 'Eduardo', 'Melissa', 'Natalia'];

  // i18nPlural
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'London, UK'
  }
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log(`Tap: ${value}`))
    );

  // KeyValue pipe
  public promiseValue: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
      res('we have data in the promise');
      console.log('we have a promise')

    }, 3500)
  })

  // async pipe

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  deleteClient() {
    this.clients.pop();
  }


}
