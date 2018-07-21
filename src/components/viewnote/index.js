import React from 'react';
import { Alert } from 'react-native';
import { Content } from 'native-base';
import Note from '../notes/note';

import * as h from '../../util/fetch/fetching';

export default class ViewNote extends React.Component {
    static navigationOptions = {
        title: 'UPDATE YOUR NOTE',
    };
    local = '192.168.1.3:80';

    render() { 
        const {state, navigate} = this.props.navigation;
        console.log(state.params)
        return (
            <Note
                title={state.params.data.note_title} 
                text={state.params.data.note_text} 
                noteid={state.params.data.note_id} 
                userid={state.params.data.user_id} 
                new={false} 
                closeWindow={() => navigate('Dashboard')}
                updateNote={(state) => 
                    Alert.alert(
                        'Are you sure?', 
                        '',
                        [
                          {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                          {text: 'YES', onPress: () => {
                                this.updateNote(state, (data) => {
                                  alert('Note updated successfully!!');
                                  navigate('Dashboard', {fetching: true, data: data});
                                });
                            }},
                        ],
                        { cancelable: false }
                      )
                    }
            />
        )
    }

    componentDidMount() {
        this.getLoggedUser();
    }

    getLoggedUser = async () => {
        const value = await AsyncStorage.getItem('loggeduser');
        this.setState({loggeduser: value});
    }
    
    updateNote = (state, cb) => {
        console.warn(state)
        h.fetching(state, 'POST', `http://${this.local}/notepad/api/api/update.php`, (data) => {
            console.log(data)
            cb(data);
        });
    }
}