import styled from "styled-components";


export const StyledAssetSelectionModal = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	user-select: none;
	font-family: monospace;

	.fileTreeContainer {
		width: 100%;
		max-height: 80%;
	}

	.controlsContainer {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}

	button {
		font-family: monospace;
	}


`