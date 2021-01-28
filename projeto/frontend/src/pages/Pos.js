import React , { Component } from 'react';
import './Pos.css';
import retangulo from '../img/Rectangle.png';
import plus from '../img/plus.png';

class Pos extends Component{
  render() {
    return( 
      <section id="test2">
        <div className="retangulo">
          <img src={retangulo}/>
          <img id="plus" src={plus}/>
        </div>
        <article>
        <div className="box1">
        </div>
        <div >
          <span className="todo">TODO</span>
        </div>
        </article>

        <article>
        <div className="box2">
          
        </div>
        <div>
          <span className="done">DONE</span>
        </div>
        </article>
      </section>
    );
  }
}

export default Pos;