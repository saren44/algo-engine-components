import { StyledTileInspector } from "./styles";
import { IGameObject, ITileInspectorProps } from "./types";



export const TileInspector = ({
	pos,
	objects,
	onGameObjectClick
}: ITileInspectorProps) => {

	return(
		<StyledTileInspector>
			<div className="contentContainer">
				<p> {`pos: x: ${pos.x}, y: ${pos.y}`} </p>
				{
					objects.map(el => (
						<div onClick={() => onGameObjectClick(el)} className="listItem">
							<div className="backgroundIcon"/>
							<p> {el.name} </p>
						</div>
					))
				}
			</div>
		</StyledTileInspector>
	)
}