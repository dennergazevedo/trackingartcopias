import React, { useState } from 'react'

// STYLED COMPONENTS
import { 
  Container,
  Background,
  Body,
  Logomarca,
} from './styles.js';

// ASSETS
import background from '../../assets/background.png';
import logo from '../../assets/logo.png';

// ICONS
import {
  FaCheckCircle,
  FaSearch
} from 'react-icons/fa';

// SERVICES
import history from '../../services/history';

export default function Homepage() {

  const [os, setOs] = useState('');

  function handleTracking(){
    history.push(`/tracking/${os}`);
  }
  
  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Body onSubmit={handleTracking}>
        <Logomarca src={logo} alt="LOGO"/>
        <div>
          <FaCheckCircle className="icon"/>
          <span>Consulte a situação de seu pedido.</span>
        </div>
        <input 
          placeholder="NÚMERO DO PEDIDO" 
          value={os} 
          onChange={e => setOs(e.target.value)} />
        <button type="submit">
          <FaSearch className="icon" />
          BUSCAR
        </button>
      </Body>
    </Container>
  )
}
