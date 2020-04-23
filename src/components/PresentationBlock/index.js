import React from 'react';
import { THEME } from '../../THEME';
import styled from "styled-components";

export default ({ data:{ BgImgSrc, mainTitle, mainText }}) => {

  const Wrapper = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    color: ${THEME.DARK_COMPONENT_TEXT_COLOR};
    
  `;
  const BgImage = styled.img`
    position: absolute;
    top: -70px;
    object-fit: none;
    object-position: left top;
    width: 100%;
    height: calc(100% + 70px);
    overflow: hidden;
  `;

  const Content = styled.div`
    position: absolute;
    top: 20%;
    left: 60%;
    padding 20px;
    h1 {
      font-size: 3rem;
      animation: upflow 0.7s ease-in-out;
    }
    p {
      padding-top: 15px;
      font-size: 2rem;
      animation: upflow 1s ease-in-out;
    }
    @keyframes upflow {
      from {transform: translateY(200px); opacity: 0;}
      to {transform: translateY(0px); opacity: 1;}
    }
  `;
  return (
		<Wrapper>
      <BgImage src={BgImgSrc} alt='first-img'/>
      <Content>
        <h1>{mainTitle}</h1>
        <p>{mainText}</p>
      </Content>
		</Wrapper>
	) 
}