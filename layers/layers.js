ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32717").setExtent([612960.905074, 9639285.952075, 617264.646135, 9641395.629066]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mapa_CATASTRAL_2 = new ol.format.GeoJSON();
var features_Mapa_CATASTRAL_2 = format_Mapa_CATASTRAL_2.readFeatures(json_Mapa_CATASTRAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Mapa_CATASTRAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapa_CATASTRAL_2.addFeatures(features_Mapa_CATASTRAL_2);
var lyr_Mapa_CATASTRAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapa_CATASTRAL_2, 
                style: style_Mapa_CATASTRAL_2,
                popuplayertitle: 'Mapa_CATASTRAL',
                interactive: true,
                title: '<img src="styles/legend/Mapa_CATASTRAL_2.png" /> Mapa_CATASTRAL'
            });
var format_CONTORNO_3 = new ol.format.GeoJSON();
var features_CONTORNO_3 = format_CONTORNO_3.readFeatures(json_CONTORNO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_CONTORNO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTORNO_3.addFeatures(features_CONTORNO_3);
var lyr_CONTORNO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTORNO_3, 
                style: style_CONTORNO_3,
                popuplayertitle: 'CONTORNO',
                interactive: true,
                title: '<img src="styles/legend/CONTORNO_3.png" /> CONTORNO'
            });
var format_Parcelas_4 = new ol.format.GeoJSON();
var features_Parcelas_4 = format_Parcelas_4.readFeatures(json_Parcelas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Parcelas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_4.addFeatures(features_Parcelas_4);
var lyr_Parcelas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelas_4, 
                style: style_Parcelas_4,
                popuplayertitle: 'Parcelas',
                interactive: true,
                title: '<img src="styles/legend/Parcelas_4.png" /> Parcelas'
            });
var format_Zonas_5 = new ol.format.GeoJSON();
var features_Zonas_5 = format_Zonas_5.readFeatures(json_Zonas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_Zonas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonas_5.addFeatures(features_Zonas_5);
var lyr_Zonas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonas_5, 
                style: style_Zonas_5,
                popuplayertitle: 'Zonas  ',
                interactive: true,
    title: 'Zonas  <br />\
    <img src="styles/legend/Zonas_5_0.png" /> Riesgo de Inundación<br />\
    <img src="styles/legend/Zonas_5_1.png" /> Zona Segura<br />\
    <img src="styles/legend/Zonas_5_2.png" /> <br />' });
var format_lotes_urbanos_6 = new ol.format.GeoJSON();
var features_lotes_urbanos_6 = format_lotes_urbanos_6.readFeatures(json_lotes_urbanos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_lotes_urbanos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotes_urbanos_6.addFeatures(features_lotes_urbanos_6);
var lyr_lotes_urbanos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotes_urbanos_6, 
                style: style_lotes_urbanos_6,
                popuplayertitle: 'lotes_urbanos',
                interactive: true,
    title: 'lotes_urbanos<br />\
    <img src="styles/legend/lotes_urbanos_6_0.png" /> Comercial<br />\
    <img src="styles/legend/lotes_urbanos_6_1.png" /> Educacion<br />\
    <img src="styles/legend/lotes_urbanos_6_2.png" /> Residencial<br />\
    <img src="styles/legend/lotes_urbanos_6_3.png" /> Salud<br />\
    <img src="styles/legend/lotes_urbanos_6_4.png" /> Social<br />\
    <img src="styles/legend/lotes_urbanos_6_5.png" /> Vacante<br />' });
var format_red_vial_7 = new ol.format.GeoJSON();
var features_red_vial_7 = format_red_vial_7.readFeatures(json_red_vial_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_red_vial_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_7.addFeatures(features_red_vial_7);
var lyr_red_vial_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_7, 
                style: style_red_vial_7,
                popuplayertitle: 'red_vial ',
                interactive: true,
                title: '<img src="styles/legend/red_vial_7.png" /> red_vial '
            });
