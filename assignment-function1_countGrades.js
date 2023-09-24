//具有返回值，包括混合参数和默认参数
//构建一个函数返回学生该学期的总成绩
function grade_level(name, semester, math_grade, Chinese_grade, English_grade){
    name=name;
    semester=semester||'2023-2024第一学期';//设置semester默认值为'2023-2024第一学期'
    math_grade=math_grade;
    Chinese_grade=Chinese_grade;
    English_grade=English_grade;
    let total_grade=math_grade+Chinese_grade+English_grade;
    let string = name+'在'+semester+'的总成绩为'+total_grade;
    return string;
}
console.log(grade_level('李娜',undefined,95,96,98));//李娜在2023-2024第一学期的总成绩为289