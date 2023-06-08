Returns a string which is ONLY the digits of the argument.

Note:
- A string is ALWAYS returned (never null)
- The argument is coerced to be a string if it's not already
- Coercing a number to a string gives you the result you'd expect
- Coercing an object to string is not the same as producing JSON, so probably doesn't produce anything useful


## Install

```
npm i digits-only
```

## Usage

```
const digitsOnly = require('digits-only')
let val = digitsOnly('123-345-2341')	// val == '1233452341'
```