var format_hidrografia_8 = new ol.format.GeoJSON();
var features_hidrografia_8 = format_hidrografia_8.readFeatures(json_hidrografia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_hidrografia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_8.addFeatures(features_hidrografia_8);
var lyr_hidrografia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_8, 
                style: style_hidrografia_8,
                popuplayertitle: 'hidrografia ',
                interactive: true,
                title: '<img src="styles/legend/hidrografia_8.png" /> hidrografia '
            });
var format_equipamientos_9 = new ol.format.GeoJSON();
var features_equipamientos_9 = format_equipamientos_9.readFeatures(json_equipamientos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_equipamientos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipamientos_9.addFeatures(features_equipamientos_9);
var lyr_equipamientos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipamientos_9, 
                style: style_equipamientos_9,
                popuplayertitle: 'equipamientos',
                interactive: true,
    title: 'equipamientos<br />\
    <img src="styles/legend/equipamientos_9_0.png" /> Educacion<br />\
    <img src="styles/legend/equipamientos_9_1.png" /> Salud<br />' });
var format_buffer_salud_600m_10 = new ol.format.GeoJSON();
var features_buffer_salud_600m_10 = format_buffer_salud_600m_10.readFeatures(json_buffer_salud_600m_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_buffer_salud_600m_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_salud_600m_10.addFeatures(features_buffer_salud_600m_10);
var lyr_buffer_salud_600m_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_salud_600m_10, 
                style: style_buffer_salud_600m_10,
                popuplayertitle: 'buffer_salud_600m',
                interactive: true,
                title: '<img src="styles/legend/buffer_salud_600m_10.png" /> buffer_salud_600m'
            });
var format_buffer_educacion_300m_11 = new ol.format.GeoJSON();
var features_buffer_educacion_300m_11 = format_buffer_educacion_300m_11.readFeatures(json_buffer_educacion_300m_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_buffer_educacion_300m_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_educacion_300m_11.addFeatures(features_buffer_educacion_300m_11);
var lyr_buffer_educacion_300m_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_educacion_300m_11, 
                style: style_buffer_educacion_300m_11,
                popuplayertitle: 'buffer_educacion_300m',
                interactive: true,
                title: '<img src="styles/legend/buffer_educacion_300m_11.png" /> buffer_educacion_300m'
            });
