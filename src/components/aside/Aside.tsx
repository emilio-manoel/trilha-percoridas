import "./aside.css";

export default function Aside() {
  return (
    <aside>
      <img src="src/assets/professional-challenges.png" alt="dio-imagem" />
      <div className="card-trilha">
        <h2 id="o-que-busco-aprender-titulo">O que busco aprender no futuro</h2>
        <ul>
          <li>uma linguagem back-end o java.</li>
          <li>descobrir melhores IA's e como ultilizaralas do melhor jeito.</li>
          <li>entender melhor o que são frameworks e bibiotecas</li>
          <li>o que ajuda mais aprender no mercado de trabalho.</li>
        </ul>
      </div>
    </aside>
  );
}
