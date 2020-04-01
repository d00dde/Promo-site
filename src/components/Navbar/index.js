import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../pages';
import { THEME, setCss } from '../../THEME';
import './navbar.css';

export const Navbar = () => {
	useEffect (() => {
		const style = setCss(`
			.nav-wrapper { 
				background-color: ${THEME.MAIN_COLOR}; 
			}
			.nav-links li a {
				color: ${THEME.NAV_TEXT_COLOR};
				transition: .3s;
			}
			.nav-links li a:hover {
				background-color: ${THEME.NAV_HOVER_COLOR}
				
			}
			.nav-links .active {
				background-color: ${THEME.NAV_HOVER_COLOR};
				cursor: default;
			}
			.nav-wrapper .logo {
				color: ${THEME.NAV_TEXT_COLOR};
			}`);
			return () => style.remove();
	}, []);
	
	const createDropdown = (link) => {
		if(!link.dropdown)
			return <li key={link.title}><NavLink to={link.path} exact>{link.title}</NavLink></li>
		return 	<li key={link.title}>
							{link.title}
							<ul className='dropdown'>
						 		{link.childs.map((link) => createDropdown(link))}
		 					</ul>
		 				</li>
	}

	return (
		<nav>
			<div className='nav-wrapper'>
				<Link className='logo' to='/'>Logo</Link>
				<ul className='nav-links'>
					{links.map((link) => createDropdown(link))}
				</ul>
			</div>
		</nav>
	) 
}