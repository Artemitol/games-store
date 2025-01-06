import { gameApi } from "@entities/game-card"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        [gameApi.reducerPath]: gameApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gameApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
