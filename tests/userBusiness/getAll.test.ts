import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { USER_ROLES } from "../../src/types"

describe("Get All", () => {
    const userBusiness  = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Testar retornar uma lista de usuários", async () => {
        const userDB = await userBusiness.getAll()

        expect(userDB).toHaveLength(2)
        expect(userDB).toContainEqual(
            {
                id: "id-mock",
                name: "Normal Mock",
                email: "normal@email.com",
                password: "hash-bananinha",
                role: USER_ROLES.NORMAL,
                createdAt: expect.any(String)
            }
        )
    })
})