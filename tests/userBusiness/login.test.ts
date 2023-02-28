import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"

describe("login", () => {

    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("testar login de um usuário NORMAL",  async() => {
        const input = {
            email: "normal@email.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)

        const token = "token-mock-normal"

        expect(response.token).toBe(token)
    })

    test("testar login de um usuário NORMAL",  async() => {
        const input = {
            email: "admin@email.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)

        const token = "token-mock-admin"

        expect(response.token).toBe(token)
    })
})