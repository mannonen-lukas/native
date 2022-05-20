import { ScrollView } from "react-native"
import Header from "./component/Header"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { SearchBar } from "@rneui/themed"
import {List} from "./component/List"


export default function App() {
  //Liste des apprenants
  const list = [
    {
      name: "ALAÇAM Buse",
      avatar: "AB",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "ALIBERT Louis",
      avatar: "AL",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "BALAGOUROU Prem",
      avatar: "BP",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "CHILOT Romain",
      avatar: "CR",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "DECAYEUX Alain",
      avatar: "DA",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "GIRARD-REYDET Jean",
      avatar: "GJ",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "KAMDEM Yannick",
      avatar: "KY",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "LIMA DA SILVA Daniel Ricardo",
      avatar: "LD",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "MANNONEN Lukas",
      avatar: "ML",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "MCQUADE André",
      avatar: "MA",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "SEMEDO DA VEIGA Kelton",
      avatar: "SK",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "SIFFLET Aurore",
      avatar: "SA",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "SOKOLOWSKY Théo",
      avatar: "ST",
      subtitle: "POEC Application Mobile",
    },
    {
      name: "TCHA Michel",
      avatar: "TM",
      subtitle: "POEC Application Mobile",
    },
  ]
 
  return (
    <SafeAreaProvider>
      <Header />
      <SearchBar placeholder="Ex. John Doe" lightTheme={true} />
      <ScrollView>
        {
          list.map((item, index) => {
            return (
              <List key={index} data={item}/>
            )
          })
        }
      </ScrollView>
    </SafeAreaProvider>
  )
}