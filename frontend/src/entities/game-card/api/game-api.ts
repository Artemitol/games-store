import { baseApi } from "@shared/api/api-client"
import { GamePageDTOschema, GamePageModel } from "../model/model"

export const gameApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getCatalog: create.query<GamePageModel[] | null, number>({
            query: () => "/games",
            transformResponse: (responce: unknown) =>
                GamePageDTOschema.array().nullable().parse(responce),
            providesTags: ["Catalog"],
        }),
    }),
    overrideExisting: true,
})

export const { useGetCatalogQuery } = gameApi
