import React, { useState, useEffect } from 'react';
import { THEME } from '../../THEME';
import styled from "styled-components";

export default ( {duration = 2}) => {
	const Wrapper = styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`;
	const Letter = styled.div`
		animation: ${duration}s loading  ;
		animation-fill-mode: backwards;
		@keyframes loading {
			from {
				opacity: 0;
				transform: translateX(300px);
			}
			10% {
				opacity: 1;
				transform: translateX(0px);
			}
			to {
				opacity: 1;
				transform: translateX(0px);
			}
		}
		:nth-child(1) {
			animation-delay: 0s;
		}
		:nth-child(2) {
			animation-delay: ${(duration/10)*1}s;
		}
		:nth-child(3) {
			animation-delay: ${(duration/10)*2}s;
		}
		:nth-child(4) {
			animation-delay: ${(duration/10)*3}s;
		}
		:nth-child(5) {
			animation-delay: ${(duration/10)*4}s;
		}
		:nth-child(6) {
			animation-delay: ${(duration/10)*5}s;
		}
		:nth-child(7) {
			animation-delay: ${(duration/10)*6}s;
		}
		:nth-child(8) {
			animation-delay: ${(duration/10)*7}s;
		}
		:nth-child(9) {
			animation-delay: ${(duration/10)*8}s;
		}
		:nth-child(10) {
			animation-delay: ${(duration/10)*9}s;
		}
	`;

	useEffect(() => {
		const lastElement = document.querySelector('.loader').childNodes[9]
		lastElement.addEventListener('animationend', () => {
			console.log(lastElement.style.animationPlayState = 'initial')
		})
	}, []);

	return (
		<Wrapper className='loader'>
			<Letter>&lt;</Letter>
			<Letter>H</Letter>
			<Letter>T</Letter>
			<Letter>T</Letter>
			<Letter>P</Letter>
			<Letter>.</Letter>
			<Letter>.</Letter>
			<Letter>.</Letter>
			<Letter>/</Letter>
			<Letter>&gt;</Letter>
		</Wrapper>
	) 
}