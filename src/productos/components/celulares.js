import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Celulares1 = ({ Celulares }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Header>
                <center>
                    <h2>{Celulares.marca}</h2>
                </center>
            </Card.Header>
            <Card.Img
                variant="top"
                src={Celulares.url}
                width={300}
                height={300}
                alt="300x300"
                rounded
            />
            <Card.Body>
                <Card.Title>{Celulares.title}</Card.Title>
                <Card.Text>{Celulares.description}</Card.Text>
                <Button variant="danger" size="sm">
                    ${Celulares.price}
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="danger" size="sm">
                    {Celulares.category}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Celulares1;
