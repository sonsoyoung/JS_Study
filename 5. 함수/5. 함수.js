5. 함수

// 1. 선언적 함수
function 함수(){
	
}

// 2. 익명 함수
var 함수 = function (){
	
}

// 3. 선언적 함수와 익명 함수 차이
<script>
	var 함수 = function(){ alert('함수 A') }		// 2
	function 함수(){ alert('함수 A') }			// 1

	함수();										// 함수 A를 출력
</script>



// 과제


