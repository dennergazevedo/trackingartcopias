/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// STYLED COMPONENTS
import { 
  Container,
  Background,
  Body,
  Title,
  Situacao,
  Logomarca
} from './styles.js';

// SERVICES
import api from '../../services/api';
import history from '../../services/history';
import { toast } from 'react-toastify';

// LOTTIE
import * as search from '../../assets/search.json';
import Lottie from 'react-lottie';

// ASSETS
import feitapravoce from '../../assets/feitapravoce.png';
import logo from '../../assets/logo.png';

// ICONS
import {
  FaArrowLeft
} from 'react-icons/fa';

export default function Tracking() {
  const searchOptions = {
      loop: true,
      autoplay: true,
      animationData: search.default,
      rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
      }
  }

  const { id } = useParams();
  const [os, setOs] = useState('');
  const [client, setClient] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadData(){
    try{
      const resp = await api.get(`app_search_order/${id}`);
      setOs(resp.data);
      handleLoadClient(resp.data);
    }catch(err){
      toast.error(`Ordem de serviço não encontrada!`, { position: 'bottom-center'});
      setTimeout(function(){
        history.push('/');
        window.location.reload();
      }, 3000);
    }
  }

  async function handleLoadClient(e){
    const cli = await api.get(`app_user_byid/${e.client_id}`);
    setClient(cli.data);
    setLoading(false);
  }

  function handleBack(){
    history.push('/');
    window.location.reload();
  }

  useEffect(()=>{
    loadData();
  }, []);

  return (
    <Container>
      <Background src={feitapravoce} alt="FEITAPRAVOCE" />
      {
        loading?
        <Lottie options={searchOptions} height={'250px'} width={'250px'} />
        :
        <Body>
          <Logomarca src={logo} alt="LOGO"/>
          <div>
            <Title>{client.nome}</Title>
            <span>Ordem de Serviço Nº {("000000" + id).slice(-6)}</span>
          </div>
          <Situacao>
            <b>Status do pedido:</b>
            <span>{os.situacao}</span>
          </Situacao>

          <button onClick={handleBack}>
            <FaArrowLeft className="icon"/>
            VOLTAR
          </button>
        </Body>
      }
    </Container>
  )
}
