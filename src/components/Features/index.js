import React from 'react';
import { THEME } from '../../THEME';
import styled from "styled-components";

export default ({ data:{ BgImgSrc, title, features }}) => {
  const Wrapper = styled.div`
    position: relative;
    overflow: hidden;    
    min-height: 400px;
    padding-bottom: 50px;
    color: ${THEME.LIGHT_COMPONENT_TEXT_COLOR}
  `;

  const BgImage = styled.img`
    position: absolute;
    top: 0;
    object-fit: cover;
    object-position: left top;
    filter: opacity(25%) sepia(60%);
    width: 100%;
    height: auto;
    z-index: 0;
  `;
  const FeaturesTitle = styled.h2`
    position: relative;  
    text-align: center;
    font-size: 3rem;
    padding: 60px;
    z-index: 1;
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
    position: relative;  
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  `;
  
  const Feature = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
  `;
  const FeatureIcon = styled.img`
    width: 20%;
    object-fit: contain;
  `;
  
  const DescrWrapper = styled.div`
    width: 80%;
  `;
  const FeatureTitle = styled.h3`
    text-align: center;
    font-size: 1.5rem;
  `;
  const FeatureDescription = styled.div`
    padding: 15px;
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 1px;
  `;

  const featuresList = features.map(({ title, description, icon }) => {
    return (<Feature key={title}>
        <FeatureIcon src={icon} />
        <DescrWrapper>
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureDescription>{description}</FeatureDescription>
        </DescrWrapper>
      </Feature>);
  });

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