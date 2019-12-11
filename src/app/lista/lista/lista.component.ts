import { ListaService } from './../services/lista.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  currentPage = 1;
  maxSize: number;
  totalItems: number;
  itemsPerPage: number;

  showLoading: boolean;


  usuarios: any = [];
  editForm: FormGroup;
  modalRef: BsModalRef;
  sexo: any;

  constructor(private lista: ListaService, private modalService: BsModalService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.showLoading = true
    this.mostrarUsuarios();
    this.mostrarSexo();

  }

  mostrarUsuarios() {
    this.lista.verUsuarios(this.currentPage)
      .subscribe(data => {
        console.log(data);
        this.usuarios = data['response']['results'];

        this.totalItems = data['response']['page_info']['count'];
        this.maxSize = data['response']['page_info']['num_pages'];
        this.itemsPerPage = data['response']['page_info']['total_items'];

        this.showLoading = false;

        console.log(this.usuarios);
      }, error => {
        console.log(error);
      });
  }

  cambiodePagina(event: any): void {
    this.currentPage = event.page;
    console.log(event.page);

    this.mostrarUsuarios();
  }

  mostrarSexo() {
    this.lista.verSexo()
      .subscribe(data => {
        console.log(data);

        this.sexo = data['response'];
      }, error => {
        console.log(error);
      });
  }

  get f() {
    return this.editForm.controls;
  }

  initEditForm(info) {

    this.editForm = this.formbuilder.group({
      id: info.id,
      first_name: info.first_name,
      last_name: info.last_name,
      dni_type: info.dni_type.id,
      dni: [info.dni, [Validators.required, Validators.pattern('[0-9]*')]],
      address: info.address,
      cellphone: info.cellphone,
      email: info.email,
      sex: info.sex,
      is_active: info.is_active,
      role: info.role
    //   sex: this.formbuilder.group({
    //       id: info.sex.id,
    //       name: info.sex.name,
    // }),

    });

  }

  editar() {

    let is_Active;
    if (this.editForm.controls.is_active.value === true) {
       is_Active = 1;
    } else {
       is_Active = 0;
    }

    const body = {
      user: {
        'id': this.editForm.controls.id.value,
        'first_name': this.editForm.controls.first_name.value,
        'last_name': this.editForm.controls.last_name.value,
        'dni_type': this.editForm.controls.dni_type.value,
        'dni': this.editForm.controls.dni.value,
        'address': this.editForm.controls.address.value,
        'cellphone': this.editForm.controls.cellphone.value,
        'email': this.editForm.controls.email.value,
        'sex': this.editForm.controls.sex.value
      },
      is_active: is_Active,
      roles: [this.editForm.controls.role.value.id],

    };

    console.log(body);


    this.lista.updateUsuario(body)
      .subscribe(data => {
        console.log(data);
        this.modalRef.hide();
        this.mostrarUsuarios();
      }, error => {
        console.log(error);
      });
  }


  openModal(template: TemplateRef<any>, info) {
    this.initEditForm(info);

    console.log(info);

    this.modalRef = this.modalService.show(template);
  }


}
