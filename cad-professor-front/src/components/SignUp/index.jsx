import React, { useState } from 'react';
import './style.css';
import { BsPersonFill } from 'react-icons/bs';
import { axiosInstance } from '../../services/axiosInstance';

function SignUp() {
  const [nome, setNome] = useState('');
  const [nif, setNif] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleFileChange = (event)  => {
    const file = event.target.files[0];
    if (file) {
      setImagem(file);
    }
  };

  const handleSubmit = async () => {
    // Validação dos campos
    if (!nome.trim() || !nif.trim() || !imagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }


    const formData = new FormData();
    formData.append('name', nome);
    formData.append('nif', nif);
    formData.append('image', imagem);

    try {
      const resposta = await axiosInstance.post('teacher', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Token 75d305fe4156ccd45d3abd0ce940e492d8b9b96b'
        },
      });
  
      console.log('Resposta da API:', resposta.data);
      alert('Cadastro realizado com sucesso!');
    } catch (erro) {
      console.error('Erro ao enviar dados para a API:', erro.response);
    }

    setNome('');
    setNif('');
    setImagem(null);


  };

  return (
    <div className="signup-container">
      <div className="form">
        <div className="top-area">
          <BsPersonFill />
          <p>Cadastrar professor</p>
        </div>
        <div className="inputs-area">
          <div className="input-label">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="input-label">
            <label htmlFor="nif">NIF</label>
            <input
              type="text"
              id="nif"
              value={nif}
              onChange={(e) => setNif(e.target.value)}
            />
          </div>

          <div className="input-label">
            <label htmlFor="uploadFoto">Foto</label>
            <input
              type="file"
              id="uploadFoto"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="button-area">
          <button className="confirm" onClick={handleSubmit}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
