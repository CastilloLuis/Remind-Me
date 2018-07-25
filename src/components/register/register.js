import React from 'react';
import { StyleSheet, Keyboard } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text, Toast} from 'native-base';
import * as env from '../../env/env';
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
    static navigationOptions = {
        title: 'USER REGISTER',
    };
    local = env.BASE_URL;

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
                        onPress={() => this.register(() => navigate('Home'))}
                    >
                        <Text>REGISTER</Text>
                    </Button>
                </Form>
                </Content>               
            </Container>
        );
    }

    register = (cb) => {
        Keyboard.dismiss;
        (
            (h.validateJSON(this.state)) ?
            alert('You have to fill all the fields') :
            h.fetching(this.state, 'POST', `${this.local}/register.php`, (data) => this.handleRegister(data, cb))
        )
    }

    handleChange = name => (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleRegister = (data, cb) => {
        console.log(data);
        if(data.status === 200) {
            console.log('asdasd')
            Toast.show({
                text: 'Welcome to the family!',
                buttonText: 'Okay',
                buttonTextStyle: {color: 'white'},
                buttonStyle: {backgroundColor: '#00db5b'},
                duration: 3000,
                onClose: cb()
            });
        } else {
            alert('Something went wrong :( Try again!');
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