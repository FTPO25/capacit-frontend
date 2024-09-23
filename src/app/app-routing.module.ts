import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/empleado/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './components/empleado/registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './components/empleado/actualizar-empleado/actualizar-empleado.component';
import { DetalleEmpleadoComponent } from './components/empleado/detalle-empleado/detalle-empleado.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { ListarPedidosComponent } from './components/pedido/listar-pedidos/listar-pedidos.component';
import { ListaProveedoresComponent } from './components/proveedor/lista-proveedores/lista-proveedores.component';
import { DetalleProveedorComponent } from './components/proveedor/detalle-proveedor/detalle-proveedor.component';
import { ActualizarProveedorComponent } from './components/proveedor/actualizar-proveedor/actualizar-proveedor.component';
import { RegistrarProveedorComponent } from './components/proveedor/registrar-proveedor/registrar-proveedor.component';
//aqui se configuran las rutas URL a donde tienen que redireccionar (componentes)
const routes: Routes = [
  {path : 'empleados',component:ListaEmpleadosComponent},
  {path : '',redirectTo:'empleados',pathMatch:'full'},
  {path : 'registrar-empleado',component : RegistrarEmpleadoComponent},
  {path : 'actualizar-empleado/:id',component : ActualizarEmpleadoComponent},
  {path : 'detalle-empleado/:id',component : DetalleEmpleadoComponent},
  {path : 'clientes', component:ListarClientesComponent},
  {path : 'actualizar-cliente/:id', component : ActualizarClienteComponent},
  {path : 'pedidos', component : ListarPedidosComponent},
  {path : 'proveedores', component : ListaProveedoresComponent},
  {path : 'detalle-proveedor/:id' , component :DetalleProveedorComponent},
  {path : 'actualizar-proveedor/:id',component : ActualizarProveedorComponent},
  {path : 'registrar-proveedor' ,component :RegistrarProveedorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
