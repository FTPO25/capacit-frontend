import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor/proveedor';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent implements OnInit {
  proveedores:Proveedor[];
  proveedoresPaginados: Proveedor[] = [];
  // Variables para la paginación
  totalProveedores: number = 0;
  proveedoresPorPagina: number = 5; // Número de elementos por página
  paginaActual: number = 1;
  totalPaginas: number = 0;
  paginas: number[] = [];
  constructor(private proveedorService : ProveedorService, private router : Router) { }

  ngOnInit(): void {
    this.obtenerProveedores();
  }

  private obtenerProveedores() {
    this.proveedorService.obtenerlistaDeProveedores().subscribe(dato => {
      this.proveedores = dato;
      this.totalProveedores = this.proveedores.length;
      this.totalPaginas = Math.ceil(this.totalProveedores / this.proveedoresPorPagina);
      this.paginas = Array(this.totalPaginas).fill(0).map((x, i) => i + 1); // Generar el array de páginas
      this.cargarProveedoresPaginados();
    });
  }
  cargarProveedoresPaginados() {
    const inicio = (this.paginaActual - 1) * this.proveedoresPorPagina;
    const fin = inicio + this.proveedoresPorPagina;
    this.proveedoresPaginados = this.proveedores.slice(inicio, fin);
  }
  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
    this.cargarProveedoresPaginados();
  }

  actualizarProveedor(id:number) {
    this.router.navigate(['actualizar-proveedor',id]);
  }
  eliminarProveedorPorId(id:number) {
    swal({
      title : "¿Estás seguro?",
      text : "Confirma si deseas eliminar al empleado",
      type : "warning",
      showCancelButton : true,
      confirmButtonColor : '#3085d6',
      cancelButtonColor : '#d33',
      confirmButtonText : "Si, eliminalo",
      cancelButtonText : "No, cancelar",
      confirmButtonClass : "btn btn-success",
      cancelButtonClass : "btn btn-danger",
      buttonsStyling : true
    }).then((result) => {
      if (result.value) {
        this.proveedorService.eliminarProveedor(id).subscribe(dato => {
          console.log(dato);
          this.obtenerProveedores();
          swal(
            'Proveedor eliminado',
            'El proveedor ha sido eliminado con éxito',
            'success'
          )
        });
      }
    })


  }

  verDetallesProveedor(id:number) {
    this.router.navigate(['detalle-proveedor',id]);
  }

}
