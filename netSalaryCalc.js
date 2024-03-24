
// Declaring & initializing our variables
let basicSalary = Number(prompt("Enter your basic salary"))
let benefits = Number(prompt("Enter your allowances"))
let totalSalary = (basicSalary + benefits)

// PAYE calculation montly
let totalPAYE
if(totalSalary<=24000){
    totalPAYE = totalSalary*(0.1/12)
}else if(totalSalary>24000 && totalSalary <=32333){
    totalPAYE = totalSalary*(0.25/12)
}else if(totalSalary>32333 && totalSalary <=500000){
    totalPAYE = totalSalary*(0.3/12)
}
else if(totalSalary>500000 && totalSalary <=800000){
    totalPAYE = totalSalary*(0.325/12)
}else if(totalSalary>800000){
    totalPAYE = totalSalary*(0.35/12)
}

//NHIF generator

let totalNHIF

if(totalSalary<599){
    totalNHIF = 150
}else if(totalSalary>5999 && totalSalary<7999){
    totalNHIF = 300
}else if(totalSalary>7999 && totalSalary<11999){
    totalNHIF = 400
}else if(totalSalary>11999 && totalSalary<14999){
    totalNHIF = 500
}else if(totalSalary>14999 && totalSalary<19999){
    totalNHIF = 600
}else if(totalSalary>19999 && totalSalary<24999){
    totalNHIF = 750
}else if(totalSalary>24999 && totalSalary<29999){
    totalNHIF = 850
}else if(totalSalary>29999 && totalSalary<34999){
    totalNHIF = 900
}else if(totalSalary>34999){
    totalNHIF = 950
}

// NSSf generator

let totalNSSF

if(totalSalary>36000){
    totalNSSF = (36000*0.06)*2
}else{
    totalNSSF = (totalSalary*0.06)*2
}

// Housing Levy

let totalhouseLevy = (totalSalary*0.015)*2

// Net salary

let netSalary = totalSalary - (totalPAYE+totalNHIF+totalNSSF)

window.alert(`Total salary is ${totalSalary} & Net salary is ${netSalary}`)

console.log(`Total slary   Total PAYE  Total Nhif  Total NSSF   Net Salary`)
console.log(`${totalSalary}, ${totalPAYE}, ${totalNHIF}, ${totalNSSF}, ${netSalary}`)


