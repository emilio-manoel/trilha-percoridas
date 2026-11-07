import "./aside.css";
import banner from "./../../assets/aside-banner.png"

export default function Aside() {
  return (
    <aside>
      <img src={banner} alt="banner-aside" />
      <div className="card-trilha">
        <h2 id="o-que-busco-aprender-titulo">O que busco aprender no futuro</h2>
        <ul>
        <li>Pela dominancia no mercado pretendo aprende sql</li>
        <li>docker(cointeiners)</li>
        <li>cibersegurança</li>
        <li>Complementa os meus conhecimentos em Inteligencia artificial</li>
        <li>Boas praticas de codigo para o trabalho em equipe correto</li>
        </ul>
      </div>
    </aside>
  );
}
