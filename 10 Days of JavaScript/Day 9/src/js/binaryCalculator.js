function onButton(e) {
    let btn = e.target || e.srcElement;
    let action = document.getElementById(btn.id).innerText;
    let res = document.getElementById('res');
    
    switch(action) {
        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
            res.innerText += action;
            break;
        case 'C':
            res.innerText = '';
            break;
        case '=':
            let expr = res.innerText;
            let nums = /(\d+)/g;
            // Replace all base 2 nums with base 10 equivs
            expr = expr.replace(nums, function(match) {
                return parseInt(match, 2);
            })
            // eval in base 10 and convert to base 2
            res.innerText = Math.floor(Calc(expr)).toString(2);
            break;
        default:
            console.error('should not be executed');
            break;
    }

    function Calc(string) {
        let result = 0;
        const tempNum = [];
        const ops = [];
        Array.from(string).forEach(el => {
            const isNumBool = isNaN(el) ? false : true;
            if(isNumBool && !ops.length) {
                tempNum.push(parseInt(el));
            } else if(isNumBool && ops.length) {
                el = parseInt(el);
                const firstNum = tempNum.pop();
                const operator = ops.pop();
                switch(operator) {
                    case '+': {
                        result += (firstNum + el)
                        break;
                    };
                    case '-': {
                        result += (firstNum - el)
                        break;
                    };
                    case '*': {
                        result += (firstNum * el)
                        break;
                    };
                    case '/': {
                        result += (firstNum / el)
                        break;
                    };
                };
            } else {
                ops.push(el);
            };
        });
        return result;
    };
}
let buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.onclick = onButton;
}