import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bdtempServiceSpecTs'
})
export class BdtempServiceSpecTsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
