import { Button, Card, CardBody, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { createUser, updateUser } from "../services/user-service"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const UpdateUser=()=>{

    const [user,setUser] = useState({})
    const cuser = useLocation().state



    useEffect(()=>{

        if(cuser==null){
            resetUser()
            document.querySelector("#btnUpdate").style.display="none"

        }else{
            document.querySelector("#btnCreate").style.display="none"
            setUser(cuser);
            console.log(cuser)

        }
        
        
    },[])


    const resetUser=()=>{
        setUser({
            name:"",
            email:"",
            phone:""
        })
    }


    const update=()=>{
        updateUser(user).then(data=>{
            toast.success(data)
        }).catch(error=>{
            console.log(error)
            toast.error("Something went wrong")
        })
    }

    const create=()=>{
        
        createUser(user).then(data=>{
            toast.success(`user ${user.name} created successfully !!!`)
        }).catch(error=>{
            console.log(error)
            toast.error("Something went wrong")
        })
    }



    return(
        <Container className="text-center">
                <h1>Create/Update User</h1>

                <Card style={{maxWidth:"400px",margin:"0px auto",textAlign:"left"}}>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" onChange={(event)=>setUser({...user, [event.target.id]:event.target.value})} value={user.name} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" onChange={(event)=>setUser({...user, [event.target.id]:event.target.value})} id="email" value={user.email} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">Phone</Label>
                                <Input type="number" name="phone" id="phone" onChange={(event)=>setUser({...user, [event.target.id]:event.target.value})}  value={user.phone} />
                            </FormGroup>
                            <Button onClick={()=>update()} id="btnUpdate" type="button">Update User</Button> 
                            <Button onClick={()=>create()} id="btnCreate" type="button">Create User</Button> 
                        </Form>
                    </CardBody>
                </Card>

            </Container>

    )
}

export default UpdateUser