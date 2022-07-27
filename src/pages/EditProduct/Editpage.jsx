/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import './editpage.css';
import { Helmet } from "react-helmet";
import addPhoto from '../../assets/images/add-photo-alternate.svg'
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";

export function Editpage(props) {
  const [products, setProducts] = useState([]);
  // const [name, setName]
  const parametros = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await api.get(`/product/${parametros.id}`);
      setProducts(data)
      // console.log(data)
    }
    getProduct();
  }, [])

  const updateProduct = () => {
    // PUT request using axios with error handling
    const { update } = api.put(`/product/${parametros.id}`)
      .then(() => {
        console.log(update)
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      });
  }

  return (
    <>
      <Helmet title="Editar Produto - Loja Viptech" />
      <Header />
      <div className="container">
        <span > <Link className="linkHome" to="/">Home</Link >  &gt; Editar Produtos</span>
        <h1>Editar Produto</h1>
        <form action="#">
          <div className="container-input">
            <fieldset className="fieldset-border">
              <legend className="legend-border">Nome do Produto</legend>
              <input value={products.name} placeholder="Digite o nome do produto" type="text" name="" id="" required />
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border">
              <legend className="legend-border">Marca</legend>
              <input placeholder="Digite a marca do produto" value={products.brand} type="text" name="" id="" required />
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Valor</legend>
              <div className="container-valor">
                <span>R$:</span> <input placeholder="000,00" type="number" value={products.price} name="" id="" required />
              </div>
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Cor</legend>
              <select {...products.color} className="colorOptions" name="Cores" id="colors" required>
                <option value={products.color} disabled selected>Selecione a cor</option>
                <option value={products.color}>Branco</option>
                <option value={products.color}>Preto</option>
                <option value={products.color}>Azul</option>
              </select>
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Data de Cadastro</legend>
              <input type="date" name="image" id="" value={products.date} required />
            </fieldset>
          </div>
          <div className="addPhoto">
            <img src={addPhoto} alt="Adicionar Foto" />
            <p> Adicionar Foto</p>
            <input type="file" name="" id="" />
          </div>
          <input onClick={updateProduct} className="btnAddProduct" type="submit" value="Salvar Produto" />
        </form>
      </div>
    </>
  );

}

