import React from "react";
import { BiFoodMenu } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import css from "./Secao_ondeComprar.module.css";

const ServiceData = [
  {
    title: "INSTAGRAM",
    description: "Veja e solicite em nosso perfil.",
    icon: <FaInstagram />,
    aosDelay: "300",
  },
  {
    title: "IFOOD",
    description: "Solicite agora pelo iFood!",
    icon: <SiIfood />,
    aosDelay: "500",
  },
  {
    title: "CARDÁPIO VIRTUAL",
    description: "Consulte nosso menu completo",
    icon: <BiFoodMenu />,
    aosDelay: "700",
  },
];

function OndeComprar() {
  return (
    <section>
      <div className={css.bg}>
        <div className={css.container}>
          <h1 className={css.title}>ONDE COMPRAR NOSSOS PUDINS</h1>
          <hr />
          <p className={css.description}>
            Você pode encontrar nossos deliciosos pudins em diversas plataformas e canais de comunicação. Escolha o método que for mais conveniente para você e desfrute de nossos sabores irresistíveis.
          </p>
          <div className={css.cards} data-aos="fade-up" data-aos-delay="300">
            {ServiceData.map((data, index) => (
              <div key={index} className={css.card} data-aos="fade-up" data-aos-delay={data.aosDelay}>
                {data.icon}
                <h2 className={css.cardTitle}>{data.title}</h2>
                <p className={css.cardDescription}>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OndeComprar;
