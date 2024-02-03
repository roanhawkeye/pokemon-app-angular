import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'hectograms'
})
export class HectogramPipe implements PipeTransform{
  transform(value: number = -1, factor: number = 1): number {
    if(value === -1) return 0;
    return (value * 10) / factor;
  }
}
