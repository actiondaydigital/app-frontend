import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Image, StyleSheet } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import { auth, db } from '@/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({

  imageProfile: {
    width: 32,
    marginLeft: 12,
    height: 32,
    borderRadius: 8,
  }
})

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // const [userInfo, setUserInfo] = useState<any | undefined>(null);
  // const useruid = auth.currentUser?.uid.toString()

  // const fetchData = async () => {
  //   const docRef = doc(db, "users", `${useruid}`);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     setUserInfo(docSnap.data());
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // };

  return (

    // Configuracoes Tabs
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0D779E',
        headerShown: true,
        headerTitle: 'Bem vindo!',
        tabBarStyle: {
          backgroundColor: "#FFF",
          height: 50

        },
        tabBarLabelStyle: {
          // fontSize: 12,
          // fontWeight: "bold",
          marginBottom: 8,
          },
        headerTitleStyle: {
          color: '#000'
        }
      }}>

      {/* Tab Painel Inicial(Home) */}
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () => (
            <Image
              style={styles.imageProfile}
              source={require('../../assets/images/rdicon.png')}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="calendar"
                    size={22}
                    color={'#000'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerStyle: {
            backgroundColor: "#fff",
          }
        }}
      />

      {/* Tab Painel Administrativo */}
      <Tabs.Screen
        name='administrativo'
        options={{
          title: "Administrativo",

          tabBarIcon: ({ color }) => <TabBarIcon name="money" color={color} />,

          headerLeft: () => (
            <Image
              style={styles.imageProfile}
              source={require('../../assets/images/rdicon.png')}
            />
          ),

          headerRight: () => (
            <Link href="/modal" asChild>

              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="calendar"
                    size={22}
                    color={'#000'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
              
            </Link>

          ),
          headerStyle: {
            backgroundColor: "#fff"
          },
        }}
      />

      {/* Tab Configuracoes */}
      <Tabs.Screen
        name="config"
        options={{
          title: 'Perfil',
          headerShown: true,
          headerTitle: "Seu Perfil",
          

          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,

          headerLeft: () => (
            <Image
              style={styles.imageProfile}
              source={require('../../assets/images/rdicon.png')}
            />
          ),
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="calendar"
          //           size={22}
          //           color={'#000'}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
          headerStyle: {
            backgroundColor: "#fff"
          },
          
        }}
      />
    </Tabs>
  );
}

function useState<T>(arg0: null): [any, any] {
  throw new Error('Function not implemented.');
}
