import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
productForm!:FormGroup
isInEditMode:boolean=false
  productId!: string;

  constructor(
     private _productservice: ProductService,
    private _router: Router,
    private _routers: ActivatedRoute,
    private _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.createProductForm();
  this.patchProductData();
  }

  createProductForm() {
    this.productForm = new FormGroup({
      pname: new FormControl(null, [Validators.required]),
      pstatus: new FormControl('In-Progress'),
      canReturn: new FormControl(0),
      pimg: new FormControl(null, [Validators.required])
    })
  }

  onProductSubmit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched()
      return
    } else {
      let productObj = {
        ...this.productForm.value,
        pid: Date.now().toString()
      }
      this._productservice.createProduct(productObj)
        .subscribe({
          next: data => {
            this.productForm.reset()
           this._router.navigate(['/product', productObj.pid]);
            this._snackbar.openSuccesssnackbar(data.msg)
          },
          error: err => {
            this._snackbar.openErrorsnackbar(err.msg)
          }
        })
    }
  }

  patchProductData() {
    this.productId = this._routers.snapshot.paramMap.get('pid')!
    if (this.productId) {
      this.isInEditMode = true;
      this._productservice.fetchProductId(this.productId)
        .subscribe({
          next: data => {
            this.productForm.patchValue(data)
            this._snackbar.openSuccesssnackbar(`The Product Data Is successfully Patch!!`)
          },
          error: err => {
            this._snackbar.openErrorsnackbar(err)
          }
        })
    }
  }

  onupdate() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    let upd_obj = {
      ...this.productForm.value,
      pid: this.productId
    };

    this._productservice.updateProduct(upd_obj)
      .subscribe({
        next: data => {
          this.isInEditMode = false;
          this.productForm.reset()
          this._router.navigate(['/product',this.productId]);
          this._snackbar.openSuccesssnackbar(data.msg);
        },
        error: err => {
          this._snackbar.openErrorsnackbar(
            err.error?.msg || 'Product update failed'
          );
        }
      });
  }
}