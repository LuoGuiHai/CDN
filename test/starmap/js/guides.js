"use strict";THREE.ImageUtils.crossOrigin=null;var guidePointTexture=THREE.ImageUtils.loadTexture("https://cdn.jsdelivr.net/gh/LuoGuiHai/CDN/test/starmap/images/p_1.png");function createSpaceRadius(e,i,t){i=i||16777215,t=t||1;Math.sqrt(e);for(var r=2*Math.PI,s=r/180,n=[],o=0;o<r;o+=s){var a=Math.cos(o)*e,c=Math.sin(o)*e,l=new THREE.Vector3(a,c,0);n.push(l)}var u=new THREE.Geometry;u.vertices=n;var h=4e-6*(window.innerWidth*window.innerHeight),p=new THREE.ParticleBasicMaterial({color:i,size:h,sizeAttenuation:!1,map:guidePointTexture,blending:THREE.AdditiveBlending,depthTest:!1,depthWrite:!1}),d=new THREE.ParticleSystem(u,p);return d.update=function(){camera.position.z<2?this.visible=!1:camera.position.z<800?this.visible=!0:this.visible=!1},d.rotation.x=Math.PI/2,d}function createDistanceMeasurement(e,i){var t=new THREE.Geometry,r=.04*e.distanceTo(i),s=new THREE.Vector3(0,0,0),n=new THREE.Vector3(0,-r,0),o=e.clone().add(n),a=i.clone().add(n);e.add(s),i.add(s);e.clone().lerp(i,.5);vecAMargin=e.clone().lerp(i,.38),vecBMargin=i.clone().lerp(e,.38),t.vertices.push(o),t.vertices.push(e),t.vertices.push(vecAMargin),t.vertices.push(vecAMargin),t.vertices.push(vecBMargin),t.vertices.push(vecBMargin),t.vertices.push(i),t.vertices.push(a);var c=new THREE.Color(8947848),l=new THREE.Color(0);t.colors.push(c),t.colors.push(c),t.colors.push(c),t.colors.push(l),t.colors.push(l),t.colors.push(c),t.colors.push(c),t.colors.push(c);var u=new THREE.LineBasicMaterial({color:16777215,depthTest:!1,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});return new THREE.Line(t,u)}