import { Injectable } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor/proveedor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  

  private baseURL = "http://localhost:8080/api/v1/proveedores";

  constructor(private httpClient: HttpClient) {  }

  obtenerProveedorPorId(id: number): Observable<Proveedor> {
    return this.httpClient.get<Proveedor>(`${this.baseURL}/${id}`);
  }
  
  eliminarProveedor(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  obtenerlistaDeProveedores():Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(`${this.baseURL}`);
  }
  actualizarProveedor(id: number, proveedor: Proveedor): Observable<Object> {
    // Añadimos un console.log para verificar qué datos se están enviando al servidor
    console.log('Datos enviados al servidor para actualizar:', proveedor);
  
    return this.httpClient.put(`${this.baseURL}/${id}`, proveedor);
  }
  registrarProveedor(proveedor: Proveedor): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, proveedor);
  }
  obtenerProveedoresPaginados(page: number, size: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}?page=${page}&size=${size}`);
  }

   
  
}
