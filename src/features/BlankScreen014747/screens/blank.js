import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_6: true, TextInput_8: "" }

  render = () => (
    <View>
      <Image
        resizeMode="contain"
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/giphy_logo_square_social_sGm3o0E.png"
        }}
        style={styles.Image_3}
      />
      <Switch
        trackColor={{ true: "#ff4242", false: "#C0CCDA" }}
        style={styles.Switch_6}
        value={this.state.Switch_6}
        onValueChange={nextChecked => this.setState({ Switch_6: nextChecked })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_8}
        onChangeText={nextValue => this.setState({ TextInput_8: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Image_3: {},
  View_1: {},
  Image_3: {},
  Switch_6: { alignSelf: "flex-start" },
  View_1: {},
  Image_3: {},
  Switch_6: { alignSelf: "flex-start" },
  TextInput_8: {},
  View_1: {},
  Image_3: { width: 300, height: 203 },
  Switch_6: { alignSelf: "flex-start" },
  TextInput_8: {}
})
