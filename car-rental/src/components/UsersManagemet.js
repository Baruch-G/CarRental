import React from 'react'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form'

const UsersManagemet = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      const usersLst = await fetchUsers()
      setUsers(usersLst)
    }

    getUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users")
    const usersJson = await res.json()
    return usersJson;
  }

  return (
    <div style={{ padding: '70px 50px 10px 55px' }}>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Enable</th>
          <th>Admin</th>
          <th style={{ width: '120px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((m) => (
          <tr key={m.id}>
            <td>{m.id}</td>
            <td>{`${m.firstName} ${m.lastName}`}</td>
            <td>{m.email}</td>
            <td>{m.gender == 1 ? "Male" : m.gender == 2 ? "Female" : "Other"}</td>
            <td>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check checked={m.isEnable} type="checkbox" />
            </Form.Group>
            </td>
            <td>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check checked={m.isAdmin} type="checkbox" />
            </Form.Group>
            </td>
            
            <td style={{}}>
              <Container style={{ height: '10px' }}>
                <Row>
                  <Col>
                    <Link
                      style={{ textDecoration: 'none', cursor: 'default' }}
                      to={`edit/${m.id}`}
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
                        // onClick={() => onDeleteClicked(m.id)}
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

export default UsersManagemet