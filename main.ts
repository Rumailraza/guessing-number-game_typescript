import inquirer from "inquirer";
const systemGeneratedNo:number = Math.floor(Math.random() * 10);
type anstype = {
    guessnumber:number,


}
const answers : anstype = await inquirer.prompt([

     {
        type:"number",
        name:"guessnumber",
        message:"enter number",
     }

    

])
 const {guessnumber}=answers;
if (guessnumber === systemGeneratedNo) {
    console.log(guessnumber,"guessnumber",systemGeneratedNo,"sys");
    console.log("yeaaa you answer is correct/n,you win")

}else{
    console.log("try again better than next time ")
}
