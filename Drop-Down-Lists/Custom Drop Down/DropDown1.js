import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


function DropDown1(params) {
  const countries = [
    {
      "country": "India",
      "iso_alpha2": "IN",
      "iso_numeric": "356",
      "currency": "INR"
    },
    {
      "country": "United States",
      "iso_alpha2": "US",
      "iso_numeric": "840",
      "currency": "USD"
    },
    {
      "country": "Canada",
      "iso_alpha2": "CA",
      "iso_numeric": "124",
      "currency": "CAD"
    },
    {
      "country": "United Kingdom",
      "iso_alpha2": "GB",
      "iso_numeric": "826",
      "currency": "GBP"
    },
    {
      "country": "Australia",
      "iso_alpha2": "AU",
      "iso_numeric": "036",
      "currency": "AUD"
    },
    {
      "country": "Germany",
      "iso_alpha2": "DE",
      "iso_numeric": "276",
      "currency": "EUR"
    },
    {
      "country": "France",
      "iso_alpha2": "FR",
      "iso_numeric": "250",
      "currency": "EUR"
    },
    {
      "country": "Brazil",
      "iso_alpha2": "BR",
      "iso_numeric": "076",
      "currency": "BRL"
    },
    {
      "country": "Japan",
      "iso_alpha2": "JP",
      "iso_numeric": "392",
      "currency": "JPY"
    },
    {
      "country": "China",
      "iso_alpha2": "CN",
      "iso_numeric": "156",
      "currency": "CNY"
    },
    {
      "country": "South Africa",
      "iso_alpha2": "ZA",
      "iso_numeric": "710",
      "currency": "ZAR"
    },
    {
      "country": "Russia",
      "iso_alpha2": "RU",
      "iso_numeric": "643",
      "currency": "RUB"
    },
    {
      "country": "Mexico",
      "iso_alpha2": "MX",
      "iso_numeric": "484",
      "currency": "MXN"
    },
    {
      "country": "Italy",
      "iso_alpha2": "IT",
      "iso_numeric": "380",
      "currency": "EUR"
    },
    {
      "country": "Spain",
      "iso_alpha2": "ES",
      "iso_numeric": "724",
      "currency": "EUR"
    },
    {
      "country": "Argentina",
      "iso_alpha2": "AR",
      "iso_numeric": "032",
      "currency": "ARS"
    },
    {
      "country": "Egypt",
      "iso_alpha2": "EG",
      "iso_numeric": "818",
      "currency": "EGP"
    },
    {
      "country": "Nigeria",
      "iso_alpha2": "NG",
      "iso_numeric": "566",
      "currency": "NGN"
    },
    {
      "country": "Saudi Arabia",
      "iso_alpha2": "SA",
      "iso_numeric": "682",
      "currency": "SAR"
    },
    {
      "country": "Pakistan",
      "iso_alpha2": "PK",
      "iso_numeric": "586",
      "currency": "PKR"
    },
    {
      "country": "South Korea",
      "iso_alpha2": "KR",
      "iso_numeric": "410",
      "currency": "KRW"
    },
    {
      "country": "Indonesia",
      "iso_alpha2": "ID",
      "iso_numeric": "360",
      "currency": "IDR"
    },
    {
      "country": "Turkey",
      "iso_alpha2": "TR",
      "iso_numeric": "792",
      "currency": "TRY"
    },
    {
      "country": "Vietnam",
      "iso_alpha2": "VN",
      "iso_numeric": "704",
      "currency": "VND"
    },
    {
      "country": "Thailand",
      "iso_alpha2": "TH",
      "iso_numeric": "764",
      "currency": "THB"
    },
    {
      "country": "Malaysia",
      "iso_alpha2": "MY",
      "iso_numeric": "458",
      "currency": "MYR"
    },
    {
      "country": "Singapore",
      "iso_alpha2": "SG",
      "iso_numeric": "702",
      "currency": "SGD"
    },
    {
      "country": "United Arab Emirates",
      "iso_alpha2": "AE",
      "iso_numeric": "784",
      "currency": "AED"
    },
    {
      "country": "Israel",
      "iso_alpha2": "IL",
      "iso_numeric": "376",
      "currency": "ILS"
    },
    {
      "country": "Belgium",
      "iso_alpha2": "BE",
      "iso_numeric": "056",
      "currency": "EUR"
    },
    {
      "country": "Sweden",
      "iso_alpha2": "SE",
      "iso_numeric": "752",
      "currency": "SEK"
    },
    {
      "country": "Norway",
      "iso_alpha2": "NO",
      "iso_numeric": "578",
      "currency": "NOK"
    }
  ]


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Country drop down</Text>
      <TouchableOpacity style={styles.selector}>
        <Text>Select Country</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 100,
    alignSelf: 'center'
  },

  selector: {
    width: '90%',
    height: 50,
    borderRadius: 10
  },
  icon: {
    width: 20,
    height: 20
  },
  dropDownArea: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center'
  }
})
export default DropDown1