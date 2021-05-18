import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LoadingStatus, RoverName, Sols, Photo } from '../../types';
import { getMarsRoverPhotos } from '../../services/marsRover';

interface MarsState {
  loading: LoadingStatus;
  error: null | string;
  selectedSol: number;
  selectedRover: RoverName;
  rovers: {
    [key in RoverName]?: Sols;
  };
}

const initialState: MarsState = {
  loading: LoadingStatus.Idle,
  error: null,
  selectedSol: 1,
  selectedRover: RoverName.Perseverance,
  rovers: {},
} as MarsState;

export const fetchSol = createAsyncThunk<
  Photo[],
  { sol: number; rover: RoverName },
  { rejectValue: string }
>('mars/fetchSol', async ({ sol, rover }, { rejectWithValue }) => {
  try {
    const photos = await getMarsRoverPhotos(sol, rover);
    return photos;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const marsSlice = createSlice({
  name: 'mars',
  initialState,
  reducers: {
    selectSol(state, action: PayloadAction<number>) {
      state.selectedSol = action.payload;
    },
    selectRover(state, action: PayloadAction<RoverName>) {
      state.selectedRover = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSol.pending, (state) => {
      state.loading = LoadingStatus.Idle;
      state.error = null;
    });
    builder.addCase(fetchSol.fulfilled, (state, action) => {
      const a = action.meta.arg;
      console.log(a);
      state.loading = LoadingStatus.Idle;
    });
    builder.addCase(fetchSol.rejected, (state, action) => {
      const a = action;
      console.log(a);
    });
  },
});

export const marsReducer = marsSlice.reducer;
