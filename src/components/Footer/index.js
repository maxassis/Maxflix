import React from 'react';
import { FooterBase } from './styles';
import Image from './styles'
import Git from '../../assets/img/github.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/maxassis/">
        <Image src={Git} alt="Logo" />
      </a>
      <p>
        Criado por Max Assis
      </p>
    </FooterBase>
  );
}


export default Footer;