var format_areas_verdes_12 = new ol.format.GeoJSON();
var features_areas_verdes_12 = format_areas_verdes_12.readFeatures(json_areas_verdes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32717'});
var jsonSource_areas_verdes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_verdes_12.addFeatures(features_areas_verdes_12);
var lyr_areas_verdes_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_verdes_12, 
                style: style_areas_verdes_12,
                popuplayertitle: 'areas_verdes',
                interactive: true,
    title: 'areas_verdes<br />\
    <img src="styles/legend/areas_verdes_12_0.png" /> Estadio<br />\
    <img src="styles/legend/areas_verdes_12_1.png" /> Parque<br />\
    <img src="styles/legend/areas_verdes_12_2.png" /> Canchas <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Mapa_CATASTRAL_2.setVisible(true);lyr_CONTORNO_3.setVisible(true);lyr_Parcelas_4.setVisible(true);lyr_Zonas_5.setVisible(true);lyr_lotes_urbanos_6.setVisible(true);lyr_red_vial_7.setVisible(true);lyr_hidrografia_8.setVisible(true);lyr_equipamientos_9.setVisible(true);lyr_buffer_salud_600m_10.setVisible(true);lyr_buffer_educacion_300m_11.setVisible(true);lyr_areas_verdes_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Mapa_CATASTRAL_2,lyr_CONTORNO_3,lyr_Parcelas_4,lyr_Zonas_5,lyr_lotes_urbanos_6,lyr_red_vial_7,lyr_hidrografia_8,lyr_equipamientos_9,lyr_buffer_salud_600m_10,lyr_buffer_educacion_300m_11,lyr_areas_verdes_12];
lyr_Mapa_CATASTRAL_2.set('fieldAliases', {'fid': 'fid', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', ' cota_msnm': ' cota_msnm', 'cod_predio': 'cod_predio', });
lyr_CONTORNO_3.set('fieldAliases', {'id': 'id', });
lyr_Parcelas_4.set('fieldAliases', {'fid': 'fid', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', ' cota_msnm': ' cota_msnm', 'cod_predio': 'cod_predio', });
lyr_Zonas_5.set('fieldAliases', {'fid': 'fid', 'uso': 'uso', 'n_habitantes': 'n_habitantes', 'area_m2 ': 'area_m2 ', 'manzana ': 'manzana ', 'id_lote': 'id_lote', 'valor_m2': 'valor_m2', 'cota_msnm': 'cota_msnm', });
lyr_lotes_urbanos_6.set('fieldAliases', {'fid': 'fid', 'uso': 'uso', 'n_habitantes': 'n_habitantes', 'area_m2 ': 'area_m2 ', 'manzana ': 'manzana ', 'id_lote': 'id_lote', 'valor_m2': 'valor_m2', 'cota_msnm': 'cota_msnm', });
lyr_red_vial_7.set('fieldAliases', {'fid': 'fid', 'tipo_via': 'tipo_via', ' ancho_m ': ' ancho_m ', 'nombre': 'nombre', 'sentido': 'sentido', });
lyr_hidrografia_8.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', ' cota_msnm': ' cota_msnm', 'caudal_m3s': 'caudal_m3s', 'nombre': 'nombre', });
lyr_equipamientos_9.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', 'capacidad ': 'capacidad ', 'nombre': 'nombre', 'subtipo': 'subtipo', });
lyr_buffer_salud_600m_10.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', 'capacidad ': 'capacidad ', 'nombre': 'nombre', 'subtipo': 'subtipo', 'ringId': 'ringId', 'distance': 'distance', });
lyr_buffer_educacion_300m_11.set('fieldAliases', {'fid': 'fid', 'tipo': 'tipo', 'capacidad ': 'capacidad ', 'nombre': 'nombre', 'subtipo': 'subtipo', 'ringId': 'ringId', 'distance': 'distance', });
lyr_areas_verdes_12.set('fieldAliases', {'fid': 'fid', 'area_m2': 'area_m2', 'estado ': 'estado ', 'nombre': 'nombre', 'tipo': 'tipo', 'cota_msnm': 'cota_msnm', });
lyr_Mapa_CATASTRAL_2.set('fieldImages', {'fid': '', 'uso_suelo': '', 'area_m2': '', 'valor_m2': '', ' cota_msnm': '', 'cod_predio': '', });
lyr_CONTORNO_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Parcelas_4.set('fieldImages', {'fid': '', 'uso_suelo': '', 'area_m2': '', 'valor_m2': '', ' cota_msnm': '', 'cod_predio': '', });
lyr_Zonas_5.set('fieldImages', {'fid': 'TextEdit', 'uso': 'TextEdit', 'n_habitantes': 'TextEdit', 'area_m2 ': 'TextEdit', 'manzana ': 'TextEdit', 'id_lote': 'TextEdit', 'valor_m2': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_lotes_urbanos_6.set('fieldImages', {'fid': 'TextEdit', 'uso': 'TextEdit', 'n_habitantes': 'TextEdit', 'area_m2 ': 'TextEdit', 'manzana ': 'TextEdit', 'id_lote': 'TextEdit', 'valor_m2': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_red_vial_7.set('fieldImages', {'fid': 'TextEdit', 'tipo_via': 'TextEdit', ' ancho_m ': 'TextEdit', 'nombre': 'TextEdit', 'sentido': 'TextEdit', });
lyr_hidrografia_8.set('fieldImages', {'fid': 'TextEdit', 'tipo': 'TextEdit', ' cota_msnm': 'TextEdit', 'caudal_m3s': 'TextEdit', 'nombre': 'TextEdit', });
lyr_equipamientos_9.set('fieldImages', {'fid': 'TextEdit', 'tipo': 'TextEdit', 'capacidad ': 'Range', 'nombre': 'TextEdit', 'subtipo': 'TextEdit', });
lyr_buffer_salud_600m_10.set('fieldImages', {'fid': '', 'tipo': '', 'capacidad ': '', 'nombre': '', 'subtipo': '', 'ringId': '', 'distance': '', });
lyr_buffer_educacion_300m_11.set('fieldImages', {'fid': '', 'tipo': '', 'capacidad ': '', 'nombre': '', 'subtipo': '', 'ringId': '', 'distance': '', });
lyr_areas_verdes_12.set('fieldImages', {'fid': 'TextEdit', 'area_m2': 'TextEdit', 'estado ': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'cota_msnm': '', });
lyr_Mapa_CATASTRAL_2.set('fieldLabels', {'fid': 'hidden field', 'uso_suelo': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'valor_m2': 'inline label - always visible', ' cota_msnm': 'inline label - always visible', 'cod_predio': 'inline label - always visible', });
lyr_CONTORNO_3.set('fieldLabels', {'id': 'hidden field', });
lyr_Parcelas_4.set('fieldLabels', {'fid': 'hidden field', 'uso_suelo': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'valor_m2': 'inline label - always visible', ' cota_msnm': 'inline label - always visible', 'cod_predio': 'inline label - always visible', });
lyr_Zonas_5.set('fieldLabels', {'fid': 'hidden field', 'uso': 'inline label - always visible', 'n_habitantes': 'inline label - always visible', 'area_m2 ': 'inline label - always visible', 'manzana ': 'inline label - always visible', 'id_lote': 'inline label - always visible', 'valor_m2': 'inline label - always visible', 'cota_msnm': 'inline label - always visible', });
lyr_lotes_urbanos_6.set('fieldLabels', {'fid': 'hidden field', 'uso': 'inline label - always visible', 'n_habitantes': 'inline label - always visible', 'area_m2 ': 'inline label - always visible', 'manzana ': 'inline label - always visible', 'id_lote': 'inline label - always visible', 'valor_m2': 'inline label - always visible', 'cota_msnm': 'inline label - always visible', });
lyr_red_vial_7.set('fieldLabels', {'fid': 'hidden field', 'tipo_via': 'inline label - always visible', ' ancho_m ': 'inline label - always visible', 'nombre': 'inline label - always visible', 'sentido': 'inline label - always visible', });
lyr_hidrografia_8.set('fieldLabels', {'fid': 'hidden field', 'tipo': 'inline label - always visible', ' cota_msnm': 'inline label - always visible', 'caudal_m3s': 'inline label - always visible', 'nombre': 'inline label - always visible', });
lyr_equipamientos_9.set('fieldLabels', {'fid': 'hidden field', 'tipo': 'inline label - always visible', 'capacidad ': 'inline label - always visible', 'nombre': 'inline label - always visible', 'subtipo': 'inline label - always visible', });
lyr_buffer_salud_600m_10.set('fieldLabels', {'fid': 'hidden field', 'tipo': 'inline label - always visible', 'capacidad ': 'inline label - always visible', 'nombre': 'inline label - always visible', 'subtipo': 'inline label - always visible', 'ringId': 'inline label - always visible', 'distance': 'inline label - always visible', });
lyr_buffer_educacion_300m_11.set('fieldLabels', {'fid': 'hidden field', 'tipo': 'inline label - always visible', 'capacidad ': 'inline label - always visible', 'nombre': 'inline label - always visible', 'subtipo': 'inline label - always visible', 'ringId': 'inline label - always visible', 'distance': 'inline label - always visible', });
lyr_areas_verdes_12.set('fieldLabels', {'fid': 'hidden field', 'area_m2': 'inline label - always visible', 'estado ': 'inline label - always visible', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'cota_msnm': 'inline label - always visible', });
lyr_areas_verdes_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});