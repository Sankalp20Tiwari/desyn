"use client"

import { fabric } from "fabric";
import LeftSideBar from "@/components/LeftSideBar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";
import { useEffect, useRef, useState } from "react";
import { handleCanvaseMouseMove, handleCanvasMouseDown, handleCanvasMouseUp, handleCanvasObjectModified, handleResize, initializeFabric, renderCanvas } from "@/lib/canvas";
import { ActiveElement } from "@/types/type";
import { useMutation, useStorage } from "@liveblocks/react";
import { defaultNavElement } from "@/constants";
import { handleDelete } from "@/lib/key-events";


export default function Page() {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef<boolean>(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>('rectangle');
  const activeObjectRef = useRef<fabric.Object | null>(null);
  const canvasObjects = useStorage((root)=>root.canvasObjects);

  const syncShapeInStorage = useMutation(({storage}, object)  => {
    if(!object) return;

    const {objectId} = object;

    const shapeData = object.toJSON()
    shapeData.objectId = objectId;

    const canvasObjects = storage.get("canvasObjects");
    console.log("canvasObjects",canvasObjects)

    canvasObjects.set(objectId,shapeData);
  },[])

  const [activeElement, setActiveElement] = useState<ActiveElement>({
    name: '',
    value: '',
    icon: ''
  })

  const deleteAllShapes = useMutation(({storage}) => {
    const canvasObjects = storage.get("canvasObjects");

    if (!canvasObjects || canvasObjects.size === 0) return true;
    
    for(const [key,value] of canvasObjects.entries()){
      canvasObjects.delete(key)
    }

    return canvasObjects.size === 0;
  },[])

  const deleteShapeFromStorage = useMutation(({storage}, objectId)=>{
    const canvasObjects = storage.get("canvasObjects");

    canvasObjects.delete(objectId)
  },[])

  const handleActiveElement = (element: ActiveElement) => {
    setActiveElement(element)
    
    switch (element?.value) {
      case 'reset':
          deleteAllShapes()
          fabricRef.current?.clear();
          setActiveElement(defaultNavElement)
        break;

      case 'delete':
          handleDelete(fabricRef.current as any , deleteShapeFromStorage)
          setActiveElement(defaultNavElement)
        break;
      default:
        break;
    }
  }


  useEffect(()=>{
    const canvas = initializeFabric({canvasRef,fabricRef})

    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        selectedShapeRef,
        shapeRef
      })
    })

    canvas.on("mouse:move", (options) => {
      handleCanvaseMouseMove({
        options,
        canvas,
        isDrawing,
        selectedShapeRef,
        shapeRef,
        syncShapeInStorage
      })
    })

    canvas.on("mouse:up", (options) => {
      handleCanvasMouseUp({
        canvas,
        isDrawing,
        selectedShapeRef,
        shapeRef,
        syncShapeInStorage,
        setActiveElement,
        activeObjectRef
      })
    })

    canvas.on("object:modified",(options)=>{
      handleCanvasObjectModified({
        options,
        syncShapeInStorage
      })
    })


    window.addEventListener("resize",()=>{
      handleResize({fabricRef})
    })

    return () => {
      canvas.dispose();
    }
  },[])

  useEffect(()=>{
    renderCanvas({
      fabricRef,
      canvasObjects,
      activeObjectRef
    })
  },[canvasObjects])

  return (
    <main className="h-screen overflow-hidden" >
      <Navbar 
        activeElement={activeElement}
        handleActiveElement={handleActiveElement}
      />
      <section className="flex h-full flex-row">
        <LeftSideBar />
        <Live canvasRef={canvasRef}/>
        <RightSideBar />
      </section>

    </main>
  );
}