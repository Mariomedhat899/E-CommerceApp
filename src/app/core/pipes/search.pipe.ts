import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../../features/product/models/product';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:product[],searchTerm:string) {

    return products.filter((item)=>item.title.includes(searchTerm));
  }

}
