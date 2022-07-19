import { Header } from "../../components/Header/Header";
import './addProduct.css';
import { Helmet } from "react-helmet";
import addPhoto from '../../assets/images/add-photo-alternate.svg'
import { Link } from "react-router-dom";
import { useRef, useState, useCallback } from "react";
import { useEffect } from "react";
import api from "../../services/api";
// eslint-disable-next-line
export function Addproduct() {

  //Inicio da funcionalidade de mostra a img na tela
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
  const [zip, setZip] = useState("");

  const triggerAPI = useCallback(async () => {
    // Use async await instead of chained promise
    const res = await api.get("http://localhost:3001", { zip: zip });
    console.log(res)
  }, [zip]);

  const handleChange = useCallback((event) => {
    setZip(event.target.value);
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    alert('Hello, world!');
  }

  return (
    <>
      <Helmet title="Adicionar Produto - Loja Viptech" />
      <Header />
      <div className="container">
        <span > <Link className="linkHome" to="/">Home</Link >  &gt; Adicionar Produtos</span>
        <h1>Adicionar Produto</h1>
        <form action="#" onSubmit={handleSubmit}>
          <div className="container-input">
            <fieldset className="fieldset-border">
              <legend className="legend-border">Nome do Produto</legend>
              <input onChange={handleChange} placeholder="Digite o nome do produto" type="text" name="" id="" required />
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border">
              <legend className="legend-border">Marca</legend>
              <input placeholder="Digite a marca do produto" type="text" name="" id="" required />
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Valor</legend>
              <div className="container-valor">
                <span className="cifrao">R$:</span> <input placeholder="000,00" type="number" name="" id="" required />
              </div>
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Cor</legend>
              <select className="colorOptions" name="Cores" id="colors" required>
                <option value="" disabled selected>Selecione a cor</option>
                <option value="branco">Branco</option>
                <option value="preto">Preto</option>
                <option value="azul">Azul</option>
              </select>
            </fieldset>
          </div>
          <div className="container-input">
            <fieldset className="fieldset-border fieldset-valor">
              <legend className="legend-border ">Data de Cadastro</legend>
              <input type="date" name="" id="" required />
            </fieldset>
          </div>
          <div onClick={handleClickphoto} className="addPhoto">
            <img ref={imgRef} src={addPhoto} alt="Adicionar Foto" />
            <p> Adicionar Foto</p>
          </div>
          <input hidden ref={fileRef} type="file" name="" id="" accept="image/*" />
          <input className="btnAddProduct" type="submit" value="Adicionar Produtos" />
        </form>
      </div>
    </>
  );

}