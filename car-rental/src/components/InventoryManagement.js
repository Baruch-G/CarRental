import React from 'react'
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import './InventoryManagement.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'
import Swal from 'sweetalert2'

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    const getCarInventory = async () => {
      const inventoryRes = await fetchInventory()
      setInventory(inventoryRes)
    }

    getCarInventory()
  }, [])

  const onDeleteClicked = (id) => {
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        //TODO delete item here
        Swal.fire({
          title: `${id} Deleted!`,
          text: 'the car has been deleted.',
          icon: 'success',
        })
      }
    })
  }

  const onEditClicked = () => {}

  const fetchInventory = async () => {
    const res = await fetch('http://localhost:5000/carStockpile')
    const inventorylRes = await res.json()
    return inventorylRes
  }

  return (
    <div style={{ padding: '70px 50px 10px 55px' }}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            <th style={{ width: '120px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.brand}</td>
              <td>{m.model}</td>
              <td>{`${m.dailyCost}₪`}</td>
              <td style={{}}>
                <Container style={{ height: '10px' }}>
                  <Row>
                    <Col>
                      <Link
                        style={{ textDecoration: 'none', cursor: 'default' }}
                        to={`${m.id}`}
                      >
                        <Tooltip title="Edit">
                          <ModeEditIcon className="action-icon" />
                        </Tooltip>
                      </Link>
                    </Col>
                    <Col>
                      <Tooltip title="Delete">
                        <DeleteOutlineIcon
                          className="action-icon"
                          onClick={() => onDeleteClicked(m.id)}
                        />
                      </Tooltip>
                    </Col>
                  </Row>
                </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default InventoryManagement
