
import { createAsyncThunk, createSlice, current  } from '@reduxjs/toolkit';


// get data


export const loadGameDatabase = createAsyncThunk(
    'game/loadGameDatabase',
    async (value, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:2000/game");
            const json = await response.json();
            return json.rows;
        } catch (err) {
            console.log(err);
            return rejectWithValue(err.message);
        }
    }
)


const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameList: [],
        isLoadingGames: false,
        hasLoaded: false,
        failedToLoadGames: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadGameDatabase.pending, (state) => {
                state.isLoadingGames = true;
                state.failedToLoadGames = false;
                console.log("pending");
            })
            .addCase(loadGameDatabase.fulfilled, (state, action) => {
                state.isLoadingGames = false;
                state.failedToLoadGames = false;
                state.hasLoaded = true;
                state.gameList = action.payload;

                console.log(current(state));
            })
            .addCase(loadGameDatabase.rejected, (state) => {
                console.log("Failed to load");
                state.isLoadingGames = false;
                state.failedToLoadGames = true;    
                state.hasLoaded = false;            
                state.gameList = [];
            })
    }
})

export const selectGame = (state) => state.game.gameList;

export const isLoading = (state) => state.game.isLoadingGames;
export const hasLoaded = (state) => state.game.hasLoaded;
export const failedToLoad = (state) => state.game.failedToLoadGames;


export default gameSlice.reducer;