import React, { PropTypes } from 'react';
import { Button } from 'react-native';

const fetchLoctation = props => {
    return (
        <Button title='Get Location' onPress={ props.onGetLocation } />
    );
};

// fetchLoctation.displayName = 'fetchLoctation';

// fetchLoctation.propTypes = {
//     className: PropTypes.string,
// };

export default fetchLoctation;
