import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome5';

function Header(props) {
  return (
    <View style={styles.container}>

      <View >
       {props.leftIcon != "" && <TouchableOpacity
        onPress={props.onLeftIconPress}
       >
          <Icon name={props.leftIcon} size={18} color={'black'} />
        </TouchableOpacity>
        }
      </View>

      <View>
        <Text style={styles.heading}>{props.HeadTitle}</Text>
      </View>

      <View>
        {props.rightIcon != "" && 
        <TouchableOpacity
        onPress={props.onRightIconPress}
        >
          <Icon name={props.rightIcon} size={18} color={'black'} />
        </TouchableOpacity>
        }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  heading : {
    color: '#a71f42',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  }
});

export default Header;
