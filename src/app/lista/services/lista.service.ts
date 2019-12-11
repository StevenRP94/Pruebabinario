
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  public headers: HttpHeaders = new HttpHeaders({});

  constructor(private http: HttpClient) { }

  verUsuarios(page) {
    const body = {
      filter_title: '',
      filter_param: '',
      order_title: 'first_name',
      order_direction: 'false',
      page_number: page
    };

    // tslint:disable-next-line: max-line-length
    return this.http.get(environment.listUsers +
      `?filter_title=${body.filter_title}&filter_param=${body.filter_param}&order_title=${body.order_title}&order_direction=${body.order_direction}&page_number=${body.page_number}`  );
  }

  verSexo() {
    return this.http.get(environment.getSex);
  }

  updateUsuario(form){
    return this.http.post(environment.updateUser, form);
  }
}
