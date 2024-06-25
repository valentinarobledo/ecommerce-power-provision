import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer';
//TEXTS
import textData from '../texts/header.json';
import '../styles/app.scss';

const Layout = () => {
	const menu = textData.headerMenu;
  const optionsMenu = textData.optionsMenu;

	return (
		<div className='main'>
			<Header  headerMenu={menu} optionsMenu={optionsMenu} />
				<Outlet />
			<Footer menu={menu} />
		</div>
	);
};

export default Layout;
