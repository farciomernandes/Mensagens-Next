import React, { Component } from "react";
import "isomorphic-fetch";

export default class Mensagem extends Component {
  static getInitialProps = async () => {
    const response = await fetch( "https://allugofrases.herokuapp.com/fraseAleatoria");

    return { randomFrase: await response.json() };
  };

  render() {
    return (
    <div className="container">
        <div className="frase">
          <section className="titulo">
          {this.props.randomFrase.frase} <br /> <br/>
          </section>
          <section className="autor">
          Livro: {this.props.randomFrase.livro} <br /> 
          Autor(a): {this.props.randomFrase.autor}
          </section>
          

      </div>

      <footer>
        <a
          href="https://github.com/farciomernandes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright ©2020 by Marcio Fernandes
        </a>
      </footer>


      <style jsx>{`
        .container{
            background: linear-gradient(#696969	, black);
            display: block;
            box-sizing: border-box;
            height: 100vh;
            color: white;
        } 
        .frase{
            position: relative;
            top: 35%;
            display: table;
            box-sizing: border-box;
            aling-items: center;
            justify-content: center;
            text-aling:center;
            font-size:1.2em;
        }
        .titulo{
            font-size: 2em;
            text-aling: center;
            justify-content: center;
            aling-items:center;
            display:flex;
        }
        .autor{           
            width: 98vw;
            display:flex;
            font-size: 1.2em;
        }
        footer{

            position:absolute;
            bottom:35px;
            left: 40%;
        }
        footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
          a {
            color: inherit;
            text-decoration: none;
          }
  
    `}
    </style>

    </div>
    
    
    );
  
  }
}
