import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product: any;

  constructor(
    private _http: HttpService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      (params: Params) =>{
        console.log('hi', params);
        this._http.getOne(params.id).subscribe((res: any)=>{
          console.log('hello55', res);
          this.product = res['data'][0]; 
          console.log('product name is: ', this.product.name);
        })
      }
    )
  }

  toDelete(){
    this._http.delete(this.product._id).subscribe((res:any)=>{
      console.log('deleted');
      this._router.navigate(['/products']);
      
    })
  }


}
