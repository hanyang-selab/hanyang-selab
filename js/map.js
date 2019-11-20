$(document).on('pagecreate',function(){
if( navigator.geolocation == undefined ) {


   /*경고창을 출력하라*/

alert(" 위치 정보를 이용할 수 없습니다.")


/*나머지 구문을 해석할 필요없이 빠져나가라*/

return;

}


// 변수 ccc를 생성하여 지도에서 마커를 표시할 위도(-90~90사이),경도(-180~180사이)값을 대입한다(넣는다)

var ccc = new google.maps.LatLng(37.296456, 126.838862);



// 변수 ggg를 생성하여 해당부분의 구글지도를 대입한다

var mm = new google.maps.Map(

pos,//<--지도가 보여질 영역

{

zoom:18,// 숫자만큼 지도확대 (1~30)

center:ccc, // 해당 위치를 중앙에 배치

mapTypeId:google.maps.MapTypeId.ROADMAP //지도타입

}

);



// 위치에 마커 표시하기

var zzz = new google.maps.Marker(

{

position:ccc,

map:mm,

title:"우리 학원"

}

);

});
