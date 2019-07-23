import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  getProducts(){
    return this._http.get('/api/products');
  }
  create(newProduct){
    return this._http.post('/api/products/new', newProduct)
  }
  getOne(id){
    return this._http.get('/api/products/' + id);
  }
  delete(id){
    return this._http.delete('/api/products/' + id);
  }
  update(product){
    return this._http.put('/api/products/' + product._id + '/edit', product)
  }
}
