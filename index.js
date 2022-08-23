/**
 * The main starting point of the application.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const result = prompt('What is your name? ')

console.log(result)
