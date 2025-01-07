import { baseApi } from "@shared/api/api-client"
import { GamePageDTOschema, StoredGamesModel } from "../model/model"

export const gameApi = baseApi.injectEndpoints({
    endpoints: (create) => ({
        getCatalog: create.query<StoredGamesModel, void>({
            query: () => "/games",
            transformResponse: (responce: unknown) => {
                const formatedResponse =
                    GamePageDTOschema.array().parse(responce)

                const result: StoredGamesModel = formatedResponse.reduce(
                    (accumulator, item) => ({
                        ...accumulator,
                        [item.id]: item,
                    }),
                    {}
                )
                // console.log(formatedResponse)

                return result
            },
            providesTags: ["Catalog"],
        }),
    }),
    overrideExisting: true,
})

export const { useGetCatalogQuery } = gameApi
