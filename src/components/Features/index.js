import React from 'react';
import { THEME } from '../../THEME';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  * as solid from '@fortawesome/free-solid-svg-icons';
//import * as brands from '@fortawesome/free-brands-svg-icons';

export default ({ data:{ BgImgSrc, title, features }}) => {

  const Wrapper = styled.div`
    position: relative;
    overflow: hidden;    
    min-height: 400px;
  `;

  const BgImage = styled.img`
    position: absolute;
    top: 0;
    object-fit: cover;
    object-position: left top;
    filter: opacity(25%) sepia(60%);
    width: 100%;
    height: auto;
    max-height: 1000px;
    z-index: 0;
  `;
  const FeaturesTitle = styled.h2`
    position: relative;  
    text-align: center;
    font-size: 3rem;
    padding: 60px;
    z-index: 2;
    ::after{
      content:'';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 150px;
      display: block;
      width: 15%;
      height: 3px;
      background-color: ${THEME.DECOR_COLOR};
    }
  `;
  const Features = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;
  const FeatureBlock = styled.div`
    width: 25%;
  `;
  const FeatureIcon = styled.img`
    width: 30px;
    height: 30px;
  `;
  const FeatureTitle = styled.div`

  `;
  const FeatureDescription = styled.div`

  `;

  const featuresList = features.map(({ title, description, icon }) => {
    return (<FeatureBlock>
        <FeatureIcon src='/img/icons/medal.svg'></FeatureIcon>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
      </FeatureBlock>);
  });
  console.log(solid)
  return (
		<Wrapper>
      <BgImage src={BgImgSrc} alt='bg-img'/>
      <FeaturesTitle>{title}</FeaturesTitle>
      <Features>  
        {featuresList}
      </Features> 
		</Wrapper>
	) 
}