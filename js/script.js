const members = {
    "01814843266":{
        name:"Istiaq Ahmad Udoy",
        stayCost:2200,
        othersCost:0,
        getMoney:0,
        dueMoney:0,
        totalMeal:39,
        Payable:2970,
        paid:4500,
        paid_in_bazar:1530
    },
    "01640454889":{
        name:"Imran",
        stayCost:2330,
        othersCost:0,
        getMoney:0,
        dueMoney:0,
        totalMeal:56,
        Payable:2900,
        paid:5543,
        paid_in_bazar:2643
    },
    "01925315230":{
        name:"Masum",
        stayCost:4500,
        othersCost:0,
        getMoney:0,
        dueMoney:0,
        totalMeal:34,
        Payable:5503,
        paid:7250,
        paid_in_bazar:1747
    },
    "01922362569":{
        name:"Razu",
        stayCost:2000,
        othersCost:0,
        getMoney:0,
        dueMoney:0,
        totalMeal:29,
        Payable:2570,
        paid:3679,
        paid_in_bazar:1109
    },
    "01738393696":{
        name:"Amrul Qais",
        stayCost:3000,
        othersCost:0,
        getMoney:0,
        dueMoney:0,
        totalMeal:35,
        Payable:3785,
        paid:5000,
        paid_in_bazar:1215
    },
    "01794942131":{
        name:"Mehedi Hasan Maruf",
        stayCost:3000,
        othersCost:0,
        getMoney:0,
        dueMoney:0,
        totalMeal:32,
        Payable:5824,
        paid:6000,
        paid_in_bazar:176

    },
    "01400709854":{
        name:"Rikta Islam",
        stayCost:2500,
        othersCost:2500,
        getMoney:0,
        dueMoney:0,
        totalMeal:53,
        Payable:3070,
        paid:6413,
        paid_in_bazar:3343
    },
    "01532023080":{
        name:"Sony Hasan",
        stayCost:2500,
        othersCost:500,
        getMoney:0,
        dueMoney:0,
        totalMeal:58,
        Payable:3570,
        paid:6237,
        paid_in_bazar:2667
    },
    "01922635500":{
        name:"Rubel Hossain",
        stayCost:0,
        othersCost:0,
        getMoney:0,
        dueMoney:0,
        totalMeal:56,
        Payable:629,
        paid:3000,
        paid_in_bazar:2371
    },
    "01821245430e":{
        name:"Samiul Islam",
        stayCost:4000,
        othersCost:500,
        getMoney:0,
        dueMoney:30,
        totalMeal:0,
        Payable:0,
        paid:0,
        paid_in_bazar:0
    },

    khalaBill:400,
    netBill:140,
    mealRate:48,
    serviceBill:30,
    monthName:"May-23"
};
const title	    = document.querySelector("title");
const button        = document.getElementById("submit-button");
const number        = document.getElementById("number-checker");
const logPage       = document.getElementById("log-page");
const warningPage   = document.getElementById("warning-page");
const warningNotice = document.getElementById("warning-notice");
let message         = '<p>Oh No!!</p><p>Meal cost of Ramadan is remaining due.</p>';

const clickButton = document.getElementById("submit-button");
const registrarPage = document.getElementById("registrar-page");
const contentWrapper = document.getElementById("content-wrapper");

