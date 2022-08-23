/**
 * The main starting point of the application.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import promptSync from 'prompt-sync'
import { NameDay } from './getNameday.js'

const prompt = promptSync()
const nameDay = new NameDay()

const result = prompt('What is your name? ')

console.log(await nameDay.getDay(result))
