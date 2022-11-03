import { HttpClient } from "@angular/common/http";
import { Call } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Funcionario } from "src/app/models/funcionario";

@Component({
  selector: "app-cadastrar-funcionario",
  templateUrl: "./cadastrar-funcionario.component.html",
  styleUrls: ["./cadastrar-funcionario.component.css"],
})
export class CadastrarFuncionarioComponent implements OnInit {
  nome!: string;
  cpf!: string;
  soma!: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let funcionario: Funcionario = {
      nome: this.nome,
      cpf: this.cpf,
      salario: 1500,
      email: "a@a.com",
      nascimento: "2022-10-27",
      criadoEm: "",
    };

    this.http
      .post<Funcionario>(
        "https://localhost:5001/api/funcionario/cadastrar",
        funcionario
      )

      //Executar a requisição
      .subscribe({
        next: (funcionario) => {
          //Executamos o que for necessário quando a requisição for bem sucedida
          console.log("Gravamos um funcionário", funcionario);
        },
        error: (error) => {
          //Executa o que for necessario quando a requisição for mal sucedida
          console.log("Deu erro", error);
        },
      });
  }
}
