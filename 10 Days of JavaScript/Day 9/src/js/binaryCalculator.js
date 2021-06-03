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
            if(checkValidOperation(res, action) === false) break;
            res.innerText += action;
            break;
        case 'C':
            res.innerText = '';
            break;
        case '=':
            if(checkValidOperation(res, action) === false) {
                res.innerText = res.innerText.slice(0, res.innerText.length - 1);
                break;
            }
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

    function checkValidOperation (res, action) {
        const resText = res.innerText;
        const lastAction = resText[resText.length - 1];
        if(resText.length <= 1) {
            return true;
        };
        const lastNaN = isNaN(lastAction)
        const actionNaN = isNaN(action);
        if(lastNaN && actionNaN) {
            return false;
        } else if(action === '=') {
            if(lastAction === '1' || lastAction === '0') {
                return true
            };
            return false;
        };
        return true;
    }
}
let buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.onclick = onButton;
}