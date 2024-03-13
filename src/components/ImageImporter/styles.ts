import styled from 'styled-components'

const columnCondition = '(height > 350px) or (width < 200px)'

export const StyledImageImporterWrapper = styled.div`
  width: 100%;
  height: 100%;
  container-type: size;
`


export const StyledImageImporter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  container-type: size;

  @container ${columnCondition} {
    flex-direction: column;
  }

  .dropZone {
    width: 30%;
    height: 50%;
    border: 2px solid blue;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @container ${columnCondition} {
      width: 60%;
      height: 40%;
    }
  }

  .controlsContainer {
    height: 90%;
    width: 50%;
    border: 1px solid black;

    @container ${columnCondition} {
      350px: 60%;
      height: 40%;
    }
  }
`

