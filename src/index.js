class SmartCalculator {
    constructor(initialValue) {

        this.eq_array = [];
        this.eq_array.push(initialValue);
        this.result = 0;
    }

    add(number) {
        //this.value += number;
        this.eq_array.push('+');
        this.eq_array.push(String(number));
        this.result = this.solve();
        return this;
    }

    subtract(number) {
        //this.value -= number;
        this.eq_array.push('-');
        this.eq_array.push(String(number));
        this.result = this.solve();
        return this;
    }

    multiply(number) {
        //this.value *= number;
        this.eq_array.push('*');
        this.eq_array.push(String(number));
        this.result = this.solve();
        return this;
    }

    devide(number) {
        //this.value /= number;
        this.eq_array.push('/');
        this.eq_array.push(String(number));
        this.result = this.solve();
        return this;
    }

    pow(number) {
        var arg;
        arg = this.eq_array.pop();
        var count_brackets = 1;
        if(arg === ')'){
            while(arg == ')') {
                count_brackets++;
                arg = this.eq_array.pop();
            }
            this.eq_array.push('Math.pow(');
            this.eq_array.push(arg);
            this.eq_array.push(',');
            this.eq_array.push(String(number));
            while(count_brackets>0){
                this.eq_array.push(')');
                count_brackets--;
            }
        }
        else {
            this.eq_array.push('Math.pow(');
            this.eq_array.push(arg);
            this.eq_array.push(',');
            this.eq_array.push(String(number));
            this.eq_array.push(')');
            this.result = this.solve();
        }
        return this;
    }

    solve(){
        return eval(this.eq_array.join(''));
    }

    valueOf() {
        return this.result;
    }
    
}

module.exports = SmartCalculator;
