
var app = new Vue({
  el: '#app',
  data: {
    num1: '',
    num2: '',
    operator: '',
    result: 0,
    isFirstNumber: true,
    isFirstOper: true
  },
  methods: {
    handleNumber(num) {
      if( this.isFirstNumber ) {
        this.num1 = this.num1 * 10; //to shift number to the left so can add next one
        this.num1 = this.num1 + num;
      } else {
        this.num2 = this.num2 * 10; //to shift number to the left so can add next one
        this.num2 = this.num2 + num;
      }
      this.displayClickedButton(num);
      console.log("num1: ", this.num1 + " num 2: " + this.num2);
    },
    handleOperator(oper) {
      if( this.operator == '') {
        this.operator = oper;
        this.isFirstNumber = false;
        this.displayClickedButton(oper);
      } else { //if there's already an operator, calculate result
        this.calculate();
        this.operator = oper;
        if( this.operator != '=') {
          this.displayClickedButton(oper);
        }
      }
      console.log("oper", this.operator);

    },
    displayClickedButton(button) {
      if( this.isFirstOper ) {
        this.result = button;
        this.isFirstOper = false;
      } else {
        this.result += `${button}`;
      }
    },
    calculate() {
      switch(this.operator) {
        case '+':
          this.result = this.num1 + this.num2;
          break;
        case '-':
          this.result = this.num1 - this.num2;
          break;
        case 'x':
          this.result = this.num1 * this.num2;
          break;
        case '/':
          if( this.num2 == 0) {
            this.result = this.num1 / this.num2;
          } else {
            this.result = this.num1 / this.num2;
          }
          break;
      }
      console.log("res",this.result)
      if( this.result == "Infinity" ) {
        this.result = "To " + this.result + "...and beyond! :)";
      } else if( this.result == NaN) {
        this.result = "Uh Oh..." + this.result;

      }
      this.updateValues();
    },
    updateValues() {
      //set num1 to latest result
      this.num1 = this.result;
      this.num2= '';
    },
    clear() {
      this.num1 = '',
      this.num2 = '',
      this.result = 0
      this.isFirstOper = true;
    }
   }
})
