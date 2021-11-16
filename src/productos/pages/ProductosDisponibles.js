import React from "react";
import TablaProductosDisponibles from "../components/TablaProductosDiponibles";

const ProductosDisponibles = () => {
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Productos Disponibles</h1>,
            <TablaProductosDisponibles />
        </div>
    );
};

export default ProductosDisponibles;
