import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../img/quiz.svg'

import './Welcome.css';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  

  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Bem-vindo ao nosso Quiz sobre o Mundo!
          Descubra o fascinante mundo em que vivemos.
          Desafie seu conhecimento com perguntas envolventes.
          Aprenda enquanto se diverte.
          Explore diferentes tópicos relacionados ao mundo.
          Teste seus conhecimentos em geografia, história, ciência e muito mais.
          Convide amigos e familiares para competir.
          </p>
        <p>Clique no botão abaixo para iniciar</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
          Iniciar
        </button>
        <img src={Quiz} alt="Início do Quiz" />

        <div id="contato">
          <h3>Deixe sua opniao sobre o quiz!</h3>
          <p>Gostariamos de saber o que podemos melhorar!</p>
          <form action="">
            <label htmlFor="nome">Nome: </label><br />
            <input type="text" name="nome" id="input" /><br /><br />
            <label htmlFor="email">Email: </label><br />
            <input type="text" name="email" id="input" /><br /><br />
            <label htmlFor="texto">Deixe sua opnião:</label><br />
            <input type="text" name="texto" id="texto" />
          </form>
        </div>
    </div>
  )
}

export default Welcome