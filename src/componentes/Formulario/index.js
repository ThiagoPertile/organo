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

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o enderço da imagem" />
        <ListaSuspensa label="times" itens={times} />
      </form>
    </section>
  );
};

export default Formulario;
