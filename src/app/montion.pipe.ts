import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'montion'
})
export class MontionPipe implements PipeTransform {

  transform(moyenne: string): string{
    if (moyenne>="10" && moyenne<"12")
      return moyenne+' : Montion passable';
      else
    if (moyenne>="12" && moyenne<"14")
      return moyenne+' : Montion Assez Bien'; 
      else
    if (moyenne>="14" && moyenne<"16")
      return moyenne+' : Montion Bien';  
    else 
    return moyenne+' : Montion Très Bien'; 
  }

}
