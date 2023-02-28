import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { HashManagerMock } from "../mocks/HashManagerMock"

describe("signup", () => {

    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("testar signup de um usuário NORMAL",  async() => {
        const input = {
            name: "Normal Mock2",
            email: "normal2@email.com",
            password: "bananinha"
        }

        const response = await userBusiness.signup(input)

        const token = "token-mock-normal"

        expect(response.token).toBe(token)
    })

})