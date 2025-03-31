//Promise.js
function syncWork(){
	// console.log("시작");
	const delayUntil= new Date().getTime();//현재시간(밀리초)
	const twoSecLat= delayUntil+2000;//현재시간에 +2초
	//현재시간에서2초가지날때까지반복
	while(Date.now()<twoSecLat){
		
	}
	// console.log("완료");
}
// console.log("안녕");
// syncWork();
// console.log("세상아");
//비동기 프로그래밍

function asyncWork(){
	setTimeout(() => {
		console.log("completed");
	}, 2000);
	console.log("작업시작!");
	//순서대로 ㄴㄴ 그냥 다같이 구동. 그래서 작업시작 2초뒤에 완료뜸

}
// asyncWork();
//아주 무식한 callback 함수
function callback(){
	setTimeout(() => {
		console.log("작업완료");
		setTimeout(() => {
			console.log("작업완료222222");
			setTimeout(() => {
				console.log("작업완료 333333");
				setTimeout(() => {
					console.log("작업완료 444444");
				}, 2000);
			}, 2000);
		}, 2000);
	}, 2000);
	console.log("꽁끼낑깡끼낑깡꽁");
}
// callback();

// promise로 해결
//resolve : call when your compiler successfully worked
//reject : call when your comiler exploded;

// const promise= new Promise((resolve,reject) =>{
// 	setTimeout(() => {//2초 후에 resolve 메소드실행
// 		resolve("성공!");
// 	}, 2000);
// });
//resolve 함수가 실행되면 then도 실행된다. 
//resolve의 인수값이 then->콜백함수의 매개변수로 전달됨.
//그래서 resolve 안에 있는 성공이라는 녀석이 message로 나옴 
// promise.then((message)=>{
// 	console.log(message);
// });

const getPromise1 = (second)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			resolve(`프로미스1, ${second}초`);
		}, second*1000);
	});
};
const getPromise2 = (second)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			resolve(`프로미스2, ${second}초`);
		}, second*1000);
	});
};
// const getPromise3 = (second)=>{
// 	return new Promise((resolve, reject)=>{
// 		setTimeout(() => {
// 			resolve(`프로미스3, ${second}초`);
// 		}, second*1000);
// 	});
// };
// getPromise1(2).then((message)=>{
// 	console.log(message);
// 	return getPromise2(2);
// })
// .then((message)=>{
// 	console.log(message);
// });

//reject
const promise2 = new Promise((resolve, reject)=>{
	setTimeout(() => {
		reject("error");
	}, 2000);
});
promise2.catch((message)=>{
	console.log(message);
	
})
.catch((error)=>{
	console.log(error);
})
//성공했든안했든무조건실행
.finally(()=>{
	console.log("마지막");
});
