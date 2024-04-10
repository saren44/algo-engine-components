import styled from "styled-components";


export const StyledTileInspector = styled.div`
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
	.listItem {
		display: flex;
		flex-direction: row;
		border: 1px solid black;
		align-items: center;
		justify-content: space-between;
		width: 80%;
		cursor: pointer;
	}

	.backgroundIcon {
		width: 20px;
		height: 20px;
		background-color: lightgreen;
		cursor: pointer;
	}

	.section {
		width: 100%
	}

`