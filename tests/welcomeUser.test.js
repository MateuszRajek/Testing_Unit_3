import { welcomeUser } from '../welcomeUser'
import { userFullyFilled, userPartlyFilled } from './mocked/user';

describe('Checking the welcome correctness', () => {
  test("After passing all details correctly, the welcome will return in correct format", () => {
    const validAnswer = "Hello Mateusz Rajek! Am I right that you are 34 years old and you live in Dublin? It is good to see you again!"
    expect(welcomeUser(userFullyFilled)).toBe(validAnswer);
  })

  test("When all details are missing the welcome will return with default data", () => {
    const validAnswer = "Hello John Doe! Am I right that you are 30 years old and you live in Tczew? It is good to see you again!"
    expect(welcomeUser()).toBe(validAnswer);
  })

  test("When some of details are missing the welcome will return with missing data covered by default data", () => {
    const validAnswer = "Hello John Doe! Am I right that you are 34 years old and you live in Dublin? It is good to see you again!"
    expect(welcomeUser(userPartlyFilled)).toBe(validAnswer);
  })
});