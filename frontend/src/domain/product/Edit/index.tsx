import { ChangeEventHandler, useRef, useState } from "react";
import "./index.css";
import ImagePreview from "../../../assets/image/imagepreview.png";
import { useNavigate } from "react-router-dom";
import { config } from "../../../config";
import { Product } from "../types";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import {
  editProduct,
  selectProductEditing,
  clearEditProduct,
} from "../../../features/products/productsSlice";

function getBase64(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
}

function updateProduct(id: number, product: Product) {
  return fetch(`${config.api.url}/produtos/${id}`, {
    method: "PUT",
    mode: "cors",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...product, id: undefined }),
  });
}

function createProduct(product: Product) {
  return fetch(`${config.api.url}/produtos`, {
    method: "POST",
    mode: "cors",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...product, id: undefined }),
  });
}

const EditProduct = () => {
  const productEditing = useAppSelector(selectProductEditing);
  const [productImage, setProductImage] = useState<string | undefined>(
    productEditing?.image
  );
  const [product, setProduct] = useState<Product>(
    productEditing || {
      id: 0,
      name: "",
      description: "",
      price: 0,
      category: "",
      image: "",
    }
  );
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFileSelectHandler: ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const productImagePreview = e.target.files?.item(0);
    if (productImagePreview) {
      await getBase64(productImagePreview as Blob).then((image) => {
        setProductImage(image);
        setProduct((oldProduct) => ({
          ...oldProduct,
          image,
        }));
      });
    }
  };

  const onCancelHandler = () => {
    dispatch(clearEditProduct);
    navigate("/produtos");
  };

  const onConfirmHandler = async () => {
    if (productEditing) {
      await updateProduct(productEditing.id, product);
    } else {
      await createProduct(product);
    }
    dispatch(clearEditProduct);
    navigate("/produtos");
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
                value={product.name}
                className="edit-product-field"
                type="text"
                placeholder="Nome"
                onChange={(e) =>
                  setProduct((oldProduct) => ({
                    ...oldProduct,
                    name: e.target.value,
                  }))
                }
              />
              <input
                value={product.category}
                className="edit-product-field"
                type="text"
                placeholder="Categoria"
                onChange={(e) =>
                  setProduct((oldProduct) => ({
                    ...oldProduct,
                    category: e.target.value,
                  }))
                }
              />
              <textarea
                value={product.description}
                className="edit-product-field description"
                placeholder="Descrição"
                onChange={(e) =>
                  setProduct((oldProduct) => ({
                    ...oldProduct,
                    description: e.target.value,
                  }))
                }
              />
              <input
                value={product.price}
                className="edit-product-field edit-product-input-field-price"
                type="number"
                placeholder="Valor"
                onChange={(e) =>
                  setProduct((oldProduct) => ({
                    ...oldProduct,
                    price: Number(e.target.value),
                  }))
                }
              />
            </div>
            <div className="edit-product-input-image-field">
              <img
                onClick={() => fileUploadRef.current?.click()}
                className="edit-product-image-preview"
                src={productImage || ImagePreview}
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
              onClick={onCancelHandler}
            >
              Cancelar
            </button>
            <button
              className="edit-product-create-button"
              onClick={onConfirmHandler}
            >
              {productEditing ? "Editar" : "Cadastrar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
