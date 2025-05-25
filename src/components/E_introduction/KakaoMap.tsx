import { useEffect } from 'react';

declare global {
    interface Window {
        kakao: any;
    }
}

export const KakaoMap = () => {
    useEffect(() => {
        const scriptId = 'kakao-map-script';
        const isScriptExist = document.getElementById(scriptId);

        const initMap = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                center: new window.kakao.maps.LatLng(37.8640059697997 , 127.723833214939),
                level: 1,
                };

                const map = new window.kakao.maps.Map(container, options);
                const marker = new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng(37.8640059697997 , 127.723833214939),
                });

                marker.setMap(map);

                const infoWindow = new window.kakao.maps.InfoWindow({
                    content: '<div style="width:120px;height:20px;background-color:white;color:black;font-size:14px;font-weight:bold;">남춘천역 문화공간역</div>',
                    position: new window.kakao.maps.LatLng(37.8640059697997 , 127.723833214939),
                });

                infoWindow.open(map, marker);
            });
        };

        if (!isScriptExist) {
            const script = document.createElement('script');
                script.id = scriptId;
                script.src =
                    'https://dapi.kakao.com/v2/maps/sdk.js?appkey=fd0147869fe359badcb4156f4f985010&autoload=false';
                script.async = true;
                script.onload = initMap;
                document.head.appendChild(script);
        } else {
            if (window.kakao?.maps) {
                window.kakao.maps.load(initMap);
            } else {
                isScriptExist.addEventListener('load', initMap);
            }
        }
    }, []);

    return <div id="map" style={{ width: '100%', height: '50vh' }} />;
};