import React, { useState } from 'react'
import './products.css'
import imgPro from '../../assets/images/m-direita.svg'
import carrinho from '../../assets/images/carrinho.svg'
import edit from '../../assets/images/edit.svg'
import delet from '../../assets/images/delete.svg'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { Modal, Typography, Box } from '@mui/material'

export function Products({ products }) {
  const [openModal, setOpenModal] = useState(false)
  async function deletProduct() {
    const data = await api.delete(`/product/${products.id}`).then(() => {

    })
    console.log(data);

  }
  return (
    <li className='listProducts'>
      <div className="products">
        <div className="infoProducts">
          <img src={imgPro} alt="" />
          <div className="dataProd">
            <span className='titleProd'>{products.name} </span>
            <span className='marca'>{products.brand}</span>
            <div className="valores">
              <span >R&#36;: </span>
              <span >{products.price}</span>
            </div>
            <span className='color'>{products.color}</span>
          </div>
        </div>
        <div className="crudProd">
          <ul className='actionList'>
            <li > <Link to={`/carrinho/${products.id}`}><img className="iconCar" src={carrinho} alt="Carrinho de Compras" /></Link> </li>
            <li> <Link to={`/editar/${products.id}`}> <img className="iconEdit" src={edit} alt="Icone Editar" /> </Link> </li>
            <li> <button className='btnDelete' onClick={() => { setOpenModal(true) }}> <img src={delet} alt="Icone Deletar" className='iconDelete' /></button> </li>
          </ul>
          <Modal
            className='modal'
            style={{ height: '100%' }}
            open={openModal}
            onClose={() => { setOpenModal(false) }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className='boxModal'>
              Deseja realmente excluir o produto: <strong>{products.name}</strong>
              <div className="buttonsModal">
                <button className='buttonModalNot' onClick={() => setOpenModal(false)}>Não</button>
                <button onClick={deletProduct}>Sim</button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </li>
  );
}