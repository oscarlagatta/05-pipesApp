import {Pipe, PipeTransform} from "@angular/core";

type CanFly = 'Can Fly' | 'Cannot Fly'
@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): CanFly {
    return value ? 'Can Fly' : 'Cannot Fly'
  }

}
