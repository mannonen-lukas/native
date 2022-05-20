import { StyleSheet } from "react-native"
import { ListItem, Avatar } from "@rneui/themed"

const List = ({data}) => {
    //fonction permettant de générer une couleur aléatoire
    const color = () => {
        let r = Math.random() * 255
        let g = Math.random() * 255
        let b = Math.random() * 255
        return `rgb(${r},${g},${b})`
    };
    return (
        <ListItem  bottomDivider>
            <Avatar
                size={50}
                containerStyle={{ backgroundColor: color() }}
                title={data.avatar}
                rounded
            />
            <ListItem.Content>
                <ListItem.Title>{data.name}</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>{data.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron size={50} />
        </ListItem>
    )
}
export default List


const styles = StyleSheet.create({
    subtitle: {
      fontSize: 12,
      color: "#CACACA",
    },
  })