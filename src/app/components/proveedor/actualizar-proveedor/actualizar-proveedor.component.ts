import { Component,OnInit } from "@angular/core";
import { Proveedor } from "src/app/models/proveedor/proveedor";
import { ProveedorService } from "src/app/servicios/proveedor/proveedor.service";
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrls: ['./actualizar-proveedor.component.css']
})
export class ActualizarProveedorComponent implements OnInit {
  proveedor : Proveedor = new Proveedor();
   constructor(private proveedorService : ProveedorService, private router : Router, private rutaActiva : ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerProveedorPorId(this.rutaActiva.snapshot.params.id);
  }

  private obtenerProveedorPorId(id:number) {
    this.proveedorService.obtenerProveedorPorId(id).subscribe(dato => {
      this.proveedor = dato;
      console.log(this.proveedor.nombre);
    },
    error => console.log(error)
  );
  }

  irALaListaDeProveedores() {
    this.router.navigate(['/proveedores']);
  }

  actualizarProveedor() {
    this.proveedorService.actualizarProveedor(this.proveedor.id,this.proveedor).subscribe(dato => {
      console.log(dato);    
      this.irALaListaDeProveedores();
  }, error => console.log(error));
  }

  onSubmit(){
    console.log('Formulario enviado', this.proveedor);
    this.actualizarProveedor();
  }
}
