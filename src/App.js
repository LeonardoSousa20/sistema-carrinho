import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import './tailwind.css';
import React from 'react';
import Table from './components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
/*
? DESAFIO - Shopping Cart:
Você deve desenvolver um carrinho de compras funcional.
Funcionalidades que esperamos que você desenvolva:
* todo - inserção de novos produtos no carrinho
* todo - remoção de produtos já inseridos
* todo - alteração de quantidade de cada item - 
* todo - cálculo do preço total dos itens inseridos
*/

function App() {
  const [total, setTotal] = React.useState(0);
  const [quantidade, setQuantidade] = React.useState(null);
  return (
    <div className="w-full h-screen ">
      <Header />

      <div className=" mt-24 mb-8 text-center ">
        <Title texto="Seu Carrinho" />
      </div>
      <div className="flex flex-col gap-12 justify-center items-center lg:flex-row lg:gap-2">
        {quantidade === 0 ? (
          <Title texto="Carrinho Vazio" />
        ) : (
          <Table setValueTotal={setTotal} setQuantidadeTotal={setQuantidade} />
        )}
        <div className="flex flex-col justify-center items-center border border-gray-200 bg-gray-100 rounded-lg mb-10 w-96 md:w-full lg:w-2/4 lg:mr-8">
          <div className="flex flex-col py-8">
            <div className="mb-10 ">
              <Title texto="Resumo do pedido" />
            </div>
            <div className="flex justify-between py-4 border-b-1">
              <span>Frete:</span>
              <span>
                <b>Gratis</b>
              </span>
            </div>
            <div className="flex justify-between py-4 border-b-1">
              <span>Total de itens :</span>
              <span>
                <b>{quantidade}</b>
              </span>
            </div>
            <div className="flex justify-between py-4 border-b-1">
              <span>Subtotal:</span>
              <span>
                <b>R${total}</b>
              </span>
            </div>
            <div className="flex justify-between py-4 border-b-1">
              <span>Total:</span>
              <span>
                <b>R${total}</b>
              </span>
            </div>
            <div className="flex justify-center mt-4 items-center bg-green-500 gap-4 rounded-lg">
              <button className="flex gap-4 justify-center items-center text-white text-lg p-3">
                <FontAwesomeIcon icon={faCircleCheck} />
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
