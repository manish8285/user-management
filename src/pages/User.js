import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Card, CardBody, Container, Table } from "reactstrap"

const User=()=>{

    const [user,setUser] = useState({})
    const cuser = useLocation().state
    useEffect(()=>{
        
        setUser(cuser);
        console.log(cuser)
    },[])
    
    return (
        
        <Container className="text-center">
            <h1>User Details</h1>
            <Card style={{maxWidth:"400px",margin:"0px auto",textAlign:"left"}}>
                <CardBody>
                <Table>
                <tr>
                    <th>User ID</th>
                    <td>{user._id}</td>
                </tr>
                <tr>
                    <th>User Name</th>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <th>User Email</th>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <th>User Phone</th>
                    <td>{user.phone}</td>
                </tr>
            </Table>
                </CardBody>
            </Card>
        </Container>

    )
}

export default User