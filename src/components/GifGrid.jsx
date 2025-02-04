import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( {category} ) => {

  const { images, isLoading }  = useFetchGifs( category);

  
  // los que empiezan con "use" se entiende a un hook de React
  
  /*
    el useEffect lo que hace es un hook de React que sirve para "disparar" efectos secundarios, 
    Efectos secundarios se entiende cuando algún proceso se quiere ejecutar cuando algo suceda.
  */



  return (
    <>
        <h3>{ category }</h3>
      {
        isLoading && ( <h2>cargando...</h2> )
      }

        <div className="card-grid">
          {images.map((image)  => (
            <GifItem 
              key={image.id} 
              {...image}
            />
          ) )}

        </div>
        
    </>
  )
}

