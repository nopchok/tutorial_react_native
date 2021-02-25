import { StatusBar } from 'expo-status-bar';
/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/




////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;


////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React from 'react';
// import { Image, ScrollView, Text } from 'react-native';

// const logo = {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   width: 64,
//   height: 64
// };

// const App = () => (
//   <ScrollView horizontal={true}>
//     <Text >Scroll me plz</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text >If you like</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>Scrolling down</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>What's the best</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 96 }}>Framework around?</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{ fontSize: 80 }}>React Native</Text>
//   </ScrollView>
// );

// export default App;


////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { Text, TextInput, View } from 'react-native';

// const PizzaTranslator = () => {
//   const [text, setText] = useState('');
//   return (
//     <View style={{padding: 10}}>
//       <TextInput
//         style={{height: 40, borderBottomWidth: 1}}
//         placeholder="Type here to translate!"
//         placeholderTextColor="#aaaaaa"
//         onChangeText={text => setText(text)}
//         defaultValue={text}
//       />
//       <Text style={{padding: 10, fontSize: 42}}>
//         {text.split(' ').map((word) => word && '🍕').join(' ')}
//       </Text>
//     </View>
//   );
// }

// export default PizzaTranslator;


////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { Button, Text, View } from "react-native";

// const Cat = (props) => {
//   const [isHungry, setIsHungry] = useState(true);

//   return (
//     <View>
//       <Text>
//         I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
//       </Text>
//       <Button
//         onPress={() => {
//           setIsHungry(false);
//         }}
//         disabled={!isHungry}
//         title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
//       />
//     </View>
//   );
// }

// const Cafe = () => {
//   return (
//     <View>
//       <Cat name="Munkustrap" />
//       <Cat name="Spot" />
//     </View>
//   );
// }

// export default Cafe;



////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React from 'react';
// import { Text, View, Image } from 'react-native';

// const CatApp = () => {
//   return (
//     <View>
//       <Image
//         source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
//         style={{width: 200, height: 200}}
//       />
//       <Text>Hello, I am your cat!</Text>
//     </View>
//   );
// }

// export default CatApp;



////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React from 'react';
// import { Text, View } from 'react-native';

// const Cat = (props) => {
//   return (
//     <View>
//       <Text>Hello, I am {props.name}!</Text>
//     </View>
//   );
// }

// const Cafe = () => {
//   return (
//     <View>
//       <Cat name="Maru" />
//       <Cat name="Jellylorum" />
//       <Cat name="Spot" />
//     </View>
//   );
// }

// export default Cafe;



////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React from 'react';
// import { Text, TextInput, View } from 'react-native';

// const Cat = () => {
//   return (
//     <View>
//       <Text>I am also a cat!</Text>
//     </View>
//   );
// }

// const Cafe = () => {
//   return (
//     <View>
//       <Text>Welcome!</Text>
//       <Cat />
//       <Cat />
//       <Cat />
//     </View>
//   );
// }

// export default Cafe;



////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React from 'react';
// import { Text, TextInput, View } from 'react-native';

// const Cat = () => {
//   return (
//     <View>
//       <Text>Hello, I am...</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1
//         }}
//         defaultValue="Name me!"
//       />
//     </View>
//   );
// }

// export default Cat;



////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React from 'react';
// import { Text } from 'react-native';

// const getFullName = (firstName, secondName, thirdName) => {
//   return firstName + " " + secondName + " " + thirdName;
// }

// const Cat = () => {
//   return (
//     <Text>
//       Hello, I am {getFullName("Rum", "Tum", "Tugger")}!
//     </Text>
//   );
// }

// export default Cat;



////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React from 'react';
// import { View, Text, Image, ScrollView, TextInput } from 'react-native';

// const App = () => {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={{
//             uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//           }}
//           style={{ width: 200, height: 200 }}
//         />
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1
//         }}
//         defaultValue="You can type in me"
//       />
//     </ScrollView>
//   );
// }

// export default App;



////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const App = () => {
//   const [countx, setCountdd] = useState(1111);

//   return (
//     <View style={styles.container}>
//       <Text>You clicked {countx} times</Text>
//       <Button
//         onPress={() => setCountdd(countx + 1)}
//         title="Click me!"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });
// export default App;



////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   center: {
//     alignItems: 'center'
//   }
// })

// const Greeting = (props) => {
//   return (
//     <View style={styles.center}>
//       <Text>Hello {props.namexx}!</Text>
//     </View>
//   );
// }

// const LotsOfGreetings = () => {
//   return (
//     <View style={[styles.center, {top: 50}]}>
//       <Greeting namexx='Rexxassr' />
//       <Greeting namexx='Jaina' />
//       <Greeting namexx='Valeera' />
//     </View>
//   );
// }

// export default LotsOfGreetings;




////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// import React from 'react';
// import { Text, View } from 'react-native';

// const HelloWorldApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Hello, world!</Text>
//     </View>
//   )
// }
// export default HelloWorldApp;





