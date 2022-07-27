import { Header } from "../../components/Header/Header";
import './addProduct.css';
import { Helmet } from "react-helmet";
import addPhoto from '../../assets/images/add-photo-alternate.svg'
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import api from "../../services/api";


export function Addproduct() {
  const navigate = useNavigate()
  //Inicio da funcionalidade de mostrar a img na tela
  const imgRef = useRef();
  const fileRef = useRef();

  function handleClickphoto(event) {
    const reader = new FileReader();
    fileRef.current.click();
    fileRef.current.addEventListener("change", () => {
      reader.onload = () => {
        imgRef.current.src = reader.result
      }
      reader.readAsDataURL(fileRef.current.files[0]);
    });
  }

  //INICIO DA CONEXÃO COM O BACKEND AXIOS
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState(0);
  // const [image, setImage] = useState('');

  async function handleSubmit(e) {
    await api.post("/product", {
      brand: brand,
      color: color,
      image: "teste",
      name: name,
      price: parseFloat(price)
    }).then(() => {
      console.log("Sucess")
    })
    e.preventDefault();

  }


  return (
    <>
      <Helmet title="Adicionar Produto - Loja Viptech" />
      <Header />
      <div className="container">
        <span > <Link className="linkHome" to="/">Home</Link >  &gt; Adicionar Produtos</span>
        <h1>Adicionar Produto</h1>
        <form action="" onSubmit={() => navigate('/')} >
          <div className="container-input">
            <fieldset className="fieldset-border">
              <legend className="legend-border">Nome do Produto</legend>
              <input onChange={(e) => setName(e.target.value)} placeholder="Digite o nome do produto" type="text" name={name} id="" required />
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border">
              <legend className="legend-border">Marca</legend>
              <input onChange={(e) => setBrand(e.target.value)} placeholder="Digite a marca do produto" type="text" name="{}" id="" required />
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Valor</legend>
              <div className="container-valor">
                <span className="cifrao">R$:</span> <input onChange={(e) => setPrice(e.target.value)} placeholder="000,00" type="number" name="" id="" required />
              </div>
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Cor</legend>
              <select onChange={(e) => setColor(e.target.value)} className="colorOptions" name="" id="" required>
                <option value="" >Selecione a cor</option>
                <option value="Branco">Branco</option>
                <option value="Preto">Preto</option>
                <option value="Azul">Azul</option>
              </select>
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Data</legend>
              <input type="date" name="date" id="" required />
            </fieldset>
          </div>
          <div onClick={handleClickphoto} className="addPhoto">
            <img ref={imgRef} src={addPhoto} alt="Adicionar Foto" />
            <p> Adicionar Foto</p>
          </div>
          <input hidden ref={fileRef} type="file" name="" id="" accept="image/*" />
          <input onClick={handleSubmit} className="btnAddProduct" type="submit" value="Adicionar Produtos" />
        </form>
      </div>
    </>
  );
}