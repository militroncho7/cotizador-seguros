import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import Footer from './components/Footer';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  //spinner
  const [cargando, guadarCargando] = useState(false);

  //Extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Fragment>
      <Contenedor>
        <Header titulo='¡Tu Cotizador de seguros!'/>

        <ContenedorFormulario>
          <Formulario
            guardarResumen={guardarResumen}
            guadarCargando={guadarCargando}
          />

          { cargando ? <Spinner /> : null}
          

          <Resumen
            datos={datos}
          />

          {!cargando ?
            <Resultado
              cotizacion={cotizacion}
            /> : null
          }
          
        </ContenedorFormulario>
      </Contenedor>    

      <Footer />
    </Fragment>
  );
}

export default App;
