import React from 'react';
import { THEME } from '../../THEME';
import styled from "styled-components";

export default ({ data:{ title, proposals }}) => {

  const Wrapper = styled.div`
   
  `;
  const ProposalsTitle = styled.h2`
    text-align: center;
    font-size: 3rem;
  `;
  const ProposalsWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
  `;

  const Proposal = styled.div`
    font-size: 2rem;
  `;
  const ProposalPrice = styled.div`

  `;
  const ProposalTitle = styled.div`

  `;
  const DevelopmentPeriod = styled.div`

  `;
  const ProposalDescription = styled.div`

  `;

  const proposalsList = proposals.map(({ title, description, price, period }) => {
    return (<Proposal key={title}>
      <ProposalTitle>{title}</ProposalTitle>
      <ProposalPrice>{price}</ProposalPrice>
      <DevelopmentPeriod>{period}</DevelopmentPeriod>
      <ProposalDescription>{description}</ProposalDescription>
    </Proposal>);
  });


  return (
		<Wrapper>
      <ProposalsTitle>{title}</ProposalsTitle>
      <ProposalsWrapper>
        {proposalsList}
      </ProposalsWrapper>
		</Wrapper>
	) 
}