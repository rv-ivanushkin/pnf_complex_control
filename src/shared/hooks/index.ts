import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AsyncThunk } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import {
  ActionCreatorsMapObject,
  ActionCreator,
  bindActionCreators,
} from 'redux'
import { AppDispatch, RootState } from '../types'

export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
    ? BoundAsyncThunk<Actions[key]>
    : Actions[key]
}

type BoundAsyncThunk<Action extends ActionCreator<any>> = (
  ...args: Parameters<Action>
) => ReturnType<ReturnType<Action>>

export const useActionCreatorsTyped = <
  Actions extends ActionCreatorsMapObject = ActionCreatorsMapObject
>(
  actions: Actions
): BoundActions<Actions> => {
  const dispatch = useAppDispatch()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => bindActionCreators(actions, dispatch), [])
}
