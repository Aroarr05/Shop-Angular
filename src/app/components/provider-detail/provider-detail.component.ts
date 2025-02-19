import { Component, OnInit} from '@angular/core';
import { ProvidersM } from '../../model/provider'; 
import { ActivatedRoute } from '@angular/router';
import { ProvidesService } from '../../services/provides.service'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Providers2 } from '../../model/provider2';

@Component({
  selector: 'app-provider-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './provider-detail.component.html',
  styleUrl: './provider-detail.component.css'
})
export class ProviderDetailComponent implements OnInit {

  // almacenamos los datos de un proveedor
  provider?: ProvidersM;
  provider2?: Providers2

  //Pasamos ActivatedRoute para obtener los parámetros
  //Pasamos el servivio ProviderServic para acceder a la información de proveedores
  constructor(private route: ActivatedRoute, private providerService : ProvidesService){}

  //ngOnInit se ejecuta cuando el componente se inicializa 
  ngOnInit(): void {
    //Obtenemos el parámetro de la ruta actual usando ActivatedRoute
    const routeParams = this.route.snapshot.paramMap;
    //Extremos el parámetro 'providerId' de la URL y lo convertimos a un número
    const providerIdFromRoute = Number(routeParams.get('providerId'));
    const providerIdFromRoute2 = Number(routeParams.get('providerId2'));

    //llamamos al servicio para obtener todos los proveedores
    this.providerService.getProviders().subscribe( data => {
      //Buscamos el proveedor cuyo Id coincida con el ID de la ruta
      this.provider = data.find(p => Number(p.id) === providerIdFromRoute);
      //Mostramos los proveedores encontrados en la consola 
      console.log(this.provider);
    })

    this.providerService.getProviders2().subscribe(data =>{
      this.provider= data.find(e=>Number(e.id)===providerIdFromRoute2);
      console.log(this.provider2);
    })
  }

}