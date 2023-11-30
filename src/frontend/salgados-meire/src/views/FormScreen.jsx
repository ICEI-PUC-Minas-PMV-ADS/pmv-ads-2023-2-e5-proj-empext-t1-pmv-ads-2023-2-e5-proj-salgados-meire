import React, { useContext, useState } from "react";
import "../styles/Form.css";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";


const FormScreen = () => {
	const { setClienteId } = useContext(AppContext);
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		nome: "",
		endereco: "",
		telefone: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const payload = {
			nome: formData.nome,
			endereco: formData.endereco,
			telefone: formData.telefone
		}

		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		};

		fetch("https://localhost:7063/v1/Clientes/confirmar-dados-cliente", requestOptions)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setClienteId(data.clienteId)
			});

		navigate("/Finalizar")
	};

	return (
		<div>
			<h2>Confirme seus dados</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="nome">Nome:</label>
					<input
						type="text"
						id="nome"
						name="nome"
						value={formData.nome}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor="endereco">Endereço:</label>
					<input
						type="text"
						id="endereco"
						name="endereco"
						value={formData.endereco}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor="telefone">Telefone:</label>
					<input
						type="text"
						id="telefone"
						name="telefone"
						value={formData.telefone}
						onChange={handleInputChange}
					/>
				</div>
				<button type="submit">Confirmar Dados</button>
				<button type="button" onClick={() => navigate("/Carrinho")}>Cancelar</button>
			</form>
		</div>
	);
};

export default FormScreen;
