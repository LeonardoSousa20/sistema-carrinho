import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Table = ({ setQuantidadeTotal, setValueTotal }) => {
  const [produtos, setProdutos] = React.useState([
    {
      img: 'https://i.pinimg.com/originals/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.png',
      nome: 'Nome do produto 1',
      preco: 120,
      quantidade: 1,
    },
    {
      img: 'https://i.pinimg.com/originals/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.png',
      nome: 'Nome do produto 2',
      preco: 120,
      quantidade: 1,
    },
    {
      img: 'https://i.pinimg.com/originals/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.png',
      nome: 'Nome do produto 3',
      preco: 50,
      quantidade: 1,
    },
  ]);

  React.useEffect(() => {
    const inicial = 0;
    const valorTotal = produtos.reduce(
      (acumulador, produto) => acumulador + produto.preco * produto.quantidade,
      inicial,
    );
    setValueTotal(valorTotal);
  }, [produtos]);

  React.useEffect(() => {
    const inicial = 0;
    const quantidadeTotal = produtos.reduce(
      (acumulador, produto) => acumulador + produto.quantidade,
      inicial,
    );
    setQuantidadeTotal(quantidadeTotal);
  }, [produtos]);

  const incrementarQuantidade = (index) => {
    setProdutos(
      produtos.map((produto, i) =>
        i === index
          ? { ...produto, quantidade: produto.quantidade + 1 }
          : produto,
      ),
    );
  };

  const decrementarQuantidade = (index) => {
    setProdutos(
      produtos.map((produto, i) =>
        i === index
          ? { ...produto, quantidade: produto.quantidade - 1 }
          : produto,
      ),
    );
  };

  const removerProduto = (index) => {
    const newProdutos = produtos.filter((produto, i) => i !== index);
    setProdutos(newProdutos);
  };

  const adicionarProduto = () => {
    const produto = {
      img: 'https://i.pinimg.com/originals/a3/6b/42/a36b422bb2bebcbd77bba846b83ddf5d.png',
      nome: 'Novo Produto',
      preco: 120,
      quantidade: 1,
    };
    setProdutos([...produtos, produto]);
  };

  return (
    <div className="w-96 md:w-full md:px-8 font-montserrat">
      <table className="md:w-full">
        <thead className="hidden md:block md:w-full">
          <tr className="md:flex text-sm text-gray-500">
            <th className="md:w-2/12">PRODUTO</th>
            <th className="md:w-2/12"></th>
            <th className="md:w-2/12">PREÇO</th>
            <th className="md:w-2/12">QUANTIDADE</th>
            <th className="md:w-2/12">TOTAL</th>
            <th className="md:w-2/12">REMOVER</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, i) => {
            return (
              <tr className="flex flex-col gap-4 border rounded-lg mt-5 md:flex-row md:items-center md:border-b-1 md:text-sm">
                <td className="flex justify-center md:w-2/12 ">
                  <img
                    className="w-1/4 py-10 md:p-0 md:w-20 md:py-4"
                    src={produto.img}
                    alt=""
                  />
                </td>
                <td className="flex justify-center md:w-2/12">
                  <span className=" font-bold">{produto.nome}</span>
                </td>
                <td className="flex justify-center md:w-2/12">
                  <span>R$ {produto.preco}</span>
                </td>
                <td className="flex justify-center md:w-2/12">
                  <div className="w-1/4 bg-gray-100 flex justify-around rounded-lg py-2 md:w-20">
                    <button onClick={() => decrementarQuantidade(i)}>
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-gray-600"
                      />
                    </button>
                    <span>{produto.quantidade}</span>
                    <button onClick={() => incrementarQuantidade(i)}>
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="text-gray-600"
                      />
                    </button>
                  </div>
                </td>
                <td className="flex justify-center py-4 border-b-1 md:w-2/12 md:border-none  before:content-['Total'] md:before:content-[]">
                  <span>
                    <b>R$ {produto.preco * produto.quantidade}</b>
                  </span>
                </td>
                <td className="flex justify-center items-center py-4 w-full md:w-2/12">
                  <button
                    className="w-3/4 p-3 rounded-lg text-lg flex justify-center items-center gap-4 bg-red-500 text-white after:content-['Remover'] md:after:content-[] md:w-1/5 md:h-8"
                    onClick={() => removerProduto(i)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>

                  <hr />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={adicionarProduto}>Adicionar produto</button>
    </div>
  );
};

export default Table;
