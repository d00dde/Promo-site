import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo';
import { links } from '../../pages';
import { THEME } from '../../THEME';
import { data } from '../../data';
import styled from "styled-components";

export const Navbar = () => {

	const Wrapper = styled.nav`
		position: fixed;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70px;
		z-index: 10;
		opacity: 1;
		transition: opacity 0.3s;
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			text-decoration: none;
			text-transform: uppercase;
			cursor: pointer;
			opacity: 0.7;
		}
		&.hide {
			opacity: 0;
			transition: opacity 0.3s;
		}
	`;
	const BgImage = styled.img`
		position: absolute;
		object-fit: none;
		object-position: left top;
		width: 100%;
		height: 70px;
		overflow: hidden;
	`;
	const LinksWrapper = styled.div`
		display: flex;
		justify-content: space-around;
		align-items: center;
		a {
			color: ${THEME.NAV_TEXT_COLOR};
			transition: .3s;
		}
		a:hover {
			background-color: ${THEME.NAV_HOVER_COLOR};
		}
		.active {
			background-color: ${THEME.NAV_HOVER_COLOR};
			cursor: default;
		}
		.link-0 {
			width: 100px;
			height: 70px;
		}
		.dropdown {
			position: relative;
			padding-right: 15px;
			opacity: 0.7;
		}
		.dropdown:after {
			content: '\\25BC';
			color: ${THEME.DECOR_COLOR};
			position: absolute;
			right: 10px;
			top: 50%;
			transform: translateY(-50%);
		}
		.link-0.dropdown .title {
			position: absolute;
			top: 0;
			left: 0;
			width: 100px;
			height: 70px;
			display: flex;
			color: ${THEME.NAV_TEXT_COLOR};
			justify-content: center;
			align-items: center;
			text-decoration: none;
			text-transform: uppercase;
			cursor: pointer;
		
		}
		.link-0.dropdown .links {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 70px;
			left: 0;
			width: 230px;
			background-color: ${THEME.MAIN_COLOR};
			transform: scaleY(0);
			transform-origin: top;
			overflow: hidden;
			transition: all 0.5s;
		}
		.link-0.dropdown:hover .links {
			transform: scaleY(1);
		}
		.link-1 {
			display: block;
			padding: 20px;
			width: 100%;
			height: 100%;
		}

	`;

	const [$navWrapper] = useState(null);
	useEffect (() => {
		const $navWrapper = document.querySelector('.nav-wrapper');
		let isHide = false;
		const onScroll = document.addEventListener('scroll', () => {
			if(window.pageYOffset < 1000 && window.pageYOffset > 0) {
				if(isHide) {
					return;
				}
				else {
					$navWrapper.classList.add('hide');
					isHide = true;
				} 
			} else {
				if(!isHide) {
					return;
				}
				else {
					$navWrapper.classList.remove('hide');
					isHide = false;
				}
			}
		});
			return () => document.removeEventListener('scroll', onScroll);
	}, [$navWrapper]);


	const createDropdown = (link, depth = 0) => {
		if(!link.childs)
			return <NavLink
								as={NavLink} 
								to={link.path} 
								exact 
								key={link.title} 
								className={`link-${depth}`}
							>
								{link.title}
							</NavLink>
		
		return 	<div key={link.title} className={`link-${depth} dropdown `}>
			
							<div className='title'>{link.title}</div>
							<div className='links'>
					 			{link.childs.map((link) => createDropdown(link, depth + 1))}
							</div>
		 				</div>
	}

	return (
			<Wrapper className='nav-wrapper'>
				<BgImage  src={data.mainPage.PresentationBlock.BgImgSrc} alt='first-img'/>
				<Link to='/'><Logo /></Link>
				<LinksWrapper className='nav-links'>
					{links.map((link) => createDropdown(link))}
				</LinksWrapper>
			</Wrapper>
	) 
}