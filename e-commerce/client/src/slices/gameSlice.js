
import { createAsyncThunk, createSlice, current  } from '@reduxjs/toolkit';


// get data


export const loadGameDatabase = createAsyncThunk(
    'game/loadGameDatabase',
    async ({ rejectWithValue }) => {
        console.log("test");
        try {
            console.log("test");

        } catch (err) {
            console.log("test");
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
                state.gameList = []
                const data = action.payload;

                
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

export const isLoading = (state) => state.game.isLoadingGames;
export const hasLoaded = (state) => state.game.hasLoaded;
export const failedToLoad = (state) => state.game.failedToLoadGames;


export default gameSlice.reducer;