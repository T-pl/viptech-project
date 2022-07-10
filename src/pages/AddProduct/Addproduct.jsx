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
          <div class="container-input">
            <fieldset class="fieldset-border">
              <legend class="legend-border">Nome do Produto</legend>
              <input placeholder="Digite o nome do produto" type="text" name="" id="" />
            </fieldset>
          </div>
          <div class="container-input">
            <fieldset class="fieldset-border">
              <legend class="legend-border">Marca</legend>
              <input placeholder="Digite a marca do produto" type="text" name="" id="" />
            </fieldset>
          </div>
          <div class="container-input">
            <fieldset class="fieldset-border fieldset-valor ">
              <legend class="legend-border ">Valor</legend>
              <div className="container-valor">
                <span>R$:</span> <input placeholder="000,00" type="number" name="" id="" />
              </div>
            </fieldset>
          </div>
          <label></label>
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