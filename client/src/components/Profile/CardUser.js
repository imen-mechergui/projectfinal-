



    import {
      Col,
      Card,
      ListGroup,
      ListGroupItem,
      CardHeader,
      CardText,
    } from "reactstrap";
    
    import { useSelector } from 'react-redux';
    
    function CardUser() {
      const isAuth = useSelector((state) => state.authReducer.isAuth);
      const profile = useSelector((state) => state.authReducer.profile);
        return ( 
          <div>
            <Col sm="12" md="15" className="my-3 align-items-center "  >
          <Card className="cardProfile "  style={{padding:"10%", margin: "20%", backgroundColor:"rgb(175,15,82)"}}         >
            <CardHeader className="p-4 d-flex justify-content-around align-items-center ">
              <CardText
                style={{
                  width: "80px",
                  height: "80px",
                  fontSize: "2.8em",
                  color:'#cd599'
                }}
                className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-success text-md"
              >
                {profile ? ` ${profile.name&&profile.name[0].toUpperCase()}`: null}
                
              </CardText>
    
              <ListGroup flush className="w-75" >
                <ListGroupItem><strong>{profile ? `Name: ${profile.name}`: null}</strong></ListGroupItem>
                <ListGroupItem><strong>{profile ? `Last Name: ${profile.lastName}`: null}</strong></ListGroupItem>
                <ListGroupItem><strong>{profile ? `BirthDate: ${profile.birthDate}`: null}</strong></ListGroupItem>
              </ListGroup>
            </CardHeader>
          </Card>
          </Col> </div> ) 
        }
export default CardUser;