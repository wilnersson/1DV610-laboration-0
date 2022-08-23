/**
 * Module for looking up nameday.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import fetch from 'node-fetch'

/**
 * Class for NameDay.
 */
export class NameDay {
  #API_URL = 'https://nameday.abalin.net/api/V1/getname'
  #COUNTRY = 'se'

  /**
   * Returns a string presentation of the given names nameday.
   *
   * @param {string} name - The name whose nameday to look up.
   * @returns {string} - A presentation of the nameday date.
   */
  async getDay (name) {
    const url = new URL(this.#API_URL)
    url.searchParams.append('name', name)
    url.searchParams.append('country', this.#COUNTRY)

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })

    if (response.status >= 300) return 'Could not get nameday.'

    const body = await response.json()

    if (body['0'].length === 0) return 'Could not get nameday.'

    const result = body['0']

    return 'Your nameday is on ' + this.#parseMonth(result[0].month) + ' ' + result[0].day + '!'
  }

  /**
   * Parses a month number to its string representation.
   *
   * @param {number} monthNr - Month number.
   * @returns {string} - Month name.
   */
  #parseMonth (monthNr) {
    switch (monthNr) {
      case 1: return 'January'
      case 2: return 'February'
      case 3: return 'March'
      case 4: return 'April'
      case 5: return 'May'
      case 6: return 'June'
      case 7: return 'July'
      case 8: return 'August'
      case 9: return 'September'
      case 10: return 'October'
      case 11: return 'November'
      case 12: return 'December'
      default: return 'Not a valid month-nr.'
    }
  }
}
