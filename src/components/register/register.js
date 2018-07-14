import React from 'react';
import { StyleSheet, Keyboard } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text, Toast} from 'native-base';
import * as h from '../../util/fetch/fetching';

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    local = '192.168.0.106:80';

    render() {
        const { navigate } = this.props.navigation; 
        return (
            <Container>
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>E-mail</Label>
                        <Input 
                            value={this.state.email} 
                            name="email"
                            onChangeText={(email) => this.setState({email})}
                        />
                    </Item>                    
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input 
                            value={this.state.username} 
                            name="username" 
                            onChangeText={(username) => this.setState({username})}
                        />
                    </Item>
                        <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input 
                            value={this.state.password} 
                            secureTextEntry={true} 
                            name="password" 
                            onChangeText={(password) => this.setState({password})}
                        />
                    </Item>
                    <Button 
                        style={styles.registerBtn} 
                        block 
                        onPress={() => {
                            Keyboard.dismiss;
                            h.fetching(this.state, 'POST', `http://${this.local}/notepad/api/api/register.php`, (data) => this.handleRegister(data))
                            }
                        }
                    >
                        <Text>REGISTER</Text>
                    </Button>
                </Form>
                </Content>               
            </Container>
        );
    }

    handleChange = name => (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleRegister = (data) => {
        let mydata = data;
        if(mydata.status === 200) {
            console.log('asdasd')
            Toast.show({
                text: 'Welcome to the family!',
                buttonText: 'Okay',
                buttonTextStyle: {color: 'white'},
                buttonStyle: {backgroundColor: '#00db5b'},
                duration: 2000,
                onClose: navigate('Home')
            });
        } else {
            console.log('nott')
        }
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
        marginTop: 50
    }
});