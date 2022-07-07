import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="sociais">
          <img src="/imagens/fb.png" alt="logo facebook" />
          <img src="/imagens/tw.png" alt="logo twitter" />
          <img src="/imagens/ig.png" alt="logo instagram" />
        </div>
        <img src="/imagens/logo.png" alt="logo do organo" className="logo" />
        <div className="altor">
          <h3>desenvolvido por</h3>
          <a href="https://beacons.ai/thiagopertile">Thiago Pertile</a>
          <p>
            Em estudo dos Curso de <strong>React</strong> da alura
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
