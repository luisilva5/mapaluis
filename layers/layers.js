ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8911674.219529, -369325.802742, -8887813.276742, -357629.262160]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Parcelas_2 = new ol.format.GeoJSON();
var features_Parcelas_2 = format_Parcelas_2.readFeatures(json_Parcelas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas_2.addFeatures(features_Parcelas_2);
var lyr_Parcelas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelas_2, 
                style: style_Parcelas_2,
                popuplayertitle: 'Parcelas',
                interactive: true,
                title: '<img src="styles/legend/Parcelas_2.png" /> Parcelas'
            });
var format_Zonasdeinundacion_3 = new ol.format.GeoJSON();
var features_Zonasdeinundacion_3 = format_Zonasdeinundacion_3.readFeatures(json_Zonasdeinundacion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasdeinundacion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasdeinundacion_3.addFeatures(features_Zonasdeinundacion_3);
var lyr_Zonasdeinundacion_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonasdeinundacion_3, 
                style: style_Zonasdeinundacion_3,
                popuplayertitle: 'Zonas de inundacion',
                interactive: true,
    title: 'Zonas de inundacion<br />\
    <img src="styles/legend/Zonasdeinundacion_3_0.png" /> Zona de Riesgo<br />\
    <img src="styles/legend/Zonasdeinundacion_3_1.png" /> Zona Segura<br />' });
var format_red_vial_4 = new ol.format.GeoJSON();
var features_red_vial_4 = format_red_vial_4.readFeatures(json_red_vial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_vial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_4.addFeatures(features_red_vial_4);
var lyr_red_vial_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_4, 
                style: style_red_vial_4,
                popuplayertitle: 'red_vial ',
                interactive: true,
                title: '<img src="styles/legend/red_vial_4.png" /> red_vial '
            });
var format_hidrografia_5 = new ol.format.GeoJSON();
var features_hidrografia_5 = format_hidrografia_5.readFeatures(json_hidrografia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_5.addFeatures(features_hidrografia_5);
var lyr_hidrografia_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_5, 
                style: style_hidrografia_5,
                popuplayertitle: 'hidrografia',
                interactive: true,
                title: '<img src="styles/legend/hidrografia_5.png" /> hidrografia'
            });
var format_equipamientos_6 = new ol.format.GeoJSON();
var features_equipamientos_6 = format_equipamientos_6.readFeatures(json_equipamientos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_equipamientos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipamientos_6.addFeatures(features_equipamientos_6);
var lyr_equipamientos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipamientos_6, 
                style: style_equipamientos_6,
                popuplayertitle: 'equipamientos',
                interactive: true,
    title: 'equipamientos<br />\
    <img src="styles/legend/equipamientos_6_0.png" /> Educacion<br />\
    <img src="styles/legend/equipamientos_6_1.png" /> Salud<br />' });
var format_MANZANA_CATASTRAL_7 = new ol.format.GeoJSON();
var features_MANZANA_CATASTRAL_7 = format_MANZANA_CATASTRAL_7.readFeatures(json_MANZANA_CATASTRAL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANA_CATASTRAL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANA_CATASTRAL_7.addFeatures(features_MANZANA_CATASTRAL_7);
var lyr_MANZANA_CATASTRAL_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANZANA_CATASTRAL_7, 
                style: style_MANZANA_CATASTRAL_7,
                popuplayertitle: 'MANZANA_CATASTRAL',
                interactive: true,
                title: '<img src="styles/legend/MANZANA_CATASTRAL_7.png" /> MANZANA_CATASTRAL'
            });
var format_machala_catastral_8 = new ol.format.GeoJSON();
var features_machala_catastral_8 = format_machala_catastral_8.readFeatures(json_machala_catastral_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_machala_catastral_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_machala_catastral_8.addFeatures(features_machala_catastral_8);
var lyr_machala_catastral_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_machala_catastral_8, 
                style: style_machala_catastral_8,
                popuplayertitle: 'machala_catastral',
                interactive: true,
                title: '<img src="styles/legend/machala_catastral_8.png" /> machala_catastral'
            });
var format_Buffer600mSalud_9 = new ol.format.GeoJSON();
var features_Buffer600mSalud_9 = format_Buffer600mSalud_9.readFeatures(json_Buffer600mSalud_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer600mSalud_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer600mSalud_9.addFeatures(features_Buffer600mSalud_9);
var lyr_Buffer600mSalud_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer600mSalud_9, 
                style: style_Buffer600mSalud_9,
                popuplayertitle: 'Buffer 600m Salud',
                interactive: true,
                title: '<img src="styles/legend/Buffer600mSalud_9.png" /> Buffer 600m Salud'
            });
