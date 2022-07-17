import { Header } from "../../components/Header/Header";
import './addProduct.css';
import { Helmet } from "react-helmet";
import addPhoto from '../../assets/images/add-photo-alternate.svg'
import { Link } from "react-router-dom";
import { useRef } from "react";

export function Addproduct() {
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

  return (
    <>
      <Helmet title="Adicionar Produto - Loja Viptech" />
      <Header />
      <div className="container">
        <span > <Link className="linkHome" to="/">Home</Link >  &gt; Adicionar Produtos</span>
        <h1>Adicionar Produto</h1>
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
                <span className="cifrao">R$:</span> <input placeholder="000,00" type="number" name="" id="" required />
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