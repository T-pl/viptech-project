/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import './editpage.css';
import { Helmet } from "react-helmet";
import addPhoto from '../../assets/images/add-photo-alternate.svg'
import { Link, useParams, useNavigate } from "react-router-dom";
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
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await api.get(`/product/${parametros.id}`);
      setProducts(data)
      setName(data.name)
      setBrand(data.brand)
      setColor(data.color)
      setPrice(data.price)
      // console.log(data)
    }
    getProduct();
  }, [])

  const updateProduct = () => {
    // PUT request using axios with error handling
    const { data } = api.put(`/product/${parametros.id}`)
      .then(() => {
        console.log(data);
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
        <form action="#">
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
                <span>R$:</span> <input placeholder="000,00" type="number" value={price} onChange={(e) => setPrice(e.target.value)} name="" id="" required />
              </div>
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Cor</legend>
              <select onChange={(e) => setColor(e.target.value)} className="colorOptions selectColors" name="Cores" id="colors" >
                <option value="">Selecione a cor</option>
                <option value="">Branco</option>
                <option value="">Preto</option>
                <option value="">Azul</option>
              </select>
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Data de Cadastro</legend>
              <input className="dataInput" type="date" name="image" id="" value={products.date} required />
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
      <Footer />
    </>
  );

}

