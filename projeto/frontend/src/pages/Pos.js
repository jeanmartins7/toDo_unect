import React , { Component } from 'react';
import './Pos.css';
import retangulo from '../img/Rectangle.png';
import plus from '../img/plus.png';

class Pos extends Component{
  state ={
    inicio:[],
  };
  async componentDidMount(){
    const response = await api.get('envio');
    this.setState({ inicio: response.data});
    
  }
  render() {
    return( 
      <Component>
      <section id="test2">
        {this.state.feed.map(inicio =>(
         <div className="retangulo">
          <img src={retangulo}/>
          <img id="plus" src={plus}/>
        </div>
        <article>
        <div className="box1">
        </div>
        <div >
          <span className="todo">TODO</span>
          <span>{Schema.id}</span>
          <input
            type="id"
            text="todo" 
          />

        </div>
        </article>

        <article>
        <div className="box2">
          
        </div>
        <div>
          <span className="done">DONE</span>
          <input
            type="id"
            texto="aftertodo"
          />
        </div>
        </article>
          ))}
      </section>    
    </Component> 

    );
  }
}

export default Pos;