import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../../models/empleado/empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../../../servicios/empleado/empleado.service';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {
  id:number;
  empleado:Empleado;

  constructor(private route:ActivatedRoute, private empleadoServicio:EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      swal(`Detalles del empleado ${this.empleado.nombre}`);
    });
  }

}
