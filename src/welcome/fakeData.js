// HOW TO SET DATA
window.mainPageData(data)

// Data example
const mainPageData = {  

  // Field key can be string and html-string
  profit: '50<b>0</b>$',
  // OR object of field settings
  profit: {
    value: '90',
    postfix: 'posso'
  }
}

//  Keys on this page
const pageKeys = [
  'nickname',
  'currentPackage',
  'abi',
  'profit',
  'tournaments',
  'transactionBtnText',
  'transactionBtnHint', //hidden by default
  'range',
  'winRate',
  'afc',
  'topScore',
]

// All element properties (settings)
const props = {
  elementKey: {
    // Values
    value: 'Some string or Html',
    prefix: '',
    prefix2: 'pre-pre-value',
    postfix: '',
    postfix2: 'post-post-value',
    // Other
    wrapper: 'div', //default - div
    wrapClass: 'row q-pa-sm',
    valueWrapClass: 'text-orange',
    valueEl: 'span',  //default - span
    prefixEl: 'span', //default - span
    prefixEl2: 'span',  //default - span
    prefixClass: 'q-mr-sm',
    prefixClass2: 'q-mr-sm',
    postfixEl: 'p', //default - span
    postfixEl2: 'p',  //default - span
    postfixClass: 'q-ml-md',
    postfixClass2: 'q-ml-md',
    hidden: false
  }
}
