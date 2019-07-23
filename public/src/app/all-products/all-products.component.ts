import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:any = [];

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this._http.getProducts().subscribe((res:any)=>{
      console.log(res);
      this.products = res.data;
    })
  }

  toEdit(id){
    this._router.navigate(['/products/' + id + '/edit']);
  }
  toDetails(id){
    this._router.navigate(['/products/' + id]);
    
  }

}
