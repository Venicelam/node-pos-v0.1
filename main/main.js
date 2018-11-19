module.exports = function main(inputs) {
    console.log("Debug Info");
    var output = '';
    output = output + '***<store earning no money>Receipt ***\n';
    var storeArray = [];
    for (var i = 0; i <inputs.length; i++){
        var contain = false;
        for (var j = 0; j < storeArray.length; j++){
            if (inputs[i].Name == storeArray[j].Name) {
                console.log(storeArray.Name);
                storeArray[j].count +=  1;
                contain = true;
                 }
        }
        if (contain == false) {
            storeArray.push({ Name: inputs[i].Name, count: 1, price: inputs[i].Price, unit: inputs[i].Unit });
         }
    }
    var totalPrice = 0;
    for (var h = 0; h < storeArray.length; h++){
        var r;
        if (storeArray[h].count > 1) {
           r = ' '+ storeArray[h].unit + 's';
        }
        else {
           r = '';
        }
        output = output + 'Name: ' + storeArray[h].Name + ', Quantity: ' + storeArray[h].count + r + ', Unit price: ' + (storeArray[h].price).toFixed(2) + ' (yuan), Subtotal: ' + (storeArray[h].price * storeArray[h].count).toFixed(2) + ' (yuan)\n';
        totalPrice += storeArray[h].price * storeArray[h].count;
            }
            output += '----------------------\n' +
                'Total: ' + totalPrice.toFixed(2) + ' (yuan)\n' +
                '**********************';

             return output;
        }


