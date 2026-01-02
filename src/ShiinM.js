import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Shiin1 from './ShiinM/Shiin1';


const ShinM = () => {
    const [activeTab, setActiveTab] = useState('Shiin1');

    const renderTab = () => {
        switch (activeTab) {
            case 'Shiin1':
                return <Shiin1 />;
            case 'Shiin2':
                return <Shiin2 />;
            default:
                return <Shiin1 />;
        }
    };

    return <View>{renderTab()}</View>;
};

export default ShinM;
