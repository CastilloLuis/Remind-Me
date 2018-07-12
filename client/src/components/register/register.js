import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text} from 'native-base';

export default class Register extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>E-mail</Label>
                        <Input />
                    </Item>                    
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                        <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                    <Button style={styles.registerBtn} block><Text>REGISTER</Text></Button>
                </Form>
                </Content>               
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    registerBtn: {
        width: '80%',
        alignSelf: 'center',
    }
});