const childOne = document.getElementById("child-1");
const childTwo = document.getElementById("child-2");
const childThree = document.getElementById("child-3");
const childFour = document.getElementById("child-4");
const childFive = document.getElementById("child-5");
const detailButtonOne = document.getElementById("details-1");
const totalMealButton = document.getElementById("meal-button");
const totalButton = document.getElementById("total-button");
const detailButton = document.getElementById("detail-list");
const previousButton = document.getElementById("previous");
const mealButton = document.getElementById("meal-list");
const runningButton = document.getElementById("running-list");
const previousListButton = document.getElementById("previous-list");
number.addEventListener("keyup", numberChecker);
// content start  //
const name = document.getElementById("name");
const monthName = document.getElementById("monthName");
const totalCost = document.getElementById("totalCost");
const stayCostBill = document.getElementById("stayCostBill");
const khalaCostBill = document.getElementById("khalaCostBill");
const netCostBill = document.getElementById("netCostBill");
const serviceCostBill = document.getElementById("serviceCostBill");
const othersCostBill = document.getElementById("othersCostBill");
const dueInBazarCostBill = document.getElementById("dueInBazarCostBill");
const getInBazarCostBill = document.getElementById("getInBazarCostBill");
const totalBillAmount = document.getElementById("totalBillAmount");
const total_meals = document.getElementById("meals");
const total_rate = document.getElementById("rate");
const total_total = document.getElementById("total-meal-amount");
const paid_for_bazar = document.getElementById("paid-for-bazar");
const get_in_bazar = document.getElementById("get-in-bazar");
const due_in_bazar = document.getElementById("due-in-bazar");
const bazar_status = document.getElementById("bazar-status");
const remaining_status = document.getElementById("remaining-status");

const pre_payable = document.getElementById("pre-payable");
const running_paid = document.getElementById("running-paid");
const deposit_in_meal = document.getElementById("deposit-in-meal");
const running_due = document.getElementById("running-due");

const udoyName = document.getElementById("udoy");
const udoy_meal_cost = document.getElementById("udoy-meal-cost");
const udoy_paid_bill = document.getElementById("udoy-paid");
const udoy_get_bill = document.getElementById("udoy-get");
const udoy_due_bill = document.getElementById("udoy-due");

const razuName = document.getElementById("razu");
const razu_meal_cost = document.getElementById("razu-meal-cost");
const razu_paid_bill = document.getElementById("razu-paid");
const razu_get_bill = document.getElementById("razu-get");
const razu_due_bill = document.getElementById("razu-due");

const sonyName = document.getElementById("sony");
const sony_meal_cost = document.getElementById("sony-meal-cost");
const sony_paid_bill = document.getElementById("sony-paid");
const sony_get_bill = document.getElementById("sony-get");
const sony_due_bill = document.getElementById("sony-due");

const marufName = document.getElementById("maruf");
const maruf_meal_cost = document.getElementById("maruf-meal-cost");
const maruf_paid_bill = document.getElementById("maruf-paid");
const maruf_get_bill = document.getElementById("maruf-get");
const maruf_due_bill = document.getElementById("maruf-due");
// rubel
const amrulName = document.getElementById("amrul");
const amrul_meal_cost = document.getElementById("amrul-meal-cost");
const amrul_paid_bill = document.getElementById("amrul-paid");
const amrul_get_bill = document.getElementById("amrul-get");
const amrul_due_bill = document.getElementById("amrul-due");

const masumName = document.getElementById("masum");
const masum_meal_cost = document.getElementById("masum-meal-cost");
const masum_paid_bill = document.getElementById("masum-paid");
const masum_get_bill = document.getElementById("masum-get");
const masum_due_bill = document.getElementById("masum-due");

const imranName = document.getElementById("imran");
const imran_meal_cost = document.getElementById("imran-meal-cost");
const imran_paid_bill = document.getElementById("imran-paid");
const imran_get_bill = document.getElementById("imran-get");
const imran_due_bill = document.getElementById("imran-due");

const rubelName = document.getElementById("rubel");
const rubel_meal_cost = document.getElementById("rubel-meal-cost");
const rubel_paid_bill = document.getElementById("rubel-paid");
const rubel_get_bill = document.getElementById("rubel-get");
const rubel_due_bill = document.getElementById("rubel-due");

const riktaName = document.getElementById("rikta");
const rikta_meal_cost = document.getElementById("rikta-meal-cost");
const rikta_paid_bill = document.getElementById("rikta-paid");
const rikta_get_bill = document.getElementById("rikta-get");
const rikta_due_bill = document.getElementById("rikta-due");
let phoneNumber;

