import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor/proveedor';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-proveedor',
  templateUrl: './detalle-proveedor.component.html',
  styleUrls: ['./detalle-proveedor.component.css']
})
export class DetalleProveedorComponent implements OnInit {
  id:number;
  proveedor:Proveedor;

  constructor(private route:ActivatedRoute, private proveedorServicio:ProveedorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proveedor = new Proveedor();
    this.proveedorServicio.obtenerProveedorPorId(this.id).subscribe(dato => {
      this.proveedor = dato;
      swal(`Detalles del proveedor ${this.proveedor.nombre}`);
    });
  }
}
