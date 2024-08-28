import React from 'react';
import Secao_OndeComprar from './Secao_OndeComprar/Secao_ondeComprar.jsx';
import Secao_Depoimentos from './Secao_Depoimentos/Secao_depoimentos.jsx';
import Secao_FAQ from './Secao_FAQ/Secao_FAQ.jsx';
import Secao_Form from './Secao_Form/Secao_Form.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles.css";


function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div>
      <Secao_OndeComprar />
      <Secao_Depoimentos />
      <Secao_FAQ/>
      <Secao_Form />

    </div>
  );
}

export default App;