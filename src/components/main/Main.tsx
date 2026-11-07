import './main.css';

export default function Main() {
  return (
    <main>
      <div className="container-principal">
        <h2 id="o-que-ja-aprende-titulo">
          Linguagens, tecnologias atuais e seus benefícios
        </h2>
        <p id="texto-dos-tipos-de-linguagem">
          Visão geral das principais ferramentas utilizadas no desenvolvimento moderno.
        </p>

        <div className="card-trilha" id="react">
          <h3>React: biblioteca atual do meu front-end</h3>
          <ul>
            <li>Componentização e reaproveitamento de código</li>
            <li>Virtual DOM para melhor performance</li>
            <li>Ecossistema rico e comunidade ativa</li>
            <li>Facilidade no gerenciamento de estado</li>
            <li>Foco em interfaces reativas e dinâmicas</li>
          </ul>
        </div>

        <div className="card-trilha" id="nodejs">
          <h3>Node.js: pacote de JavaScript no servidor para back-end</h3>
          <ul>
            <li>JavaScript do lado do servidor (full-stack JS)</li>
            <li>Arquitetura orientada a eventos e assíncrona</li>
            <li>Alto desempenho com o motor V8 do Google</li>
            <li>NPM com milhares de pacotes prontos</li>
            <li>Ideal para APIs rápidas e escaláveis</li>
          </ul>
        </div>

        <div className="card-trilha" id="typescript">
          <h3>TypeScript: superset do JavaScript</h3>
          <ul>
            <li>Tipagem estática para evitar erros em tempo de desenvolvimento</li>
            <li>Melhor autocompletar e suporte na IDE</li>
            <li>Código mais legível e fácil de manter</li>
            <li>Compatibilidade total com JavaScript</li>
            <li>Excelente para projetos em larga escala</li>
          </ul>
        </div>

        <div className="card-trilha" id="mongodb">
          <h3>MongoDB: banco de dados NoSQL</h3>
          <ul>
            <li>Armazenamento flexível baseado em documentos (JSON/BSON)</li>
            <li>Alta escalabilidade horizontal</li>
            <li>Esquema dinâmico (schema-less)</li>
            <li>Consultas rápidas e indexação eficiente</li>
            <li>Ótima integração com Node.js</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
