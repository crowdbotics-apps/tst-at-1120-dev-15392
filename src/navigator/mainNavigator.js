import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen115242Navigator from '../features/CopyOfBlankScreen115242/navigator';
import BlankScreen315174Navigator from '../features/BlankScreen315174/navigator';
import BlankScreen114845Navigator from '../features/BlankScreen114845/navigator';
import BlankScreen014747Navigator from '../features/BlankScreen014747/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen115242: { screen: CopyOfBlankScreen115242Navigator },
BlankScreen315174: { screen: BlankScreen315174Navigator },
BlankScreen114845: { screen: BlankScreen114845Navigator },
BlankScreen014747: { screen: BlankScreen014747Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
