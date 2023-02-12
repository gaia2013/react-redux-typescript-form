import { Dispatch } from 'redux'
import { Address } from '../../domain/entity/address'
import { isCommpletePostalcode } from '../../domain/services/address'
import profileActions from './actions'

export const searchAddressFromPostalcode =
  (code: string) => async (dispatch: Dispatch) => {
    if (!isCommpletePostalcode(code)) return

    const result = await fetch(
      `https://apis.postcode-jp.com/api/v3/postcodes?apikey=[${process.env.POSTAL_CODE_API_KEY}]&postcode=${code}`
    ).then((res) => res.json())

    const address: Partial<Address> = {
      prefecture: result.data[0].pref,
      city: result.data[0].city + result.data[0].town,
    }

    dispatch(profileActions.searchAddress.done({ result: address, params: {} }))
  }

export default searchAddressFromPostalcode
