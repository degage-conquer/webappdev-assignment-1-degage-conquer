//多参数，设置参数有默认值
function count_triangle_area(base,height){ //输入底和高计算面积
    base=base||0;//通过||设置base的默认值为0
    height=height;
    let area=(base*height)/2; //计算三角形面积
    console.log(area); //输出面积
}
//示例
count_triangle_area(1,2);//输出1