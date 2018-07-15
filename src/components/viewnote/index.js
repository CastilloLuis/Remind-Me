import React from 'react';
import { Alert } from 'react-native';
import { Content } from 'native-base';
import Note from '../notes/note';

import * as h from '../../util/fetch/fetching';

export default class ViewNote extends React.Component {
    static navigationOptions = {
        title: 'UPDATE YOUR NOTE',
    };
    local = '192.168.0.106:80';

    render() { 
        const {state, navigate} = this.props.navigation;
        console.log(state.params)
        return (
            <Note
                title={state.params.note_title} 
                text={state.params.note_text} 
                noteid={state.params.note_id} 
                new={false} 
                updateNote={(state) => 
                    Alert.alert(
                        'Are you sure?',
                        '',
                        [
                          {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                          {text: 'YES', onPress: () => {
                              this.updateNote(state, () => {
                                  alert('Note updated successfully!!');
                                  navigate('Dashboard');
                                })
                            }},
                        ],
                        { cancelable: false }
                      )
                    }
            />
        )
    }

    updateNote = (state, cb) => {
        console.warn(state)
        h.fetching(state, 'POST', `http://${this.local}/notepad/api/api/update.php`, (data) => {
            console.log(data)
            cb(data);
        });
    }
}