import React from 'react';
import { StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import { Container, Text, Button, Spinner} from 'native-base';
import PushNotification from 'react-native-push-notification';
import AddNote from '../addnote/index';
import SwipeItem from '../swipeitem/item';

import * as h from '../../util/fetch/fetching';

export default class Dashboard extends React.Component {
    state = {
        notes: [],
        loaded: false,
        loggeduser: null
    }
    local = '192.168.0.106:80';
    render() {
        const { navigate, state } = this.props.navigation;
        return (
            <ScrollView>
                <Container>
                    <Spinner color="blue"
                        style={{
                            display: (((this.state.loaded)) ? 'none' : 'flex'),
                            marginTop: '50%'
                        }}
                    />
                    <Text style={{display: ((this.state.notes.length===0) ? 'flex' : 'none')}}>You don't have notes to show!</Text>
                    {
                        ((this.state.notes.length !== 0) ? 
                            false : 
                            this.state.notes.map((n) => {
                                return (
                                    <SwipeItem 
                                        title={n.note_title} 
                                        noteid={n.note_id} 
                                        text={n.note_text}
                                        deleteNote={(noteid) => this.deleteNote(noteid)}
                                        new={false}
                                        goToNote={() => {
                                            console.log('view note shit')
                                            navigate('ViewNote', n);
                                        }}
                                    />                             
                                )
                            }).reverse()                    
                        )
                    }       
                    <AddNote 
                        logout={() => navigate('Home')}
                    />        
                </Container>
            </ScrollView>
        );
    }

    componentDidMount() {
        console.log('xdxdxdxdxdxd');
        this._retrieveData(() => {
            h.fetching(null, 'GET', `http://${this.local}/notepad/api/api/get.php?userid=${this.state.loggeduser}`, (data) => {
                console.log(data);
                this.setState({loaded: true})
                this.setState({notes: data});
            });
        })

    }

    deleteNote = (noteid) => {
        h.fetching(null, 'GET', `http://${this.local}/notepad/api/api/delete.php?note_id=${noteid}`, (data) => {
            let mydata = data;
            if(mydata.status === 200) {
                const newstate = this.state.notes.filter(n => n.note_id !== noteid);
                this.setState({notes: newstate});
            }
        })
    }

    _retrieveData = async (cb) => {
        try {
          const value = await AsyncStorage.getItem('loggeduser');
          if (value !== null) {
            this.setState({loggeduser: value});
            cb();
          }
         } catch (error) {
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
    }
});