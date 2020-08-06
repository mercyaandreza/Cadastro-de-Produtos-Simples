import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router, ActivatedRoute } from '@angular/router'
import {MatPaginatorModule} from '@angular/material/paginator';



@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

  deleteProduct() {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(id).subscribe(() =>
    this.productService.showMessage('Produto Excluído com Sucesso'))
    this.router.navigate(['/products'])
  }
}
