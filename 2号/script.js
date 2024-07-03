// script.js

// 将值追加到显示屏上
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
}

// 清空显示屏上的内容
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// 计算显示屏上的表达式
function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value;

    // 替换幂运算符
    expression = expression.replace(/\^/g, '**');

    // 替换平方根和对数函数
    expression = expression.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
    expression = expression.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');

    // 替换位运算符
    expression = expression.replace(/&/g, ' & ');
    expression = expression.replace(/\|/g, ' | ');
    expression = expression.replace(/\^/g, ' ^ ');
    expression = expression.replace(/<</g, ' << ');
    expression = expression.replace(/>>/g, ' >> ');

    try {
        // 计算表达式的结果
        const result = eval(expression);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

// 进制转换功能
function convertBase(base) {
    const display = document.getElementById('display');
    let value = display.value;
    
    try {
        if (base === 'bin') {
            display.value = parseInt(value, 10).toString(2); // 转换为二进制
        } else if (base === 'hex') {
            display.value = parseInt(value, 10).toString(16).toUpperCase(); // 转换为十六进制
        } else if (base === 'dec') {
            // 如果当前显示的是二进制或十六进制，转换为十进制
            if (value.startsWith('0b')) {
                display.value = parseInt(value, 2); // 二进制转十进制
            } else if (value.startsWith('0x')) {
                display.value = parseInt(value, 16); // 十六进制转十进制
            } else {
                display.value = parseInt(value, 10); // 直接转换为十进制
            }
        }
    } catch (e) {
        display.value = 'Error';
    }
}
