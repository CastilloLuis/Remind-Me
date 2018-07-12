import React from 'react';
import { StyleSheet } from 'react-native';
import { Content, Card, Textarea, Input, CardItem, Body, Row, Col, Grid, Button, Text, Left, Right,} from 'native-base';

export default class Note extends React.Component {
    render() {
        return(
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Input 
                                placeholder="Title of your note" 
                                style={{width: '100%'}}
                            />
                            <Textarea 
                                rowSpan={3} 
                                bordered placeholder="Write your note :D" 
                                style={{width: '100%'}}
                            />
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row>
                                <Left>
                                    <Col>
                                        <Button success>
                                            <Text>SAVE</Text>
                                        </Button>   
                                    </Col>
                                </Left>
                                <Right>
                                    <Col>
                                        <Button danger>
                                            <Text>CANCEL</Text>
                                        </Button>                                                                 
                                    </Col>
                                </Right>
                            </Row>
                        </Grid>
                    </CardItem>
                </Card>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});