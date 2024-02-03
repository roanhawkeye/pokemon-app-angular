import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'decimeter'
})
export class DecimeterPipe implements PipeTransform{

  transform(value: number | undefined) {
    if(value === undefined) return;
    return value / 10;
  }

}
