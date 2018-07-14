import React from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import { Container, Button, Right, Icon } from 'native-base';
import OpenButton from './addbutton';
import CloseButton from './closebutton';
import Note from '../notes/note';

import * as h from '../../util/fetch/fetching';

export default class AddNote extends React.Component {
    state = {
        modalVisible: false,
    };
    local = '192.168.0.106:80';
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
                            <Icon name='close' />
                        </Button>
                    </View>

                    <Note 
                        saveNote={(form) => this.saveNote(form)} 
                        new={true}
                    />

                </Modal>

                <OpenButton 
                    setModalVisible={() => this.setModalVisible()}
                />

            </Container>
          );
    }

    saveNote = (form) => {
        console.log(form)
        h.fetching(form, 'POST', `http://${this.local}/notepad/api/api/add.php`, (data) => {
            console.log(data);
        });
    }
}