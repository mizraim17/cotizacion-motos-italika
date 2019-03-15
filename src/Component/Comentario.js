import React from 'react';

import {Card,Icon,Col,Row,CardPanel,CardTitle} from 'react-materialize'


const Comentario  = () =>{
  return(

    <Row>
      <Card
        header={
          <CardTitle image='' className=" blue darken-3 white-text left-align">

            <Moment  fromNow >
              {post.dateCreated}
            </Moment>
          </CardTitle>

        }
        actions={
          <Row className="center-align">
            <Col s={4} m={4}>
              {
                post.like?
                  <Icon
                    style={like} onClick={() => getlike(idcom)} className="material-icons" >thumb_up</Icon>
                  :<Icon  className="material-icons" onClick={() => getlike(idcom)} >thumb_up</Icon>
              }
            </Col>
            <Col s={4} m={4}>
              <Icon>
                share
              </Icon >
            </Col>
            <Col s={4} m={4}>
              <Icon>
                insert_comment
              </Icon >
            </Col>
          </Row>
        }
      >
       <p className="ultra-small">
         {post.message}
       </p>

      </Card>


    </Row>

  );
}

export default Comentario