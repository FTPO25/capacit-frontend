import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/app/models/proveedor/proveedor';

describe('ProveedorService', () => {
  let service: ProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  obtenerProveedorPorId(id: number) {
    throw new Error('Method not implemented.');
  }
  eliminarProveedor(id: number) {
    throw new Error('Method not implemented.');
  }
  private baseURL = "http://localhost:8080/api/v1/proveedores";

  constructor(private httpClient: HttpClient) { }

  listarProveedores(): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(`${this.baseURL}`);
  }

  obtenerProveedorPorId(id: number): Observable<Proveedor> {
    return this.httpClient.get<Proveedor>(`${this.baseURL}/buscarPorId/${id}`);
  }

}

