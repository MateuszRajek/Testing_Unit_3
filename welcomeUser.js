import { correctsSentence } from "./correctSentence"

export const welcomeUser = ({firstName = 'John', lastName = 'Doe', age = 30, city = 'Tczew'} = {}) => {
  const greeting = `Hello ${firstName} ${lastName}! Am I right that you are ${age} years old and you live in ${city}? It is good to see you again!`
return correctsSentence(greeting)
}