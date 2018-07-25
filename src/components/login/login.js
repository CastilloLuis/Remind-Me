import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button , Text, Spinner} from 'native-base';
import * as h from '../../util/fetch/fetching';
import * as env from '../../env/env';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            clicked: false,
        }
        this.nav;
    }
    
    static navigationOptions = {
        title: 'USER LOGIN',
    };

    local = env.BASE_URL;

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input 
                            name="username" 
                            value={this.state.username}
                            onChangeText={(username) => this.setState({username})}
                        />
                    </Item>
                        <Item floatingLabel>
                        <Label>Password</Label>
                        <Input 
                            name="password" 
                            secureTextEntry={true} 
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}
                        />
                    </Item>
                </Form>
                    <Button 
                        style={styles.loginBtn} 
                        block 
                        onPress={() => 
                            {
                                if(!(h.validateJSON(this.state))){
                                    this.state.clicked = true;
                                    console.log(this.local)
                                    h.fetching(this.state, 'POST', `${this.local}/login.php`, (data) => this.handleLogin(data, () => navigate('Dashboard', {fetching: false})))    
                                } else {
                                    //this.state.clicked = false;
                                    alert('Please, fill all the fields!');
                                }
                            }
                        }    
                    >
                        <Text style={{display: ((this.state.clicked) ? 'none' : 'flex')}}>LOG IN</Text>
                        <Spinner color="white"
                        style={{
                            display: (((this.state.clicked)) ? 'flex' : 'none'),
                            marginTop: '0%'
                        }}
                    />
                    </Button>
                    <Button 
                        transparent 
                        danger
                        style={{alignSelf: 'center'}}
                        onPress = {() => navigate('Register')}> 
                        <Text> Or sign up !!</Text> 
                    </Button>
                
                </Content>               
            </Container>
        );
    }

    handleLogin = (data, cb) => {
        console.log(data);
        if(data.status === 200) {
            this.setState({clicked: false});
            this._storeData(data.data);
            cb()
        } else {
            alert('Check your credentials');
            this.setState({clicked: false});
        }
    }

    _storeData = async (data) => {
        try {
            await AsyncStorage.setItem('loggeduser', data.user_id, (err) => console.log(err));
        } catch (error) {
            alert('Error while saving data :( Try it again...');
            alert(error)
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
    loginBtn: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
});
