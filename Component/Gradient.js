
import { StyleSheet, Text, View,  } from 'react-native';
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';

const FROM_COLOR = 'rgb(142, 139, 139)';
const TO_COLOR = 'rgb(206,174,68)';

export default function Gradient() {
    return (

    <Svg height="100%" width="100%" style={ StyleSheet.absoluteFillObject }>
                <Defs>
                    <LinearGradient id="grad" x1="100%" y1="00%" x2="00%" y2="00%">
                        <Stop offset="0" stopColor={ FROM_COLOR }/>
                        <Stop offset="1" stopColor={ TO_COLOR }/>
                    </LinearGradient>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#grad)"/>
            </Svg>
    );
}