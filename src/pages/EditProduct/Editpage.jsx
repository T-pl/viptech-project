/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Header } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import './editpage.css';
import { Helmet } from "react-helmet";
import addPhoto from '../../assets/images/add-photo-alternate.svg'
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import { Footer } from "../../components/Footer/Footer";

export function Editpage(props) {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  // const [name, setName]
  const parametros = useParams();

  const getProduct = async () => {
    api.get(`/product/${parametros.id}`).then((response) => {
      const { data } = response
      setProducts(data)
      setName(data.name)
      setBrand(data.brand)
      setColor(data.color)
      setPrice(data.price)
    })
    // console.log(data)
  }

  useEffect(() => {
    getProduct();
  }, [])

  const updateProduct = () => {
    console.log({ ...products })
    // PUT request using axios with error handling
    api.put(`/product/${parametros.id}`, { brand, price: Number(price), name, color: 'branco', image: 'boa' })
      .then((response) => {
        console.log(response.data);
        window.location.replace('/')
      })
      .catch(error => {
        console.error('Erro', error);
      });
  }

  return (
    <>
      <Helmet title="Editar Produto - Loja Viptech" />
      <Header />
      <div className="container">
        <span > <Link className="linkHome" to="/">Home</Link >  &gt; Editar Produtos</span>
        <h1>Editar Produto</h1>
        <form>
          <div className="container-input">
            <fieldset className="fieldset-border">
              <legend className="legend-border">Nome do Produto</legend>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite o nome do produto" type="text" name="" id="" required />
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border">
              <legend className="legend-border">Marca</legend>
              <input placeholder="Digite a marca do produto" value={brand} onChange={(e) => setBrand(e.target.value)} type="text" name="" id="" required />
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Valor</legend>
              <div className="container-valor">
                <span>R$:</span> <input placeholder="000,00" type="number" value={price} onChange={(e) => setPrice(e.target.value)} id="" required />
              </div>
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Cor</legend>
              <select onChange={(e) => setColor(e.target.value)} className="colorOptions selectColors" id="colors" >
                <option value="">Selecione a cor</option>
                <option value="branco">Branco</option>
                <option value="preto">Preto</option>
                <option value="azul">Azul</option>
              </select>
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Data de Cadastro</legend>
              <input className="dataInput" type="date" id="" value={products.date} required />
            </fieldset>
          </div>
          <div className="addPhoto">
            <img src={addPhoto} alt="Adicionar Foto" />
            <p> Adicionar Foto</p>
            <input type="file" name="" id="" />
          </div>
          <button onClick={() => updateProduct()} className="btnAddProduct">
            Salvar produto
          </button>
        </form>
      </div>
      <Footer />
    </>
  );

}

