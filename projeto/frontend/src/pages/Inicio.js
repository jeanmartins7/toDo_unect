import React , { Component } from 'react';
import api from '../services/api';
import {Link} from 'react-router-dom';
import './Inicio.css';
import guardasol from '../img/fxemoji_beachumbrella.png';
import retangulo from '../img/Rectangle.png';
import plus from '../img/plus.png';

class Inicio extends Component{
  state ={
    inicio:[],
  };

  async componentDidMount(){
    const response = await api.get('envio');
    this.setState({ inicio: response.data});
    
  }
  render() {
    return( 
      <section id="test">
        <div className="retangulo">
          <img src={retangulo}/>
          <img id="plus" src={plus}/>
        </div>
        <article>
        <div className="box1">
          <img src={guardasol} alt="guardasol"/> 
          <span id="textoguardasol"> Nada por aqui!</span>
        </div>
        <div >
          <span className="todo">TODO</span>
        </div>
        </article>

        <article>
        <div className="box2">
          <img src={guardasol} alt="guardasol"/>
          <span id="textoguardasol"> Nada por aqui!</span>
        </div>
        <div>
          <span className="done">DONE</span>
        </div>
        </article>  
      </section>
    );
  }
}

export default Inicio;