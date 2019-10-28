import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mention'
})
export class MentionPipe implements PipeTransform {

  transform(moyenne: string): string{
    if (moyenne>="10" && moyenne<"12")
      return moyenne+' : Mention Passable';
      else
    if (moyenne>="12" && moyenne<"14")
      return moyenne+' : Mention Assez Bien'; 
      else
    if (moyenne>="14" && moyenne<"16")
      return moyenne+' : Mention Bien';  
    else 
    return moyenne+' : Mention Très Bien'; 
  }

}
