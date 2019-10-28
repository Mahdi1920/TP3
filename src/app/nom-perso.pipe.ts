import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomPerso'
})
export class NomPersoPipe implements PipeTransform {

  transform(nom : string): string {
    return '*'+nom+'*';
  }

}
