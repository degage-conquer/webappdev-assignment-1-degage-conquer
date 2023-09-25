let allStudents = ['A','B-',1,4,5,2]; //定义存储学生成绩数据的数组
let studentsWhoPass = [];
let standard2 = ['A','A-','B','B-','C']; //建立数组，存储第二种方式中可以通过的成绩
for (const data of allStudents){ //for of 可以直接遍历数组中的元素
    if (typeof data == 'number'){
        if (data>=3){
            studentsWhoPass.push(data)//通过push()函数向studentWhoPass数组中加入通过的成绩
        }
    }
    else{
        if (standard2.includes(data)){ //通过includes()函数判断元素是否在standard2数组中
            studentsWhoPass.push(data)
        }
        }
    }
console.log(studentsWhoPass);
//输出['A', 'B-', 4, 5]