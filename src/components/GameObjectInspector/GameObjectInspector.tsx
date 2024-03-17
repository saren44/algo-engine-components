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
		onBackgroundAssetSelect({fileName: 'debug.jpg', content: 'debugContent'})
	}

	const handleClickScriptAsset = () => {
		//emulate asset select modal for now
		console.log('changing script')
		onBackgroundAssetSelect({fileName: 'debug.alsc', content: 'debugContentScript'})
	}

	return(
	<StyledGameObjectInspector>
		<div className="contentContainer">
			<p> {name} </p>
			<p> {`pos: x: ${pos.x}, y: ${pos.y}`} </p>
			<p onClick={handleClickScriptAsset}> {`script: ${script ? script.fileName : 'click to select'}`} </p>
			<div className="backgroundIcon" onClick={handleClickBackgroundAsset} />
		</div>

	</StyledGameObjectInspector>
	)
}