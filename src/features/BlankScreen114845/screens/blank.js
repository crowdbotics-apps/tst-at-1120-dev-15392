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

  state = {
    TextInput_37: "",
    DateTimePicker_48: new Date(""),
    Switch_79: true,
    TextInput_52: "",
    CheckBox_90: true
  }

  render = () => (
    <View>
      <Text>Text with border radius</Text>
      <Button
        title="Button with border radius"
        style={styles.Button_23}
        onPress={() => alert("Pressed!")}
      />
      <TextInput
        placeholder="Border color"
        value={this.state.TextInput_37}
        onChangeText={nextValue => this.setState({ TextInput_37: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_48}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_48: selectedDate })
        }
      />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_79}
        value={this.state.Switch_79}
        onValueChange={nextChecked => this.setState({ Switch_79: nextChecked })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        value={this.state.TextInput_52}
        onChangeText={nextValue => this.setState({ TextInput_52: nextValue })}
      />
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.Image_82}
      />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#4660af"
        style={styles.Slider_84}
      />
      <Icon name="star" />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_90}
        onPress={nextChecked => this.setState({ CheckBox_90: nextChecked })}
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
  Text_6: {},
  Button_23: {},
  TextInput_37: {},
  DateTimePicker_48: {},
  Switch_79: { alignSelf: "flex-start" },
  TextInput_52: {},
  Image_82: { height: 50 },
  Slider_84: { width: 100 },
  Icon_86: {},
  CheckBox_90: {},
  View_1: {},
  Text_6: {},
  Button_23: {
    color: "#de0d0d",
    borderColor: "#d31717",
    borderWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4
  },
  TextInput_37: {},
  DateTimePicker_48: {},
  Switch_79: { alignSelf: "flex-start" },
  TextInput_52: {},
  Image_82: { height: 50 },
  Slider_84: { width: 100 },
  Icon_86: {},
  CheckBox_90: {}
})
