import { ActionTypes } from './actions'
import { produce } from 'immer' // Trocar o .map pelo produce() mantendo a imutabilidade do react

export interface ICycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

interface ICyclesState {
  cycles: ICycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: ICyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      /* Codigo antigo, mesma função do codigo abaixo, porem com outra semantica
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id
      } */
      return produce(state, draft => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      /* Codigo antigo, mesma função do codigo abaixo, porem com outra semantica
        return {
        ...state,
        cycles: state.cycles.map(cycle => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null
      } */
      const currentCycleIndex = state.cycles.findIndex(cycle => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }
      return produce(state, draft => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptDate = new Date()
      })
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      /* Codigo antigo, mesma função do codigo abaixo, porem com outra semantica
      return {
        ...state,
        cycles: state.cycles.map(cycle => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null
      } */

      const currentCycleIndex = state.cycles.findIndex(cycle => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }
      return produce(state, draft => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    default:
      return state
  }
}
