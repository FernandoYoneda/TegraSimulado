import { ChangeEventHandler, useRef, useState } from "react";
import "./index.css";
import ImagePreview from "../../../assets/image/imagepreview.png";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const [productImage, setProductImage] = useState<File>();
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onFileSelectHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const productImagePreview = e.target.files?.item(0);
    if (productImagePreview) {
      setProductImage(productImagePreview);
    }
  };

  return (
    <div className="edit-product-container">
      <div className="edit-product-fields-container">
        <div className="edit-product-title">
          <p>Novo item</p>
        </div>
        <div className="edit-product-form-container">
          <form className="edit-product-form">
            <div className="edit-product-input-field">
              <input
                className="edit-product-field"
                type="text"
                placeholder="Nome"
              />
              <input
                className="edit-product-field"
                type="text"
                placeholder="Categoria"
              />
              <textarea
                className="edit-product-field description"
                placeholder="Descrição"
              />
              <input
                className="edit-product-field edit-product-input-field-price"
                type="number"
                placeholder="Valor"
              />
            </div>
            <div className="edit-product-input-image-field">
              <img
                onClick={() => fileUploadRef.current?.click()}
                className="edit-product-image-preview"
                src={
                  (productImage && URL.createObjectURL(productImage as Blob)) ||
                  ImagePreview
                }
                alt=""
              />
              <input
                ref={fileUploadRef}
                className="edit-product-image-preview-input"
                onChange={onFileSelectHandler}
                type="file"
                placeholder="Adicionar uma imagem"
              />
            </div>
          </form>
        </div>
        <div className="edit-product-buttons-container">
          <div className="edit-product-buttons">
            <button
              className="edit-product-cancel-button"
              onClick={() => navigate("/produtos")}
            >
              Cancelar
            </button>
            <button
              className="edit-product-create-button"
              onClick={() => navigate("/produtos")}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
