import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './EditInventoryCar.css'

const EditInventoryCar = () => {
  useEffect(() => {
    // fetch by id ...
  })

  const { id } = useParams()
  const [carItem, setCarItem] = useState({})

  return (
    <Container style={{ width: '50%' }}>
      <Row>
        <Col>
          <Form>
            <Form.Group className="md-3">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" placeholder={id} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" placeholder={id} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Price per day" />
              <Form.Text>number in range 200-1000</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Release year</Form.Label>
              <Form.Control type="number" min="1970" placeholder="year" />
              <Form.Text>number in range 1970-2030</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Is available" />
            </Form.Group>
          </Form>
        </Col>
        <Col xs={8} className="car-img-col">
          <img
            style={{ width: '100%', alignSelf: 'center' }}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEVEhUUEhISEhgSGBgaFhUcFhoYFRwSGhkaHBgZGhgcIy4lHB4rIRYWJjg0Ky8xNTU1GiU9QDszPy40NTEBDAwMEA8QHhISHzQrJSU0MTQ0MTQ2NDE0ND89NDQ0NjQ0NDQxNDE0NDQxNjQ0NDQ0NDQxNDQ0NDE0NDY0NDE9NP/AABEIAKkBKwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHCAH/xABGEAACAQIDBAUIBgcHBQEAAAABAgADEQQSIQUGMUEiMlFhcQcTQoGRobHBFDNSgpLRI0Ryk7Lh8BZDU1Rig9IkY6LC4hX/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EACIRAQEAAQQCAgMBAAAAAAAAAAABAgMREiFBURMxBCKhFP/aAAwDAQACEQMRAD8A7NERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARIO0tp0MOmevUCLew4lmbkqILszHkFBJmpbS3rrNfIPoqciwV8Qw11CapS5HpZz2qpgb3ItfH0U+sq00/adV+JnHtp7adyb1az3+3VJHs0UeoCYGutQ8GqqLXuK7qtrf6XtA7sdu4TlWVv2Qzfwgy0+8mFHpVD/s1f+M844msOJeqfGq5/wDaQczE6M4++3vN9T4QPS1TevCLxZx4oy/xWkdt+dmjrYhV8SPznnRNmX6RBa/Mm/zhsAg4paB6LXfrZZ/W6Y9vyEk097dnN1cXSPrt8RPMuIoIoFlGvaJdw2Fpstyut7GB6hp7cwjcMTRP31HxMl0q6N1XVvBgfhPK42WnEXHt/OXFwdRdUrVFI4dMiB6qieYMHvRtOibJjsQuX0WbOvsbSdl8mW8NXFUH+kYlatVHAyZAjLTtodD0wTm15Wgb1ERAREQEREBERAREQEREBERAREQERPkBEodwBckAdpNhIFfbWHS96gNuNul7xpN2t+mXKT7rJRNYq77YMHKr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"
          ></img>
        </Col>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center'}}>
        <Button variant="secondary" style={{width: '97%'}} type="submit">
          Update item
        </Button>
      </Row>
    </Container>
  )
}

export default EditInventoryCar
