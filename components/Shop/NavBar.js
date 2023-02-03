import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigate } from "react-router-native";

export default function NavBar({ category, setCategory, setPage }) {

  const navigate = useNavigate();
  function navto(location) {
    navigate(location);
  }  

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navBtn} onPress={() => navto("/")}>
        <Ionicons name='home-outline' size={30} />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navBtn}
        onPress={() => {setCategory("all"); setPage('main')}}
      >
        <MaterialIcons
          name='menu-book'
          size={30}
          color={category == "all" ? "#119DA4" : null}
        />
        <Text style={category == "all" ? { color: "#119DA4" } : null}>
          Browse All
        </Text>
      </TouchableOpacity>

            <TouchableOpacity
                style={styles.navBtn}
                onPress={() => {setCategory('food'); setPage('main')}} >
                <Entypo name='bowl' size={30}
                    color={category == 'food' || category == 'appetizers' || category == 'entrees' ? '#119DA4' : null} />
                <Text style={category == 'food' || category == 'appetizers' || category == 'entrees' ? { color: '#119DA4' } : null}>
                    Food
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navBtn}
                onPress={() => {setCategory('drinks'); setPage('main')}}>
                <MaterialCommunityIcons name='tea-outline' size={30} color={category == 'drinks' ? '#119DA4' : null} />
                <Text style={category == 'drinks' ? { color: '#119DA4' } : null}>Drinks</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navBtn}>
                <MaterialCommunityIcons name='food-takeout-box-outline' size={30} />
                <Text>Cart (0)</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  navBar: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  navBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
});
