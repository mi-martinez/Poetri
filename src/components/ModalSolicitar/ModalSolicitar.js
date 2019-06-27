import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Form, FormGroup, Label, Input,  } from 'reactstrap';
import './ModalSolicitar.scss';
import Logo from '../../assets/images/logo-poetri.svg';
import IconWhatsapp from '../../assets/images/whatsapp.svg';
import IconMessenger from '../../assets/images/messenger.svg';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (

      <div>
        <a color="danger" onClick={this.toggle} className="button-open-modal">Solicitar Asesoria</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className, "modal-solicitar-asesoria"}>
          <div className="close-modal" onClick={this.toggle}>cerrar</div>
          <ModalBody>
            <img src={Logo} className="logo"/>
            <div className="redes">
              <hr></hr>
              <a href=""><img src={IconWhatsapp}/></a>
              <a href=""><img src={IconMessenger} /></a>
            </div>
            <div className="title-form">
              <h2>Solicitar Asesoria</h2>
              <p>Poetri puede ayudarte a construir las funciones que necesitas, por favor completa el fomulario y nos pondremos en contacto cuanto antes.</p>
            </div>
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="names">Nombres:</Label>
                    <Input type="text" name="name" id="names" placeholder="Nombres y Apellidos" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="nationality">Nacionalidad:</Label>
                    <Input type="select" name="name" id="nationality">
                      <option>Colombia</option>
                      <option>Estados Unidos</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="company">Empresa:</Label>
                    <Input type="text" name="company" id="company" placeholder="Empresa" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="size-company">Tamaño de la empresa:</Label>
                    <Input type="select" name="size-company" id="size-company" >
                      <option>0 a 5 empleados</option>
                      <option>6 a 10 empleados</option>
                      <option>11 a 15 empleados</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="email">Correo electrónico:</Label>
                    <Input type="email" name="email" id="email" placeholder="Correo electrónico" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="telphone">Teléfono</Label>
                    <Input type="tel" name="telphone" id="telphone" placeholder="Teléfono"/>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="request">Solicitud</Label>
                <Input type="textarea" name="request" id="request" placeholder="Cuentanos como crees que nuestro equipo puede atyudarte. Ej: Nuestra empresa necesita una función que cambie el mundo... " />
              </FormGroup>
              <Button>Solicitar Asesoria</Button>
            </Form>

          </ModalBody>
        </Modal>
        </div>

    );
  }
}

export default ModalExample;
