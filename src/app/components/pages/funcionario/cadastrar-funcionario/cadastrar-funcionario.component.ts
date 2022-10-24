import { Call } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cadastrar-funcionario",
  templateUrl: "./cadastrar-funcionario.component.html",
  styleUrls: ["./cadastrar-funcionario.component.css"],
})
export class CadastrarFuncionarioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  calcular() {
    alert("Olá Mundo!");
    console.log("Olá mundo");
  }
}
