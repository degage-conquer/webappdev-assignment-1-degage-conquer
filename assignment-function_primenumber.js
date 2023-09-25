function prime_number(lownumber,highnumber){ //输入起始值和结束值
    lownumber=lownumber || 1;//通过||默认lownumber为1
    highnumber=highnumber || 20; //通过||默认highnumber为20
    for(i=lownumber; i<=highnumber; i++){ //遍历起始值到结束值的每一个数
        num=1;
        for(j=2; j<i; j++){ //判断i能不能被除1和本身之外的值整除，如果能够整除，num值改变为0
            if(i%j==0){
                num=0;
                break;
            }
        }
        if(i>1&num==1){
            console.log(i);
        }
    }
}
//示例
prime_number(1,10); //输出2，3，5，7