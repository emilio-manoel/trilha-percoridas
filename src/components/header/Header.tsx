import './Header.css'



export default function Header() {

    return(
    <header>
        <div className="container-imagens-principais">
        <img
          className="imagens-principais"
          src=""
          alt="react"
        />
        <img
          className="imagens-principais"
          src=""
          alt="typescript"
        />
        <img className="imagens-principais" src="" alt="mongo db" />
      </div>
      <h1>trilha percorrida</h1>
      <p id="texto-principal">
        Olá, sou Emilio Manoel sou um programador iniciante, atualmente com um
        aprendizado autoditada, para ter uma comprovação do meu aprendizado
        ultilizo a plataforma DIO, já que possui certificação perante desafios
        de projeto como esse no qual me da um modelo pronto para somente
        adicionar o css, mais decidir fazer do zero apenas mantendo a base (cor
        e alguns imagens), busco me torna na minha visão um programador
        completo, o fullstack e aprender sobre bibiotecas e frameworks também
      </p>
      <a
        href="https://web.dio.me/home"
        id="acessar-dio"
        target="_blank"
        rel="nofollow"
        >acessar dio</a>
    </header>
    )
}