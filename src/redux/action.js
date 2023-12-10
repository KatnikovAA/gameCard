export const CLICK_PLAY = 'CLICK_PLAY'
export const SIZE_MAP_CARD = 'SIZE_MAP_CARD'
export const COUNT_CLICK = 'COUNT_CLICK'
export const FRST_NUMBER_ON_CARD = 'FRST_NUMBER_ON_CARD'
export const SCND_NUMBER_ON_CARD = 'SCND_NUMBER_ON_CARD'
export const CANCEL_COUNT = 'CANCEL_COUNT'
export const COUNT_FOR_WIN = 'COUNT_FOR_WIN'
export const WIN_PLAY = 'WIN_PLAY'

export function clickPlayButton() {
  return { 
      type: CLICK_PLAY, 
      boolean:true
    }
  }

  export function modeWinGame() {
    return { 
        type: WIN_PLAY, 
        boolean:false
      }
    }
export function pickSizeCardMap(size) {
  return { 
    type: SIZE_MAP_CARD,
    size:size
  }
}

export function countForWin() {
  return { 
    type: COUNT_FOR_WIN
  }
}

export function clickOnCard() {
  return { 
    type: COUNT_CLICK
  }
}

export function cancelCountCard() {
  return { 
    type: CANCEL_COUNT
  }
}

export function firstNumberCard(value) {
  return { 
    type: FRST_NUMBER_ON_CARD,
    value:value
  }
}

export function secondNumberCard(valueNumber) {
  return { 
    type: SCND_NUMBER_ON_CARD,
    valueNumber:valueNumber
  }
}