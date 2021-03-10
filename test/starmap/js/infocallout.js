"use strict";function makeSunEarthDiagram(){var e=new THREE.Object3D,a=KMToLY(15e7),t=new THREE.Geometry;t.vertices.push(new THREE.Vector3(0,0,0)),t.vertices.push(new THREE.Vector3(a,0,0));var r=new THREE.Line(t,new THREE.LineBasicMaterial({color:16777215}));e.add(r);var n=new THREE.Gyroscope;n.position.x=a,e.add(n);var i=makeClamper(25e-7);n.add(i),n.name="Sun",attachMarker(n,.001);var o=new THREE.Gyroscope;e.add(o);var s=makeClamper(3e-6);o.add(s),translating.add(e)}var clamperTexture=THREE.ImageUtils.loadTexture("https://cdn.jsdelivr.net/gh/LuoGuiHai/CDN/test/starmap/images/clamper.png"),clamperMaterial=new THREE.MeshBasicMaterial({map:clamperTexture,depthTest:!1,depthWrite:!1,transparent:!0,side:THREE.DoubleSide,blending:THREE.AdditiveBlending});function makeClamper(e){clamperTexture.anisotropy=maxAniso;var a=new THREE.Mesh(new THREE.PlaneGeometry(1,1),clamperMaterial);return a.scale.setLength(e),a}function displaySunEarthDiagram(){}function highlightStarHeat(){toggleHeatVision(!0),setTimeout(function(){toggleHeatVision(!1)},6e3)}function highlightMilkyWay(){toggleGalacticMeasurement(!0),setTimeout(function(){toggleGalacticMeasurement(!1)},6e3)}