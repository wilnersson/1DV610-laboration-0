/**
 * Module for looking up nameday.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 * @version 1.0.0
 */

import fetch from 'node-fetch'

export class NameDay {
  #API_URL = 'https://nameday.abalin.net/api/V1/getname'
  #COUNTRY = 'se'

  async getDay (name) {
    let url = new URL(this.#API_URL)
    url.searchParams.append('name', name)
    url.searchParams.append('country', this.#COUNTRY)

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    return await response.json()
  }
}
