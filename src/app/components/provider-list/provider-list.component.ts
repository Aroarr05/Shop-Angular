import { Component, OnInit } from '@angular/core';
import { ProvidesService } from '../../services/provides.service'; 
import { ProvidersM } from '../../model/provider'; 
import { Providers2 } from '../../model/provider2';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './provider-list.component.html',
  styleUrl: './provider-list.component.css'
})
export class ProviderListComponent implements OnInit {

  items : ProvidersM[] = [];
  items2 : Providers2[]= [];

  constructor(private providerService : ProvidesService){}
  
  ngOnInit(): void {
   this.providerService.getProviders().subscribe( data => {
      this.items = data;
      console.log(data)
   });
   this.providerService.getProviders2().subscribe(data =>{
    this.items2 = data;
    console.log(data);
   })
  }
}