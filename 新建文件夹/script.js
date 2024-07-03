// script.js

// 将值追加到显示屏上
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === 'Error') {
        // 如果当前显示的是错误，则清空显示器并继续输入
        display.value = '';
    }
    display.value += value; // 将按钮值附加到当前显示的文本后面
}

// 清空显示屏上的内容
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // 清空文本
}

// 计算显示屏上的表达式
function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value;

    // 替换幂运算符
    expression = expression.replace(/\^/g, '**');

    // 替换平方根
    expression = expression.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');

    try {
        // 计算表达式的结果
        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error'; // 如果表达式无效，则显示错误
    }
}
