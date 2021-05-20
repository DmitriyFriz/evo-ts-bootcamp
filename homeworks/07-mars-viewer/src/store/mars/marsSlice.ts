import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { stat } from 'fs';
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

export const fetchSol = createAsyncThunk<Photo[], { sol: number; rover: RoverName }>(
  'mars/fetchSol',
  async ({ sol, rover }, { rejectWithValue }) => {
    try {
      const photos = await getMarsRoverPhotos(sol, rover);
      return photos;
    } catch (err) {
      throw new Error(err);
    }
  }
);

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
      state.loading = LoadingStatus.Idle;
      const { sol, rover } = action.meta.arg;
      const photos = action.payload;

      const currentRover = state.rovers[rover];
      if (currentRover === undefined) {
        state.rovers[rover] = {
          [sol]: photos,
        };
      } else {
        currentRover[sol] = photos;
      }
    });
    builder.addCase(fetchSol.rejected, (state, action) => {
      state.loading = LoadingStatus.Idle;
      const { message } = action.error;
      state.error = message || 'unknown error';
    });
  },
});

export const marsReducer = marsSlice.reducer;
