import React, { Component } from "react";
import * as THREE from "three";   



class App extends Component{
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(4, 4, 4,10,10,10);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    var bGeometry = new THREE.BufferGeometry();
    bGeometry.fromGeometry(geometry);
    scene.add(cube);

    var geometry2 = new THREE.CylinderGeometry( 5, 5, 8,30,30);
    var material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var cylinder = new THREE.Mesh( geometry2, material2 );
    var bGeometry2 = new THREE.BufferGeometry();
    bGeometry2.fromGeometry(geometry2);
    scene.add(cylinder);
    


    cube.position.x = 3;
    cube.position.y = 2;
    cube.position.z = 2.5;

    cylinder.position.x = -5;
    cylinder.position.y = -5;
    cylinder.position.z = -5;

    var a = new THREE.Vector3(0, 0, 0);
    camera.position.x = 1;
    camera.position.y = 1;
    camera.position.z = 10;
    camera.lookAt(a);
    
    findDistance(bGeometry,bGeometry2);
    
    var animate = function() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();
    


  }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}
export default App;



const findDistance = function(bGeometry,bGeometry2){
    var car=[];
    var car2=[];
    var minDistance=Math.pow(10,6);
    var diffx;
    var diffy;
    var diffz;
    var distance;
    var positions = bGeometry.getAttribute('position');
    var positions2 = bGeometry2.getAttribute('position');
    for(let k=0;k<positions.count;k++){
    var myPosition =  new THREE.Vector3(positions.array[k*3], positions.array[k*3 + 1], positions.array[k*3 + 2],);
    car[k]=myPosition;
    var myPosition2 =  new THREE.Vector3(positions2.array[k*3], positions2.array[k*3 + 1], positions2.array[k*3 + 2],);
    car2[k]=myPosition2;
    diffx=car[k].x-car2[k].x;
    diffy=car[k].y-car2[k].y;
    diffz=car[k].z-car2[k].z;
    distance=Math.pow(Math.pow(diffx,2)+Math.pow(diffy,2)+Math.pow(diffz,2),0.5);
    if(distance<=minDistance){
        minDistance=distance;
    }
    }
    console.log(minDistance);
}