function numberChecker() {
    phoneNumber = number.value;
    if (
        (phoneNumber === "01814843266") ||
        (phoneNumber === "01922362569") ||
        (phoneNumber === "01532023080") ||
        (phoneNumber === "01821245430e") ||
        (phoneNumber === "01738393696") ||
        (phoneNumber === "01794942131") ||
        (phoneNumber === "01640454889") ||
        (phoneNumber === "01925315230") ||
        (phoneNumber === "01922635500") ||
        (phoneNumber === "01400709854")
    ){
        button.style.opacity ="1";
        let stayCost = members[phoneNumber].stayCost;
        let otherCost = members[phoneNumber].othersCost;
        let khalaCost = members.khalaBill;
        let netCost = members.netBill;
        let serviceCost = members.serviceBill;
        let getMoney =members[phoneNumber].getMoney;
        let dueMoney =members[phoneNumber].dueMoney;
        let totalCostBill = (stayCost + otherCost + khalaCost + netCost + serviceCost + dueMoney) - getMoney;

        let mealTotal = members[phoneNumber].totalMeal;
        let mealRate = members.mealRate;
        let mealTotalAmount = mealTotal * mealRate;
        let paidBazar = (members[phoneNumber].Payable < members[phoneNumber].paid) ? members[phoneNumber].paid - members[phoneNumber].Payable : 0;
        let runningDue = (members[phoneNumber].Payable > members[phoneNumber].paid) ? members[phoneNumber].Payable - members[phoneNumber].paid : 0;
        let backForBazar = (paidBazar > mealTotalAmount) ? paidBazar - mealTotalAmount : 0;
        let DueInBazar = (paidBazar < mealTotalAmount) ? mealTotalAmount - paidBazar : 0;
        let status = (paidBazar > mealTotalAmount) ? "Get" : "Due";
        let bazarMoneyStatus = (status === "Get") ? backForBazar : DueInBazar;
        let payAble =members[phoneNumber].Payable;
        let runningPaid =members[phoneNumber].paid;
        // document content //
        name.innerText = members[phoneNumber].name;
        monthName.innerText = members.monthName;
        totalCost.innerText = `${totalCostBill}`;
        stayCostBill.innerText = `${stayCost}`;
        khalaCostBill.innerText = `${khalaCost}`;
        netCostBill.innerText = `${netCost}`;
        serviceCostBill.innerText = `${serviceCost}`;
        othersCostBill.innerText = `${otherCost}`;
        dueInBazarCostBill.innerText = `${dueMoney}`;
        getInBazarCostBill.innerText = `${getMoney}`;
        totalBillAmount.innerText = `${totalCostBill}`;

        total_meals.innerText = mealTotal;
        total_rate.innerText = mealRate;
        total_total.innerText = `${mealTotalAmount}`;
        paid_for_bazar.innerText = `${paidBazar}`;
        get_in_bazar.innerText = `${backForBazar}`;
        due_in_bazar.innerText = `${DueInBazar}`;
        bazar_status.innerText = status;
        remaining_status.innerText = `${bazarMoneyStatus}`;

        pre_payable.innerText = `${payAble}`;
        running_paid.innerText = `${runningPaid}`;
        deposit_in_meal.innerText = `${paidBazar}`;
        running_due.innerText = `${runningDue}`;
        //person1 //
        const udoy = members["01814843266"].name;
        const udoy_cost = members["01814843266"].totalMeal * mealRate;
        const udoy_paid = members["01814843266"].paid_in_bazar;
        const udoy_get = (udoy_paid > udoy_cost) ? udoy_paid - udoy_cost : 0;
        const udoy_due = (udoy_paid < udoy_cost) ? udoy_cost - udoy_paid : 0;
        udoyName.innerText = `${udoy}`;
        udoy_meal_cost.innerText = `${udoy_cost}`;
        udoy_paid_bill.innerText = `${udoy_paid}`;
        udoy_get_bill.innerText = `${udoy_get}`;
        udoy_due_bill.innerText = `${udoy_due}`;
//color
	const color_get_1 = udoy_get_bill.innerText;
	const color_due_1 = udoy_due_bill.innerText;

	if(color_get_1 === "0"){
		udoy_get_bill.style.color = "red";
	}else{udoy_get_bill.style.color = "green";}
	if(color_due_1 !== "0"){
		udoy_due_bill.style.color = "red";
	}else{udoy_due_bill.style.color = "grey";}
//color
        //person2//
        const razu = members["01922362569"].name;
        const razu_cost = members["01922362569"].totalMeal * mealRate;
        const razu_paid = members["01922362569"].paid_in_bazar;
        const razu_get = (razu_paid > razu_cost) ? razu_paid - razu_cost : "0";
        const razu_due = (razu_paid < razu_cost) ? razu_cost - razu_paid : "0";
        razuName.innerText = `${razu}`;
        razu_meal_cost.innerText = `${razu_cost}`;
        razu_paid_bill.innerText = `${razu_paid}`;
        razu_get_bill.innerText = `${razu_get}`;
        razu_due_bill.innerText = `${razu_due}`;
//color
	const color_get_2 = razu_get_bill.innerText;
	const color_due_2 = razu_due_bill.innerText;

	if(color_get_2 === "0"){
		razu_get_bill.style.color = "red";
	}else{razu_get_bill.style.color = "green";}
	if(color_due_2 !== "0"){
		razu_due_bill.style.color = "red";
	}else{razu_due_bill.style.color = "grey";}
//color
        //person3//
        const sony = members["01532023080"].name;
        const sony_cost = members["01532023080"].totalMeal * mealRate;
        const sony_paid = members["01532023080"].paid_in_bazar;
        const sony_get = (sony_paid > sony_cost) ? (sony_paid - sony_cost) : "0";
        const sony_due = (sony_paid < sony_cost) ? (sony_cost - sony_paid) : "0";
        sonyName.innerText = `${sony}`;
        sony_meal_cost.innerText = `${sony_cost}`;
        sony_paid_bill.innerText = `${sony_paid}`;
        sony_get_bill.innerText = `${sony_get}`;
        sony_due_bill.innerText = `${sony_due}`;
//color
	const color_get_3 = sony_get_bill.innerText;
	const color_due_3 = sony_due_bill.innerText;

	if(color_get_3 === "0"){
		sony_get_bill.style.color = "red";
	}else{sony_get_bill.style.color = "green";}
	if(color_due_3 !== "0"){
		sony_due_bill.style.color = "red";
	}else{sony_due_bill.style.color = "grey";}
//color
        //person4//
        const maruf = members["01794942131"].name;
        const maruf_cost = members["01794942131"].totalMeal * mealRate;
        const maruf_paid = members["01794942131"].paid_in_bazar;
        const maruf_get = (maruf_paid > maruf_cost)? (maruf_paid - maruf_cost) : 0;
        const maruf_due = (maruf_paid < maruf_cost) ? (maruf_cost - maruf_paid) : 0;
        marufName.innerText = `${maruf}`;
        maruf_meal_cost.innerText = `${maruf_cost}`;
        maruf_paid_bill.innerText = `${maruf_paid}`;
        maruf_get_bill.innerText = `${maruf_get}`;
        maruf_due_bill.innerText = `${maruf_due}`;
//color
	const color_get_4 = maruf_get_bill.innerText;
	const color_due_4 = maruf_due_bill.innerText;

	if(color_get_4 === "0"){
		maruf_get_bill.style.color = "red";
	}else{maruf_get_bill.style.color = "green";}
	if(color_due_4 !== "0"){
		maruf_due_bill.style.color = "red";
	}else{maruf_due_bill.style.color = "grey";}
//color
        //person5//
        const amrul = members["01738393696"].name;
        const amrul_cost = members["01738393696"].totalMeal * mealRate;
        const amrul_paid = members["01738393696"].paid_in_bazar;
        const amrul_get = (amrul_paid > amrul_cost) ? (amrul_paid - amrul_cost) : "0";
        const amrul_due = (amrul_paid < amrul_cost) ? (amrul_cost - amrul_paid) : "0";
        amrulName.innerText = `${amrul}`;
        amrul_meal_cost.innerText = `${amrul_cost}`;
        amrul_paid_bill.innerText = `${amrul_paid}`;
        amrul_get_bill.innerText = `${amrul_get}`;
        amrul_due_bill.innerText = `${amrul_due}`;
//color
	const color_get_5 = amrul_get_bill.innerText;
	const color_due_5 = amrul_due_bill.innerText;

	if(color_get_5 === "0"){
		amrul_get_bill.style.color = "red";
	}else{amrul_get_bill.style.color = "green";}
	if(color_due_5 !== "0"){
		amrul_due_bill.style.color = "red";
	}else{amrul_due_bill.style.color = "grey";}
//color
        //person6//
        const masum = members["01925315230"].name;
        const masum_cost = members["01925315230"].totalMeal * mealRate;
        const masum_paid = members["01925315230"].paid_in_bazar;
        const masum_get = (masum_paid > masum_cost) ? (masum_paid - masum_cost) : "0";
        const masum_due = (masum_paid < masum_cost) ? (masum_cost - masum_paid) : "0";
        masumName.innerText = `${masum}`;
        masum_meal_cost.innerText = `${masum_cost}`;
        masum_paid_bill.innerText = `${masum_paid}`;
        masum_get_bill.innerText = `${masum_get}`;
        masum_due_bill.innerText = `${masum_due}`;
//color
	const color_get_6 = masum_get_bill.innerText;
	const color_due_6 = masum_due_bill.innerText;

	if(color_get_6 === "0"){
		masum_get_bill.style.color = "red";
	}else{masum_get_bill.style.color = "green";}
	if(color_due_6 !== "0"){
		masum_due_bill.style.color = "red";
	}else{masum_due_bill.style.color = "grey";}
//color
        //person7//
        const imran = members["01640454889"].name;
        const imran_cost = members["01640454889"].totalMeal * mealRate;
        const imran_paid = members["01640454889"].paid_in_bazar;
        const imran_get = (imran_paid > imran_cost) ? (imran_paid - imran_cost) : "0";
        const imran_due = (imran_paid < imran_cost) ? (imran_cost - imran_paid) : "0";
        imranName.innerText = `${imran}`;
        imran_meal_cost.innerText = `${imran_cost}`;
        imran_paid_bill.innerText = `${imran_paid}`;
        imran_get_bill.innerText = `${imran_get}`;
        imran_due_bill.innerText = `${imran_due}`;
//color
	const color_get_7 = imran_get_bill.innerText;
	const color_due_7 = imran_due_bill.innerText;

	if(color_get_7 === "0"){
		imran_get_bill.style.color = "red";
	}else{imran_get_bill.style.color = "green";}
	if(color_due_7 !== "0"){
		imran_due_bill.style.color = "red";
	}else{imran_due_bill.style.color = "grey";}
//color
        //person8//
        const rubel = members["01922635500"].name;
        const rubel_cost = members["01922635500"].totalMeal * mealRate;
        const rubel_paid = members["01922635500"].paid_in_bazar;
        const rubel_get = (rubel_paid > rubel_cost) ? (rubel_paid - rubel_cost) : "0";
        const rubel_due = (rubel_paid < rubel_cost) ? (rubel_cost - rubel_paid) : "0";
        rubelName.innerText = `${rubel}`;
        rubel_meal_cost.innerText = `${rubel_cost}`;
        rubel_paid_bill.innerText = `${rubel_paid}`;
        rubel_get_bill.innerText = `${rubel_get}`;
        rubel_due_bill.innerText = `${rubel_due}`;
//color
	const color_get_8 = rubel_get_bill.innerText;
	const color_due_8 = rubel_due_bill.innerText;

	if(color_get_8 === "0"){
		rubel_get_bill.style.color = "red";
	}else{rubel_get_bill.style.color = "green";}
	if(color_due_8 !== "0"){
		rubel_due_bill.style.color = "red";
	}else{rubel_due_bill.style.color = "grey";}
//color
        //person8//
        const rikta = members["01400709854"].name;
        const rikta_cost = members["01400709854"].totalMeal * mealRate;
        const rikta_paid = members["01400709854"].paid_in_bazar;
        const rikta_get = (rikta_paid > rikta_cost) ? (rikta_paid - rikta_cost) : "0";
        const rikta_due = (rikta_paid < rikta_cost) ? (rikta_cost - rikta_paid) : "0";
        riktaName.innerText = `${rikta}`;
        rikta_meal_cost.innerText = `${rikta_cost}`;
        rikta_paid_bill.innerText = `${rikta_paid}`;
        rikta_get_bill.innerText = `${rikta_get}`;
        rikta_due_bill.innerText = `${rikta_due}`;
//color
	const color_get_9 = rikta_get_bill.innerText;
	const color_due_9 = rikta_due_bill.innerText;

	if(color_get_9 === "0"){
		rikta_get_bill.style.color = "red";
	}else{rikta_get_bill.style.color = "green";}
	if(color_due_9 !== "0"){
		rikta_due_bill.style.color = "red";
	}else{rikta_due_bill.style.color = "grey";}
//color
// specific row
        const cellPhone = document.getElementById(`${phoneNumber}`);
        if (cellPhone && phoneNumber){
            cellPhone.style.backgroundColor = "#F6E6C2";
            cellPhone.style.borderRadius = ".5rem";
            cellPhone.style.borderColor = "#28DF99";

        }

    }
    else{
        if (
            (phoneNumber.length === 11) && "01814843266" ||
            (phoneNumber.length === 11) && "01922362569" ||
            (phoneNumber.length === 11) && "01532023080" ||
            (phoneNumber.length === 11) && "01821245430" ||
            (phoneNumber.length === 11) && "01738393696" ||
            (phoneNumber.length === 11) && "01794942131" ||
            (phoneNumber.length === 11) && "01640454889" ||
            (phoneNumber.length === 11) && "01925315230" ||
            (phoneNumber.length === 11) && "01922635500" ||
            (phoneNumber.length === 11) && "01400709854"
            ){

                warningNotice.innerHTML = message;
                logPage.style.display = "none";
                warningPage.style.display = "flex";
                warningPage.classList.add("w-animation");
        }
    }
title.innerText = members[monthName];

}
clickButton.addEventListener("click", calculateMe);
function calculateMe() {
    registrarPage.style.display ="none";
    contentWrapper.style.display ="block";
    childOne.classList.add("show-me");
}
detailButtonOne.addEventListener("click",detailsList);
function detailsList() {
    childOne.classList.remove("show-me");
    childTwo.classList.add("show-me");
}
totalMealButton.addEventListener("click", mealListShow);

function mealListShow() {
    childTwo.classList.remove("show-me");
    childThree.classList.add("show-me");

}
totalButton.addEventListener("click",totalBill);
function totalBill() {
    childThree.classList.remove("show-me");
    childOne.classList.add("show-me");
}
detailButton.addEventListener("click",detailShowMe);
function detailShowMe() {
    childTwo.classList.add("show-me");
    childThree.classList.remove("show-me");
}
previousButton.addEventListener("click",previousShowMe);
function previousShowMe() {
    childThree.classList.remove("show-me");
    childFour.classList.add("show-me");
}
mealButton.addEventListener("click", mealShowMe);
function mealShowMe() {
    childFour.classList.remove("show-me");
    childThree.classList.add("show-me");
}
runningButton.addEventListener("click",runningShowMe);
function runningShowMe() {
    childFour.classList.remove("show-me");
    childFive.classList.add("show-me");
}
previousListButton.addEventListener("click", previousListShowMe);
function previousListShowMe() {
    childFive.classList.remove("show-me");
    childFour.classList.add("show-me");
}



