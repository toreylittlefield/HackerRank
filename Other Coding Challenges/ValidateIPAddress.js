/**
Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", 
where each X is a number from 0 to 255.

For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, while "12.34.56.oops", 
"1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.

Constraints:

[time limit] 5000ms
[input] string ip
[output] boolean

*/
// Examples:

// const ip = '192.168.0.1'
//output: true

// const ip = '0.0.0.0'
//output: true

// const ip = '123.24.59.99'
//output: true

// const ip = '192.168.123.456'
//output: false

// const ip = "192.168.123.456"
//output: false

// const ip = "1..23.4"
// output false

// const ip = "123.256.34.56"
// output true

const ip = "1.2.3.0x1"
// output false

function validateIP(ip) {
  /**
  @param ip: string
  @return: boolean
  */

  // range 0 - 255 
  // Ints in subnet
  // Subnet 1 - 3 in length
  // # number subnets === 4

  // string -> array at each period that is one subnet
  // if the array.length is !== 4 then false
  // subnet arraySubnet check length subnet > 0 && subnet < 4

  return checkIpLength(ip);

  function checkIpLength(ip) {
    const subnets = ip.split('.');

    // we do check ip.length
    if (subnets.length !== 4) return false;

    let results = checkSubnets(subnets)
    return results;
  };

  function checkSubnets(subnets) {
    // check each subnet length
    let boolean = true;
    subnets.forEach(subnet => {
      // check the length of each subnet
      if (!subnet || subnet.length > 3) {
        return boolean = false;
      };


      if (parseInt(subnet) >= 0 && parseInt(subnet) <= 255) {
        [...subnet].forEach(character => {
          if (isNaN(character)) {
            return boolean = false;
          };
        });
      } else {
        return boolean = false;
      };
    });

    return boolean;
  };

}


console.log(validateIP(ip))