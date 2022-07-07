import { Header } from "../../components/Header/Header";
import './addProduct.css';

export function Addproduct() {
  return (
    <>
      <Header />
      <div className="container">
        <span >Home &gt; Adicionar Produtos</span>
        <h1>Adicionar Produto</h1>
        <form action="#">
          <label>Nome do Produto</label>
          <input placeholder="Digite o nome do Produto" type="text" name="" id="" />
          <label>Marca</label>
          <input placeholder="Digite a marca do Produto" type="text" name="" id="" />
          <label>Valor</label>
          <input placeholder="Digite o nome do Produto" type="text" name="" id="" />
          <select name="" id="">
            Selecione uma Cor
            <option value="Branco"></option>
            <option value="Preto"></option>
            <option value="Azul"></option>
          </select>
          <input type="date" name="" id="" />

          <button type="submit">Adicionar Produtos</button>
        </form>
      </div>
    </>
  );

}