/**
 * The main starting point of the application.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import promptSync from 'prompt-sync'
import { NameDay } from './NameDay.js'

/**
 * Starts the program.
 */
async function start () {
  const prompt = promptSync()
  const nameDay = new NameDay()

  console.clear()

  const result = prompt('What is your name? ')

  const greeting = '### Greetings ' + result + '! ###'

  console.log(createFiller(greeting))
  console.log('\n' + await nameDay.getDay(result) + '\n\n')
}

/**
 * Creates a nice looking string to display above the greeting.
 *
 * @param {string} greeting - The greeting to decorate.
 * @returns {string} - Decoration string.
 */
function createFiller (greeting) {
  let filler = '\n\n'
  for (let i = 0; i < greeting.length; i++) {
    if (i === 0) filler += '#'
    if (i > 0 && i < greeting.length - 1) filler += ' '
    if (i === greeting.length - 1) filler += '#'
  }
  filler += '\n'
  for (let i = 0; i < greeting.length; i++) {
    if (i <= 1) filler += '#'
    if (i > 1 && i < greeting.length - 2) filler += ' '
    if (i >= greeting.length - 2) filler += '#'
  }
  filler += '\n' + greeting + '\n'
  for (let i = 0; i < greeting.length; i++) {
    filler += '#'
  }

  return filler
}

start()
