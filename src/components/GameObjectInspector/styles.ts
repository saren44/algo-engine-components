import styled from "styled-components";


export const StyledGameObjectInspector = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	user-select: none;
	font-family: monospace;
	
	.contentContainer {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 10px;

	}

	.dataContainer {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}

	.textContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.backgroundIcon {
		width: 100px;
		height: 100px;
		background-color: lightgreen;
		cursor: pointer;
	}

	.section {
		width: 100%
	}

`