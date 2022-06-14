import React, { useContext, useState } from "react";
import { Button } from "../Button";

// Context
import { CartContext } from "../../../context/CartContext";
import { navigate } from "../../../util/router";
import Modal from "../../modal/Modal";
import { getProductSize } from "../../../util/product/storage";
import SelectSizeHandler from "../../../handler/SelectSizeHandler";

function AddToCartButton({ product, selectedSize, setSelectedSize }) {
	const [showModal, setShowModal] = useState(0);
	const cartCont = useContext(CartContext);

	const goToBag = () => {
		navigate("/dynamic/user/bag");
		return null;
	};
	const addCartClickHandler = (prod) => {
		const productSize = getProductSize(prod.id);
		if (productSize) {
			cartCont.addToCart(prod, productSize);
		} else {
			openModal();
		}
	};
	const openModal = () => setShowModal(true);

	if (cartCont?.cart?.length > 0 && cartCont?.itemExists(product.id)) {
		return <Button text={"Go To Bag"} width100={true} onClick={goToBag} />;
	} else {
		return (
			<>
				<Button
					text={"Add To Cart"}
					width100={true}
					onClick={() => addCartClickHandler(product)}
				/>
				<Modal
					modalId={"abc1234"}
					show={showModal}
					resetShow={() => setShowModal(false)}
					title={"Select Size"}
				>
					<SelectSizeHandler
						id={product.id}
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
						noTitle={true}
					/>
					<Button
						width100={true}
						text={"Done"}
						onClick={() => setShowModal(false)}
					/>
				</Modal>
			</>
		);
	}
}

export default AddToCartButton;
