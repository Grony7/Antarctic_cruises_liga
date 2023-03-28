/* eslint-disable */

export const initMap = () => {
  ymaps.ready(init);
};

const init = () => {
  const myMap = new ymaps.Map('map', {
    center: [59.938961, 30.323302],
    zoom: 17,
    type: "yandex#map",
    map3d: true,
    controls: ['zoomControl'],
  });
  const myPlacemark = new ymaps.Placemark(
      [59.93871645504667, 30.323047725021514],
    {
      hintContent: 'Наш офис',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './img/svg/marker.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-22, -11],
    });

  myMap.geoObjects.add(myPlacemark);
};
