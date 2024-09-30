import { Col, Container, Row, Spinner } from "react-bootstrap";
import './ItemDetail.css';
import { FaLock } from 'react-icons/fa'; 

/* eslint-disable react/prop-types */
const ItemDetail = ({ item }) => {
    if (!item) {
        return (
            <Container className="d-flex justify-content-center  spinner">
                <Spinner animation="border" variant="primary" />
            </Container>
        );  
    }

    const toUpperCase = (text) => text.toUpperCase();

    return (
        <Container className="container-detail">
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} className="col-img">
                    <img className="detail-img" src={item.img} alt={item.name} />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <h3>{toUpperCase(item.name)}</h3>
                    <p className="precio"><strong>${toUpperCase(item.price.toString())}</strong></p>
                    <p className="descripcion">{toUpperCase(item.description)}</p>
                    <p className="descuento"><strong>5% DE DESCUENTO</strong> PAGANDO CON TRANSFERENCIA</p>
                    <a href="" className="link-medios-pago">VER MEDIOS DE PAGO</a>
                    <hr />
                    <Container className="d-flex flex-row align-items-center">
                        <p className="m-0 py-3">CANTIDAD</p>
                        <input type="text" className="mx-3 w-25" />
                    </Container>
                    <button className="button-agregar-carrito">AGREGAR AL CARRITO</button>
                    <Container className="mt-4">
                        <div className="compra-protegida">
                            <FaLock />
                            <p className="p-0 m-0"><strong>Compra protegida</strong></p>
                        </div>
                        <p>Tus datos cuidados durante toda la compra.</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;
