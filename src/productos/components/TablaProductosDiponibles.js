import { Container, Row, Col } from "react-bootstrap";
import Celulares1 from "./Celulares";

const TablaProductos = () => {
    const Celulares = [
        {
            id: "F00001",
            marca: "Huawei",
            title: "Smartphone",
            description: "Smartphone Huawei P20",
            price: 6930000,
            category: "Alta Media",
            url: "https://img2.freepng.es/20180619/zoj/kisspng-huawei-p20-lite-smartphone-huawei-p20-5b28ae97e8b329.5022539215293927919532.jpg",
        },
        {
            id: "F00002",
            marca: "Xiaomi",
            title: "Smatphone",
            description: "Celular Xiaomi Poco X3 Pro 128gb 6ram 48mp ",
            price: 1585000,
            category: "Gama Alta",
            url: "https://http2.mlstatic.com/D_NQ_NP_624821-MCO45347306299_032021-O.webp",
        },
        {
            id: "F00003",
            marca: "Samsung",
            title: "Smartphone",
            description: "Samsung Galaxy A31 Dual SIM 128 GB prism crush blue 4 GB RAMa a mano",
            price: 949000,
            category: "Gama Media",
            url: "https://http2.mlstatic.com/D_NQ_NP_973654-MLA44517686177_012021-O.webp",
        },
        {
            id: "F00004",
            marca: "Xiaomi",
            title: "Smartphone",
            description: "Xiaomi Poco F3 5G Dual SIM 256 GB azul océano profundo 8 GB RAM",
            price: 1691000,
            category: "Elegante",
            url: "https://http2.mlstatic.com/D_NQ_NP_787261-MLA46481220992_062021-O.webp",
        },
        {
            id: "F00005",
            marca: "Xiaomi",
            title: "Smatphone",
            description: "Xiaomi Redmi 9T Dual SIM 64 GB gris carbono 4 GB RAM",
            price: 739000,
            category: "Gama Media",
            url: "https://http2.mlstatic.com/D_NQ_NP_811450-MLA46260008930_062021-O.webp",
        },
        {
            id: "F00006",
            marca: "Apple",
            title: "iPhone",
            description: "Apple iPhone 11 (128 GB) - Negro",
            price: 3309000,
            category: "Gama Alta",
            url: "https://http2.mlstatic.com/D_NQ_NP_904849-MLA46153369025_052021-O.webp",
        },
        {
            id: "F00007",
            marca: "Motorola ",
            title: "Smartphone",
            description: "Moto G20 Dual SIM 64 GB azul cielo 4 GB RAM",
            price: 600000,
            category: "Gama Baja",
            url: "https://http2.mlstatic.com/D_NQ_NP_850033-MLA48041674144_102021-O.webp",
        },
        {
            id: "F00008",
            marca: "Motorola ",
            title: "Smartphone",
            description: "Moto G9 Plus 128gb Color Rosado",
            price: 1100000,
            category: "Gama Media",
            url: "https://http2.mlstatic.com/D_NQ_NP_674970-MCO47477782170_092021-O.webp",
        },
        {
            id: "F00009",
            marca: "Nokia ",
            title: "Celular",
            description: "Celular Nokia G20 Azul",
            price: 730000,
            category: "Gama Baja",
            url: "https://http2.mlstatic.com/D_NQ_NP_638668-MCO46835815510_072021-O.webp",
        },
        

    ];


    return (
        <Container>
            <Row>
                {Celulares.map((celular) => (
                    <Col xs={4}>
                        <Celulares1 Celulares={celular} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TablaProductos;
