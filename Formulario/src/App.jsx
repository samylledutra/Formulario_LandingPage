import React from 'react';
import SecaoOndeComprar from './Secao_OndeComprar/SecaoOndeComprar.jsx';
import SecaoDepoimentos from './Secao_Depoimentos/SecaoDepoimentos.jsx';
import SecaoFAQ from './Secao_FAQ/SecaoFAQ.jsx';
import SecaoForm from './Secao_Form/SecaoForm.jsx';
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
      <SecaoOndeComprar />
      <SecaoDepoimentos />
      <SecaoFAQ/>
      <SecaoForm />

    </div>
  );
}

export default App;