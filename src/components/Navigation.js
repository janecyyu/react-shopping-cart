import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const cartData = useContext(CartContext);
	console.log("cartData",cartData)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cartData.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
