import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor/proveedor';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';


@Component({
  selector: 'app-registrar-proveedor',
  templateUrl: './registrar-proveedor.component.html',
  styleUrls: ['./registrar-proveedor.component.css']
})
export class RegistrarProveedorComponent implements OnInit {

   proveedor : Proveedor = new Proveedor();
   constructor(private proveedorService:ProveedorService,private router:Router){}
   ngOnInit(): void {}

   guardarProveedor() {
    this.proveedorService.registrarProveedor(this.proveedor).subscribe(dato => {
      console.log(dato);    
      this.irALaListaDeProveedores();
  }, error => console.log(error));
}

irALaListaDeProveedores() {
    this.router.navigate(['/proveedores']);
}

onSubmit() {
    this.guardarProveedor();
}

}
