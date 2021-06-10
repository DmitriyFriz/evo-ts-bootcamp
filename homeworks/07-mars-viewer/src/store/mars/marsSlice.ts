import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LoadingStatus, RoverName, Sols, Photo } from '../../types';
import { getMarsRoverPhotos } from '../../services/marsRover';
import { RootState } from '../store';
import { selectPhotos, selectSelectedRover, selectSelectedSol } from './selectors';

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

export const fetchSol = createAsyncThunk<{ sol: number; rover: RoverName; photos: Photo[] }>(
  'mars/fetchSol',
  async (_, { getState, signal }) => {
    try {
      const sol = selectSelectedSol(getState() as RootState);
      const rover = selectSelectedRover(getState() as RootState);
      const photos = await getMarsRoverPhotos(sol, rover, signal);
      return { sol, rover, photos };
    } catch (err) {
      throw new Error(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const photos = selectPhotos(getState() as RootState);

      if (photos !== undefined) {
        return false;
      }
      return true;
    },
  }
);

const marsSlice = createSlice({
  name: 'mars',
  initialState,
  reducers: {
    changeSol(state, action: PayloadAction<number>) {
      state.selectedSol = action.payload;
    },
    changeRover(state, action: PayloadAction<RoverName>) {
      state.selectedRover = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSol.pending, (state) => {
      state.loading = LoadingStatus.Pending;
      state.error = null;
    });
    builder.addCase(fetchSol.fulfilled, (state, action) => {
      state.loading = LoadingStatus.Idle;
      const { sol, rover, photos } = action.payload;

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
      const { aborted } = action.meta;
      if (!aborted) {
        state.error = message || 'unknown error';
      }
    });
  },
});

export const marsReducer = marsSlice.reducer;
export const { changeRover, changeSol } = marsSlice.actions;
