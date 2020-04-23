import React from 'react';
import { THEME } from '../../THEME';
import styled from "styled-components";

export default () => {

  const Wrapper = styled.div`
    text-transform: none;
    position: relative;
    z-index: 2;
    font-size: 25px;
    margin-left: 20px;
    padding: 8px;
    color: ${THEME.NAV_TEXT_COLOR};
    border: 2px solid ${THEME.DECOR_COLOR};
    border-radius: 10px;
  `;

  return (
		<Wrapper>
      onClick
		</Wrapper>
	) 
}