import styled from "styled-components";


export const StyledFileTree = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	user-select: none;
	
	.filesContainer {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 10px;

	}

	.gridIcon {
		height: 80px;
		width: 80px;
		background-color: lightblue;
		margin: 0px 0px 5px 5px;
		cursor: pointer;
	}


	.listIcon {
		width: 90%;
		height: 30px;
		margin: 0px 0px 10px 10px;
		background-color: lightgreen;
		cursor: pointer;
	}

`