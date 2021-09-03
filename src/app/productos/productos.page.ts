import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private productos=[{
    id:'1',
    titulo:'maruchan',
    imagenURL:'https://jumbo.vteximg.com.br/arquivos/ids/398138/Comida-instantanea-Maruchan-64-g-camaron-picante.jpg?v=637469311518770000'
    ,comentarios:'rica'
  },
  {
    id:'2',
    titulo:'completo',
    imagenURL:'https://finde.latercera.com/wp-content/uploads/2019/02/Completo-Italiano-ok-ok.jpg'
    ,comentarios:'rico'
  }]


  constructor() { }

  ngOnInit() {
  }

}
