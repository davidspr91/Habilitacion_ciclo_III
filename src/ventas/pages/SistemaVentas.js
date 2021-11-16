import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import VentaForm from "../components/VentasForm";

const SistemaVentas = ({ ventas, setVentas }) => {
    const categorias = [
        { id: 1, nombre: "Alta Gama" },
        { id: 2, nombre: "Media Gama" },
        { id: 3, nombre: "Baja Gama" },

    ];

    const vendedores = [
        { id: 100, nombre: "Carlos" },
        { id: 200, nombre: "Andres" },
        { id: 300, nombre: "Miller" },
        { id: 400, nombre: "David" },
        { id: 500, nombre: "Jennifer" },
    ];

    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const [newVenta, setNewVenta] = useState({
        Fecha_Venta: "",
        Producto: "",
        Referencia: 0,
        Precio: 0,
        Descripcion: "",
        Sucursal: "",
        Vendedor: "",
        Categoria: "",
    });

    const handleChange = (event) => {
        setNewVenta({ ...newVenta, [event.target.name]: event.target.value });
    };

    const handleClick = async () => {
        const apiResponse = await api.ventas.create(newVenta);
        if (apiResponse.err) {
            setError(apiResponse.err.message);
            console.log(apiResponse.err);
        } else {
            setSuccess(apiResponse);
            setNewVenta([...ventas, newVenta]);
        }
    };
    return (
        <React.Fragment>
            <h1 className="text-center mt-5 mb-5">Realizar Venta</h1>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={8}>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
                        <VentaForm
                            handleChange={handleChange}
                            handleClick={handleClick}
                            categorias={categorias}
                            vendedores={vendedores}
                            formValue={newVenta}
                        />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default SistemaVentas;
