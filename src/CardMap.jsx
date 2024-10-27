import PlayerView from "./PlayerView";
import WgData from "./assets/WG.json";

export default function CardMap() {
  return (
      WgData.players.map((player, index) => {
        return (<PlayerView player={player} key={index}>
        </PlayerView>
        );
      })
  );
}
