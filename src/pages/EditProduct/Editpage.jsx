import { Header } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import './editpage.css';
import { Helmet } from "react-helmet";
import addPhoto from '../../assets/images/add-photo-alternate.svg'
import { Link } from "react-router-dom";
import api from "../../services/api";

export function Editpage(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await api.get("/product");
      setProducts(data)
    }
    getProduct();
  }, [])
  return (
    <>
      <Helmet title="Editar Produto - Loja Viptech" />
      <Header />
      <div className="container">
        <span > <Link className="linkHome" to="/">Home</Link >  &gt; Editar Produtos</span>
        <h1>Editar Produto</h1>
        <form action="#">
          <div class="container-input">
            <fieldset class="fieldset-border">
              <legend class="legend-border">Nome do Produto</legend>
              <input placeholder="Digite o nome do produto" type="text" name="" id="" required />
            </fieldset>
          </div>
          <div class="container-input">
            <fieldset class="fieldset-border">
              <legend class="legend-border">Marca</legend>
              <input placeholder="Digite a marca do produto" type="text" name="" id="" required />
            </fieldset>
          </div>
          <div class="container-input">
            <fieldset class="fieldset-border fieldset-valor">
              <legend class="legend-border ">Valor</legend>
              <div className="container-valor">
                <span>R$:</span> <input placeholder="000,00" type="number" name="" id="" required />
              </div>
            </fieldset>
          </div>
          <div class="container-input">
            <fieldset class="fieldset-border fieldset-valor">
              <legend class="legend-border ">Cor</legend>
              <select className="colorOptions" name="Cores" id="colors" required>
                <option value="" disabled selected>Selecione a cor</option>
                <option value="branco">Branco</option>
                <option value="preto">Preto</option>
                <option value="azul">Azul</option>
              </select>
            </fieldset>
          </div>
          <div class="container-input">
            <fieldset class="fieldset-border fieldset-valor">
              <legend class="legend-border ">Data de Cadastro</legend>
              <input type="date" name="" id="" value="2022-07-15" required />
            </fieldset>
          </div>
          <div className="addPhoto">
            <img src={addPhoto} alt="Adicionar Foto" />
            <p> Adicionar Foto</p>
            <input type="file" name="" id="" />
          </div>
          <input className="btnAddProduct" type="submit" value="Salvar Produto" />
        </form>
      </div>
    </>
  );

}

