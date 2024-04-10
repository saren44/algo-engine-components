import { ReactNode, useState, useRef } from "react"
import { StyledGameObjectInspector } from "./styles"
import { IGameObjectInspectorProps } from "./types"


export const GameObjectInspector = ({
	background,
	pos,
	name,
	onBackgroundAssetSelect,
	script,
	onScriptAssetSelect
}: IGameObjectInspectorProps) => {

	const handleClickBackgroundAsset = () => {
		//emulate asset select modal for now
		console.log('changing background')
		onBackgroundAssetSelect({name: 'debug.jpg', content: 'debugContent'})
	}

	const handleClickScriptAsset = () => {
		//emulate asset select modal for now
		console.log('changing script')
		onScriptAssetSelect({name: 'debug.alsc', content: 'debugContentScript'})
	}

	return(
	<StyledGameObjectInspector>
		<div className="contentContainer">
			<div className="dataContainer">
				<div className="backgroundIcon" onClick={handleClickBackgroundAsset} />
				<div className="textContainer">
					<span> {name} </span>
					<span> {`pos: x: ${pos.x}, y: ${pos.y}`} </span>
					<span onClick={handleClickScriptAsset} style={{ cursor: 'pointer'}}> {`script: ${script ? script.name : 'click to select'}`} </span>
				</div>
			</div>
		</div>

	</StyledGameObjectInspector>
	)
}