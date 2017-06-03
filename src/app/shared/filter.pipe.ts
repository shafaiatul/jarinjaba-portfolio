import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(images: any[], criteria: string): any {
    if(criteria === 'all') {
      return images;
    } else {
      return images.filter(image => image.category === criteria )
    }
  }

}
