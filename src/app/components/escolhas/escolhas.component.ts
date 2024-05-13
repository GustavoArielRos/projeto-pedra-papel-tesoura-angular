import { Component } from '@angular/core';

@Component({
  selector: 'app-escolhas',
  templateUrl: './escolhas.component.html',
  styleUrl: './escolhas.component.scss'
})
export class EscolhasComponent {
    
    //atributos de pontos
    pontos_usuario: number = 0;
    pontos_oponente: number = 0;

    //atributos dos ícones
    pedra: boolean = false;
    papel: boolean = false;
    tesoura: boolean = false;
    pedrao: boolean = false;
    papelo: boolean = false;
    tesourao: boolean = false;

    //atributos de escolha
    escolha_usuario: string = '';
    escolha_bot: string= '';

    //constructo é primeira coisa que a classe faz toda hora que algo dela é chamado no html
    public escolha(esc: string): void{
      //resetando todos os ícones para falso
      this.pedra = false;
      this.papel = false;
      this.tesoura = false;
      this.pedrao = false;
      this.papelo = false;
      this.tesourao = false;

      //armazenando a escolha do usuário nessa variável
      this.escolha_usuario= esc;
    }

    //função que gera um numero aleatório para gerar a resposta aleatório do oponente
    //também usei essa função para aparecer os ícones e o resultado na tela
    numeroAleatorio( num1 : number, num2 : number): void {

      let numaleatorio: number = 0;
      
      //gerando numero aleatorio
      numaleatorio =  Math.floor(Math.random() * ( num2 - num1 ) + num1);
      
      //agregando a resposta do oponente com o numero aleatorio
      switch(numaleatorio)
      {
          case 1:{
              this.escolha_bot = "pedra";
              break;
          }
          case 2:{
              this.escolha_bot = "papel";
              break;
          }
          case 3:{
              this.escolha_bot = "tesoura";
              break;
          }                
      }
      
      //fazendo os "ifs" para mostrar o que o programa deve fazer em determinada situação
      if((this.escolha_usuario === "pedra") && (this.escolha_bot === "papel") )
      {
        this.pontos_oponente = this.pontos_oponente + 1;
        this.pedra = true;
        this.papelo = true;
      }
      else if((this.escolha_usuario === "pedra") && (this.escolha_bot === "tesoura") )
      {
          this.pontos_usuario = this.pontos_usuario + 1;
          this.pedra = true;
          this.tesourao = true;
      }
      else if((this.escolha_usuario === "pedra") && (this.escolha_bot === "pedra") )
      {
            
            this.pedra = true;
            this.pedrao = true;
      }
      else if((this.escolha_usuario === "papel") && (this.escolha_bot === "pedra") )
      {
            this.pontos_usuario = this.pontos_usuario + 1;
            this.papel = true;
            this.pedrao = true;
      }
      else if((this.escolha_usuario === "papel") && (this.escolha_bot === "tesoura") )
      {
            this.pontos_oponente = this.pontos_oponente + 1;
            this.papel = true;
            this.tesourao = true;
      }
      else if((this.escolha_usuario === "papel") && (this.escolha_bot === "papel") )
      {
              
              this.papel = true;
              this.papelo = true;
      }
      else if((this.escolha_usuario === "tesoura") && (this.escolha_bot === "pedra") )
      {
            this.pontos_oponente = this.pontos_oponente + 1;
            this.tesoura = true;
            this.pedrao = true;
      }
      else if((this.escolha_usuario === "tesoura") && (this.escolha_bot === "papel") )
      {
            this.pontos_usuario = this.pontos_usuario + 1;
            this.tesoura = true;
            this.papelo = true;
      }
      else if((this.escolha_usuario === "tesoura") && (this.escolha_bot === "tesoura") )
      {
              
              this.tesoura = true;
              this.tesourao = true;
      }


    }

    
    

}
