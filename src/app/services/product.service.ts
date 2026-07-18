import { Injectable } from '@angular/core';
import { Iproduct, IresProduct } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productsArr: Array<Iproduct> = [
  {
    pname: 'Samsung Galaxy S24',
    pid: '201',
    pstatus: 'In-Progress',
    canReturn: 1,
    pimg: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'
  },
  {
    pname: 'iPhone 15 Pro',
    pid: '202',
    pstatus: 'Delivered',
    canReturn: 0,
    pimg: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500'
  },
  {
    pname: 'Google Pixel 9',
    pid: '203',
    pstatus: 'Dispatched',
    canReturn: 1,
    pimg: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500'
  },
  {
    pname: 'OnePlus 12',
    pid: '204',
    pstatus: 'Delivered',
    canReturn: 1,
    pimg: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500'
  }
];
  constructor() { }
  
  fetchProductdata(): Observable<Iproduct[]> {
    return of(this.productsArr)
  }

  fetchProductId(id:string):Observable<Iproduct>{
    let productObj=this.productsArr.find(t=>t.pid===id)!
    return of(productObj)
  }

  createProduct(product:Iproduct):Observable<IresProduct<Iproduct>>{
    this.productsArr.push(product)

    return of({
      msg:`The porduct ${product.pname} is added successfully!!`,
      data:product
    })
  }

  removeproduct(product:string):Observable<IresProduct<Iproduct>>{
    let get_index=this.productsArr.findIndex(t=>t.pid===product)
    let products=this.productsArr.splice(get_index,1)
    return of({
      msg:`The Product ${products[0].pname} is removed succefully!!`,
      data:products[0]
    })
  }

  updateProduct(product:Iproduct):Observable<IresProduct<Iproduct>>{
    let get_index=this.productsArr.findIndex(t=>t.pid===product.pid)
    this.productsArr[get_index]=product
    return of({
      msg:`The product ${product.pname} is updated Successfully!!`,
      data:product
    })
  }
}
