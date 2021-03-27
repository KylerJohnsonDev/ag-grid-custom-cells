import { NgModule, Pipe, PipeTransform } from '@angular/core';

type ConcatType = string | null | undefined;

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(first: ConcatType, second: ConcatType | null): string | null {
    if(!first || !second) return null;

    return `${first} ${second}`;
  }

}

@NgModule({
  declarations: [ConcatPipe],
  exports: [ConcatPipe]
})
export class ConcatPipeModule {}