var format_Buffer300mEducacion_10 = new ol.format.GeoJSON();
var features_Buffer300mEducacion_10 = format_Buffer300mEducacion_10.readFeatures(json_Buffer300mEducacion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer300mEducacion_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer300mEducacion_10.addFeatures(features_Buffer300mEducacion_10);
var lyr_Buffer300mEducacion_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer300mEducacion_10, 
                style: style_Buffer300mEducacion_10,
                popuplayertitle: 'Buffer 300m Educacion',
                interactive: true,
                title: '<img src="styles/legend/Buffer300mEducacion_10.png" /> Buffer 300m Educacion'
            });
var format_areas_verdes_11 = new ol.format.GeoJSON();
var features_areas_verdes_11 = format_areas_verdes_11.readFeatures(json_areas_verdes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_verdes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_verdes_11.addFeatures(features_areas_verdes_11);
var lyr_areas_verdes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_verdes_11, 
                style: style_areas_verdes_11,
                popuplayertitle: 'areas_verdes',
                interactive: true,
    title: 'areas_verdes<br />\
    <img src="styles/legend/areas_verdes_11_0.png" /> Parques<br />\
    <img src="styles/legend/areas_verdes_11_1.png" /> Canchas deportivas<br />\
    <img src="styles/legend/areas_verdes_11_2.png" /> Canchon<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Parcelas_2.setVisible(true);lyr_Zonasdeinundacion_3.setVisible(true);lyr_red_vial_4.setVisible(true);lyr_hidrografia_5.setVisible(true);lyr_equipamientos_6.setVisible(true);lyr_MANZANA_CATASTRAL_7.setVisible(true);lyr_machala_catastral_8.setVisible(true);lyr_Buffer600mSalud_9.setVisible(true);lyr_Buffer300mEducacion_10.setVisible(true);lyr_areas_verdes_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_Parcelas_2,lyr_Zonasdeinundacion_3,lyr_red_vial_4,lyr_hidrografia_5,lyr_equipamientos_6,lyr_MANZANA_CATASTRAL_7,lyr_machala_catastral_8,lyr_Buffer600mSalud_9,lyr_Buffer300mEducacion_10,lyr_areas_verdes_11];
lyr_Parcelas_2.set('fieldAliases', {'fid': 'fid', 'cod_predio ': 'cod_predio ', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', 'cota_msnm': 'cota_msnm', });
lyr_Zonasdeinundacion_3.set('fieldAliases', {'fid': 'fid', 'id_lote': 'id_lote', 'manzana': 'manzana', 'uso ': 'uso ', 'n_habitantes': 'n_habitantes', 'area_m2 ': 'area_m2 ', 'cota_msnm': 'cota_msnm', });
lyr_red_vial_4.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo_via ': 'tipo_via ', 'ancho_m': 'ancho_m', 'sentido': 'sentido', });
lyr_hidrografia_5.set('fieldAliases', {'fid': 'fid', 'nombre ': 'nombre ', 'tipo': 'tipo', 'cota_msnm ': 'cota_msnm ', 'caudal_m3s ': 'caudal_m3s ', });
lyr_equipamientos_6.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'subtipo': 'subtipo', 'capacidad ': 'capacidad ', });
lyr_MANZANA_CATASTRAL_7.set('fieldAliases', {'fid': 'fid', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', ' cota_msnm': ' cota_msnm', 'cod_predio': 'cod_predio', });
lyr_machala_catastral_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_CANTON': 'DPA_CANTON', 'DPA_PARROQ': 'DPA_PARROQ', 'ZONA_COD': 'ZONA_COD', 'SECTOR_COD': 'SECTOR_COD', 'MZN_COD': 'MZN_COD', 'MZN_GEOM': 'MZN_GEOM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'CLAVE': 'CLAVE', 'MANZANA_SO': 'MANZANA_SO', 'BARRIO': 'BARRIO', 'fcode': 'fcode', });
lyr_Buffer600mSalud_9.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'subtipo': 'subtipo', 'capacidad ': 'capacidad ', 'ringId': 'ringId', 'distance': 'distance', });
lyr_Buffer300mEducacion_10.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'subtipo': 'subtipo', 'capacidad ': 'capacidad ', 'ringId': 'ringId', 'distance': 'distance', });
lyr_areas_verdes_11.set('fieldAliases', {'fid': 'fid', 'nombre ': 'nombre ', 'tipo ': 'tipo ', 'area_m2': 'area_m2', 'estado ': 'estado ', 'n_habitantes': 'n_habitantes', });
lyr_Parcelas_2.set('fieldImages', {'fid': 'TextEdit', 'cod_predio ': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_Zonasdeinundacion_3.set('fieldImages', {'fid': 'TextEdit', 'id_lote': 'TextEdit', 'manzana': 'TextEdit', 'uso ': 'ValueMap', 'n_habitantes': 'TextEdit', 'area_m2 ': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_red_vial_4.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo_via ': 'TextEdit', 'ancho_m': 'TextEdit', 'sentido': 'TextEdit', });
lyr_hidrografia_5.set('fieldImages', {'fid': 'TextEdit', 'nombre ': 'TextEdit', 'tipo': 'TextEdit', 'cota_msnm ': 'TextEdit', 'caudal_m3s ': 'TextEdit', });
lyr_equipamientos_6.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'subtipo': 'TextEdit', 'capacidad ': 'TextEdit', });
lyr_MANZANA_CATASTRAL_7.set('fieldImages', {'fid': '', 'uso_suelo': '', 'area_m2': '', 'valor_m2': '', ' cota_msnm': '', 'cod_predio': '', });
lyr_machala_catastral_8.set('fieldImages', {'fid': '', 'OBJECTID': '', 'DPA_PROVIN': '', 'DPA_CANTON': '', 'DPA_PARROQ': '', 'ZONA_COD': '', 'SECTOR_COD': '', 'MZN_COD': '', 'MZN_GEOM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'CLAVE': '', 'MANZANA_SO': '', 'BARRIO': '', 'fcode': '', });
lyr_Buffer600mSalud_9.set('fieldImages', {'fid': '', 'nombre': '', 'tipo': '', 'subtipo': '', 'capacidad ': '', 'ringId': '', 'distance': '', });
lyr_Buffer300mEducacion_10.set('fieldImages', {'fid': '', 'nombre': '', 'tipo': '', 'subtipo': '', 'capacidad ': '', 'ringId': '', 'distance': '', });
lyr_areas_verdes_11.set('fieldImages', {'fid': 'TextEdit', 'nombre ': 'TextEdit', 'tipo ': 'TextEdit', 'area_m2': 'TextEdit', 'estado ': 'TextEdit', 'n_habitantes': 'TextEdit', });
lyr_Parcelas_2.set('fieldLabels', {'fid': 'hidden field', 'cod_predio ': 'inline label - always visible', 'uso_suelo': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'valor_m2': 'inline label - always visible', 'cota_msnm': 'inline label - always visible', });
lyr_Zonasdeinundacion_3.set('fieldLabels', {'fid': 'hidden field', 'id_lote': 'inline label - always visible', 'manzana': 'inline label - always visible', 'uso ': 'inline label - always visible', 'n_habitantes': 'inline label - always visible', 'area_m2 ': 'inline label - always visible', 'cota_msnm': 'inline label - always visible', });
lyr_red_vial_4.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo_via ': 'inline label - always visible', 'ancho_m': 'inline label - always visible', 'sentido': 'inline label - always visible', });
lyr_hidrografia_5.set('fieldLabels', {'fid': 'hidden field', 'nombre ': 'inline label - always visible', 'tipo': 'inline label - always visible', 'cota_msnm ': 'inline label - always visible', 'caudal_m3s ': 'inline label - always visible', });
lyr_equipamientos_6.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'subtipo': 'inline label - always visible', 'capacidad ': 'inline label - always visible', });
lyr_MANZANA_CATASTRAL_7.set('fieldLabels', {'fid': 'hidden field', 'uso_suelo': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'valor_m2': 'inline label - always visible', ' cota_msnm': 'inline label - always visible', 'cod_predio': 'inline label - always visible', });
lyr_machala_catastral_8.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'inline label - always visible', 'DPA_PROVIN': 'inline label - always visible', 'DPA_CANTON': 'inline label - always visible', 'DPA_PARROQ': 'inline label - always visible', 'ZONA_COD': 'inline label - always visible', 'SECTOR_COD': 'inline label - always visible', 'MZN_COD': 'inline label - always visible', 'MZN_GEOM': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', 'CLAVE': 'inline label - always visible', 'MANZANA_SO': 'inline label - always visible', 'BARRIO': 'inline label - always visible', 'fcode': 'inline label - always visible', });
lyr_Buffer600mSalud_9.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'subtipo': 'inline label - always visible', 'capacidad ': 'inline label - always visible', 'ringId': 'inline label - always visible', 'distance': 'inline label - always visible', });
lyr_Buffer300mEducacion_10.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - always visible', 'tipo': 'inline label - always visible', 'subtipo': 'inline label - always visible', 'capacidad ': 'inline label - always visible', 'ringId': 'inline label - always visible', 'distance': 'inline label - always visible', });
lyr_areas_verdes_11.set('fieldLabels', {'fid': 'hidden field', 'nombre ': 'inline label - always visible', 'tipo ': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'estado ': 'inline label - always visible', 'n_habitantes': 'inline label - always visible', });
lyr_areas_verdes_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});