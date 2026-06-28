import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productObj!: Iproduct
  productId!: string
  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _routes: ActivatedRoute,
    private _MAtdialog: MatDialog,
    private _snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    // this.productId = this._routes.snapshot.params['pid']
    this._routes.params.subscribe(params => {
      this.productId = params['pid'];
      this._productService.fetchProductId(this.productId)
        .subscribe({
          next: data => {
            this.productObj = data;
          },
          error: err => {
            console.log(err);
          }
        });

    });
  }

  onRemove() {
    let matconfig = new MatDialogConfig()
    matconfig.data = `Are you sure do you want to remove this product!!`;
    matconfig.disableClose = true;
    matconfig.width = '400px';
    let dialogref = this._MAtdialog.open(GetConfirmComponent, matconfig)
    dialogref.afterClosed()
      .subscribe(res => {
        if (res) {
          this._productService.removeproduct(this.productId)
            .subscribe({
              next: data => {
                this._productService.fetchProductdata()
                  .subscribe(products => {

                    if (products.length > 0) {
                      this._router.navigate(['/product', products[0].pid]);
                    } else {
                      this._router.navigate(['/product']);
                    }

                  });
              },
              error: err => {
                this._snackbar.openErrorsnackbar(err.msg)

              }
            })
        }
        else {
          this._snackbar.openErrorsnackbar(`Product removale cancelled!!`)
          this._router.navigate(['./product',this.productObj.pid])

        }
      })
  }
}