const EventEmitter = require('events');
const StockList = require('./stock-list.json');

class Processor extends EventEmitter {
  constructor() {
    super()
    this.eventEmits = ['PROCESSING_STARTED', 'PROCESSING_SUCCESS', 'PROCESSING_FAILED'];
    this.failReasons = ['INSUFFICIENT_STOCK', 'LINEITEMS_EMPTY']
  }

  // place order method
  placeOrder({orderNumber,lineItems}) {

    // processing started
    this.emit(this.eventEmits[0], orderNumber);
    
    // no line items
    if(!lineItems.length) {
      this.emit(this.eventEmits[2], {
        orderNumber: orderNumber,
        reason: this.failReasons[1]
      });
    } else {
      for (const item of lineItems) {
        const {itemId, quantity} = item;

        // insufficient stock check
        if (this.validStock(itemId, quantity, orderNumber) === -1) return;
      };

      // processing success
      this.emit(this.eventEmits[1], orderNumber);
    };
    
  }

  // validate order & stock method
  validStock(itemId, quantity, orderNumber) {
    const stockCheck = StockList.find(item => (item.id === itemId && item.stock >= quantity));
    if (!stockCheck) {
      // if no stock emit processing fail & reason is insufficient stock
      this.emit(this.eventEmits[2], {
        orderNumber,
        reason: this.failReasons[0],
        itemId
      });
      return -1;
    };
  }

}

module.exports = Processor;