import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../LinstaSuspensa/insdex";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Programacao",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovacao e Gestao",
  ];

  const oaSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={oaSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto label="Imagem" placeholder="Digite o enderço da imagem" />
        <ListaSuspensa label="times" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
