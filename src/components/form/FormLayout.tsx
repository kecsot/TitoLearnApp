import {Slot} from 'expo-router';
import {View} from 'react-native';

export default function FormLayout() {

    return <View style={{
        borderWidth: 5,
        borderColor: 'yellow'
    }}>
        <Slot/>
    </View>;
}

