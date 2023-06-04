import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { urlCreateComplex } from 'src/shared'

export const createComplexAsyncThunk = createAsyncThunk(
  'createComplexAsyncThunk',
  async (params, { rejectWithValue }) => {
    try {
      const result = await axios.get(urlCreateComplex, {
        params,
      })
      console.log(result)
    } catch (e) {
      rejectWithValue(e)
    }
  }
)
