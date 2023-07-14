import { useEffect, useState } from 'react'
import {Button, Container, Table} from 'reactstrap'
import { deleteUser, getAllUsers } from '../services/user-service'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home=()=>{
    const [users,setUsers] = useState([])
    let navigate = useNavigate()
    useEffect(()=>{

        getUsers()

    },[])


    const getUsers=()=>{
        getAllUsers().then(data=>{
            console.log(data)
            setUsers(data)
        }).catch(error=>console.log(error))
    }


    const delUser=(userId)=>{

        if(window.confirm("Do you want to delte this user ?")){
            deleteUser(userId).then(data=>{
                toast.success("user deleted successfully")
                getUsers()
            }).catch(error=>{
                toast.error("Something went wrong")
            })
        }

        
    }



    return (
        <Container>
            <h1 className='text-center'>Users</h1>
            <Button outline color='success' onClick={()=>navigate("edit-update",{state:null}) }>Add New User</Button>
            <Table
>
  <thead>
    <tr>
      <th>
        #ID
      </th>
      <th>
        Name
      </th>

      <th>
        View
      </th>
      <th>
        Edit
      </th>
      <th>
        Delete
      </th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user,index)=>(
            <tr>
      <th scope="row">
        {user._id}
      </th>
      <td>
        {user.name}
      </td>
      <td>
        <Button onClick={()=>navigate("user",{state:user})} color='info' outline>View</Button>
      </td>
      <td>
        <Button onClick={()=>navigate("edit-update",{state:user})} outline color='warning'>Edit</Button>
      </td>
      <td>
        <Button onClick={()=>delUser(user._id)} color='danger' outline>Delete</Button>
      </td>
    </tr>
        ))
    }
    
   
  </tbody>
</Table>

        </Container>
    )
}
export default Home