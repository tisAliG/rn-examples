import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const usersMap = ( props ) => {
    return (
        <View style={ styles.mapContainer }>
            <MapView style={ styles.map } />
        </View>
    );
};

const styles = StyleSheet.create( {
    mapContainer: {
        width: '100%',
        height: 200
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

// usersMap.displayName = 'usersMap';

// usersMap.propTypes = {
//     className: PropTypes.string,
// };

export default usersMap;
