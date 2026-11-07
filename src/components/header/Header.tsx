import "./Header.css";
import react from "./../../assets/logo-react.png";
import nodejs from "./../../assets/logo-node.js.png";
import ts from "./../../assets/logo-typescript.png";
import mongoDB from "./../../assets/logo-mongoDB.png";

export default function Header() {
  return (
    <header>
      <div className="container-imagens-principais">
        <img className="imagens-principais" src={react} alt="react" />
        <img className="imagens-principais" src={nodejs} alt="node.js" />
        <img className="imagens-principais" src={ts} alt="typescript" />
        <img className="imagens-principais" src={mongoDB} alt="mongo db" />
      </div>
      <h1>trilha percorrida</h1>
      <p id="texto-principal">
        Olá! Sou Emilio Manoel, programador Full Stack e estudante de Análise e Desenvolvimento de Sistemas no IF Baiano - Campus Catu, atualmente no segundo semestre. <br />

        Mesmo em um período inicial da graduação, já desenvolvi o meu Trabalho de Conclusão de Curso (TCC), que no momento está em fase de revisão pelo meu orientador, o Dr. Cayo. O código desse projeto está público e pode ser acessado na seção final deste site. <br/>

        Além do TCC, meu portfólio inclui projetos autorais e desafios práticos propostos pela Digital Innovation One (dio.me), focados no aprendizado contínuo e na demonstração de competências técnicas para recrutadores. <br />

        Este site, inclusive, é uma evolução do projeto "Trilha Percorrida" da DIO. A primeira versão foi construída inteiramente com HTML, CSS e JavaScript vanilla. Agora, ele foi totalmente reescrito em React com Vite. Essa transição reflete a minha evolução profissional, permitindo que eu e os visitantes avaliemos o meu nível de adaptação e os novos conhecimentos adquiridos ao comparar as duas versões.
      </p>
      <a
        href="https://github.com/emilio-manoel/trilha-percoridas/tree/v1"
        className="header_links"
        target="_blank"
        rel="nofollow"
      >
        acessar a primeira versão desse site
      </a>
    </header>
  );
}
