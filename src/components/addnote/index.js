import React from 'react';
import {Modal, Text, TouchableHighlight, View, AsyncStorage} from 'react-native';
import { Container, Button, Right, Icon } from 'native-base';
import OpenButton from './addbutton';
import CloseButton from './closebutton';
import Note from '../notes/note';

export default class AddNote extends React.Component {
    state = {
        modalVisible: false,
        loggeduser: null
    };
    local = '192.168.1.3:80';
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }   
    render() {
        return (
            <Container>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    
                    <View style={{marginTop: 20, marginLeft: '82%', width: '100%'}}>
                        <Button
                            transparent
                            dark 
                            style={{width: 50}}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}> 
                            <Text style={{fontSize: 30, color: 'black'}}>✗</Text>
                        </Button>
                    </View>

                    <Note 
                        saveNote={(form) => this.saveNote(form)} 
                        new={true} 
                        userid={this.state.loggeduser} 
                        closeWindow={() =>{ this.props.closeWindow(); this.setState({modalVisible: false})}}
                    />

                </Modal>

                <OpenButton 
                    setModalVisible={() => this.setModalVisible()}
                    logOut={()=>this.logOut(() => this.props.logout())}
                />

            </Container>
          );
    }

    componentDidMount() {
        this.getLoggedUser();
    }

    getLoggedUser = async () => {
        const value = await AsyncStorage.getItem('loggeduser');
        this.setState({loggeduser: value});
    }

    saveNote = (form) => {
        console.log(form)
        this.props.saveNote(form);
        this.setState({modalVisible: false});
    }

    logOut = (cb) => {
        this._retrieveData(cb);
    }

    _retrieveData = async (cb) => {
        try {
            const value = await AsyncStorage.getItem('loggeduser');
            if(value !== null) {
                await AsyncStorage.removeItem('loggeduser');
                alert('Log out!');
                cb();
            }
        } catch(error) {
            alert('An error ocurred while log out :( Try it again!');
            alert(error);
        }
    }

}