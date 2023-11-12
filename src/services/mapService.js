import ymaps from 'ymaps';
//eslint-disable-next-line
export async function getPosition (container, position) {
    const mapLibrary = await ymaps.load();
    
    let map = new mapLibrary.Map(container, {
        center: position,
        zoom: 18
    });

    let placemark = new mapLibrary.Placemark(position, {}, {

    });

    map.geoObjects.add(placemark);
}

