import { Injectable } from '@angular/core';
import { Iproduct, IresProduct } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productsArr:Array<Iproduct>= [
  {
    pname: 'Dell Inspiron Laptop',
    pid: '201',
    pstatus: 'In-Progress',
    canReturn: 1,
    pimg: 'https://picsum.photos/id/180/300/200'
  },
  {
    pname: 'HP Laser Printer',
    pid: '202',
    pstatus: 'Delivered',
    canReturn: 0,
    pimg: 'https://picsum.photos/id/250/300/200'
  },
  {
    pname: 'Boat Rockerz 550',
    pid: '203',
    pstatus: 'Dispatched',
    canReturn: 1,
    pimg: 'https://picsum.photos/id/20/300/200'
  },
  {
    pname: 'Apple iPad Air',
    pid: '204',
    pstatus: 'In-Progress',
    canReturn: 1,
    pimg: 'https://picsum.photos/id/30/300/200'
  },
  {
    pname: 'Canon EOS Camera',
    pid: '205',
    pstatus: 'Delivered',
    canReturn: 0,
    pimg: 'https://picsum.photos/id/96/300/200'
  },
  {
    pname: 'JBL Bluetooth Speaker',
    pid: '206',
    pstatus: 'Dispatched',
    canReturn: 1,
    pimg: 'https://picsum.photos/id/1080/300/200'
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
