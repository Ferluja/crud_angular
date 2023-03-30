import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
  public inventario:any = [
    {id:1, nombre:"Pantalon", precio: 250},
    {id:2, nombre:"Chamarra", precio: 500}
  ];

  public formulario:any = {
    id:null,
    nombre:null,
    precio:null
  }
  public seleccionar(articulos:any) : void { 
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre;
    this.formulario.precio = articulos.precio;

  }
  public eliminar(id:number) : void { 
    for(let index = 0; index < this.inventario.length; index++){
      if(this.inventario[index].id == id){
        this.inventario.splice(index, 1);
        alert("Eliminado con exito!!");
        break;
      }
    }
  }
  public agregar() : void {
    let datoNuevo = {
      id: this.formulario.id,
      nombre: this.formulario.nombre,
      precio: this.formulario.precio
    };
    if(this.vacios(datoNuevo)){
        if(!this.idRepetido(this.formulario.id)){
           
          this.inventario.push(datoNuevo);
    
            alert("Agregado con exito!!");
            this.limpiarCampos();
        }else{
            alert('Ingrese un id que no este en la tabla');
        }
    }else{
      alert('Por favor, llene todos los campos');
    }
    

  }
  public editar(id:number) : void {
    let coincidencias:number = 0;
    if(this.vacios(this.formulario)){
      
      for (let index = 0; index < this.inventario.length; index++) {
        if (this.inventario[index].id == id) {
              this.inventario[index].id = this.formulario.id;
              this.inventario[index].nombre = this.formulario.nombre;
              this.inventario[index].precio = this.formulario.precio;
              alert("Se ha modificado con exito!!");
              coincidencias++;
              this.limpiarCampos();
              break;

        }
      }
    }else{
      alert('Por favor, llene todos los campos');
      
    }
    if(coincidencias == 0){
      alert('No se encontro Id, ingrese uno valido');
    }
    
    
  }
  public limpiarCampos():void{
    this.formulario.id = null;
    this.formulario.nombre = null;
    this.formulario.precio = null;
  }
  public vacios(datos:any):boolean{
    if(!Object.values(datos).includes(null)){
      return true;
    }else{
      return false;
    }
    
  }
  public idRepetido(id:number):boolean{
    let idRepetido = this.inventario.find(function(element:any){
      return (element.id == id ? true:false)
    });
    
    return idRepetido;
   }



}
