import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProductItem } from '../../model/product-item.model';
import { ProductStatus } from '../../model/product-status.enum';
import { ProductType } from '../../model/product-type.enum';
import { ProductServiceApi } from '../product-service.api';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceMock extends ProductServiceApi {
  EXAMPLE_DATA: ProductItem[] = [
    {
      id: 0,
      name: 'Austin',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1560420358922,
      totalChapter: 342,
      status: ProductStatus.COMPLETED,
      type: ProductType.RAW,
      categoryList: [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Fantasy' },
      ],
    },
    {
      id: 1,
      name: 'Stevenson',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1453594098945,
      totalChapter: 596,
      status: ProductStatus.STOPPED,
      type: ProductType.TRANSLATED,
      categoryList: [
        { id: 1, name: 'Action' },
      ],
    },
    {
      id: 2,
      name: 'Nancy',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1422534765506,
      totalChapter: 361,
      status: ProductStatus.PUBLISHING,
      type: ProductType.RAW,
      categoryList: [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Fantasy' },
      ],
    },
    {
      id: 3,
      name: 'Mcknight',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1445588010267,
      totalChapter: 532,
      status: ProductStatus.STOPPED,
      type: ProductType.TRANSLATED,
      categoryList: [
        { id: 2, name: 'Fantasy' },
      ],
    },
    {
      id: 4,
      name: 'Goodman',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1463702608885,
      totalChapter: 723,
      status: ProductStatus.PUBLISHING,
      type: ProductType.RAW,
      categoryList: [],
    },
    {
      id: 5,
      name: 'Gabriela',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1598603195975,
      totalChapter: 359,
      status: ProductStatus.PUBLISHING,
      type: ProductType.TRANSLATED,
      categoryList: [],
    },
    {
      id: 6,
      name: 'Rhodes',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1400822635783,
      totalChapter: 956,
      status: ProductStatus.PUBLISHING,
      type: ProductType.TRANSLATED,
      categoryList: [],
    },
    {
      id: 7,
      name: 'Horn',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1497748229239,
      totalChapter: 398,
      status: ProductStatus.STOPPED,
      type: ProductType.CONVERTED,
      categoryList: [],
    },
    {
      id: 8,
      name: 'Ana',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1538088066921,
      totalChapter: 992,
      status: ProductStatus.PUBLISHING,
      type: ProductType.TRANSLATED,
      categoryList: [],
    },
    {
      id: 9,
      name: 'Curtis',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1521993161967,
      totalChapter: 293,
      status: ProductStatus.COMPLETED,
      type: ProductType.RAW,
      categoryList: [],
    },
    {
      id: 10,
      name: 'Bonner',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1482814673455,
      totalChapter: 747,
      status: ProductStatus.STOPPED,
      type: ProductType.CONVERTED,
      categoryList: [],
    },
    {
      id: 11,
      name: 'Isabel',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1542952244170,
      totalChapter: 617,
      status: ProductStatus.COMPLETED,
      type: ProductType.RAW,
      categoryList: [],
    },
    {
      id: 12,
      name: 'Spence',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1445555845662,
      totalChapter: 506,
      status: ProductStatus.PUBLISHING,
      type: ProductType.CONVERTED,
      categoryList: [],
    },
    {
      id: 13,
      name: 'Castro',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1415823848890,
      totalChapter: 375,
      status: ProductStatus.PUBLISHING,
      type: ProductType.RAW,
      categoryList: [],
    },
    {
      id: 14,
      name: 'Eula',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1420392164159,
      totalChapter: 668,
      status: ProductStatus.STOPPED,
      type: ProductType.RAW,
      categoryList: [],
    },
    {
      id: 15,
      name: 'Moss',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1584716463497,
      totalChapter: 536,
      status: ProductStatus.PUBLISHING,
      type: ProductType.RAW,
      categoryList: [],
    },
    {
      id: 16,
      name: 'Brady',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1392951259814,
      totalChapter: 479,
      status: ProductStatus.STOPPED,
      type: ProductType.CONVERTED,
      categoryList: [],
    },
    {
      id: 17,
      name: 'Mccray',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1512876567638,
      totalChapter: 802,
      status: ProductStatus.PUBLISHING,
      type: ProductType.CONVERTED,
      categoryList: [],
    },
    {
      id: 18,
      name: 'Alana',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1428848687488,
      totalChapter: 579,
      status: ProductStatus.PUBLISHING,
      type: ProductType.CONVERTED,
      categoryList: [],
    },
    {
      id: 19,
      name: 'Solomon',
      imageUrl: 'http://placehold.it/32x32',
      publishDate: 1493305139947,
      totalChapter: 276,
      status: ProductStatus.PUBLISHING,
      type: ProductType.CONVERTED,
      categoryList: [],
    },
  ];
  createProduct(product: ProductItem): Observable<ProductItem> {
    this.EXAMPLE_DATA = this.EXAMPLE_DATA.concat({
      ...product,
      id: this.EXAMPLE_DATA[this.EXAMPLE_DATA.length - 1].id + 1,
    });
    return of(this.EXAMPLE_DATA[this.EXAMPLE_DATA.length - 1]).pipe(
      delay(2000)
    );
  }

  getAllProduct(): Observable<ProductItem[]> {
    return of(this.EXAMPLE_DATA).pipe(delay(2000));
  }

  deleteProduct(id: number): Observable<boolean> {
    this.EXAMPLE_DATA = this.EXAMPLE_DATA.filter(
      (product) => product.id !== id
    );
    return of(true);
  }

  updateProduct(product: ProductItem): Observable<ProductItem> {
    const foundIndex = this.EXAMPLE_DATA.findIndex((e) => e.id === product.id);
    console.log(
      'update product: ',
      this.EXAMPLE_DATA.slice().splice(foundIndex, 1)
    );

    if (foundIndex === -1) {
      return throwError('Product Id not found');
    }
    // this.events[foundIndex] = { ...this.events[foundIndex], time: event.time, title: event.title };
    this.EXAMPLE_DATA = this.EXAMPLE_DATA.slice();
    this.EXAMPLE_DATA.splice(foundIndex, 1, product);
    console.log('update event: ', this.EXAMPLE_DATA.slice());
    return of(product).pipe(delay(2000));
  }
}
