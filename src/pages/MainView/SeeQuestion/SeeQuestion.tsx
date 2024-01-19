
import { useEffect } from "react"
import CardView from "../../../components/molecules/CardView/CardView"
import "./SeeQuestion.scss"
import { useParams } from "react-router-dom"

const SeeQuestion = () => {

    const { titleQuestion } = useParams()
  return (
    <CardView className="SeeQuestion" classCard="s-cardQuestion">
      <h1 className="s-title">{titleQuestion}</h1>
      <p className="s-cntDescription">
        ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de
        las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
        relleno estándar de las industrias desde el año 1500, cuando un impresor
        (N. del T. persona que se dedica a la imprenta) desconocido usó una
        galería de textos y los mezcló de tal manera que logró hacer un libro de
        textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
        como texto de relleno en documentos electrónicos, quedando esencialmente
        igual al original. Fue popularizado en los 60s con la creación de las
        hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
        recientemente con software de autoedición, como por ejemplo Aldus
        PageMaker, el cual incluye versiones de Lorem Ipsum.
        ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de
        las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
        relleno estándar de las industrias desde el año 1500, cuando un impresor
        (N. del T. persona que se dedica a la imprenta) desconocido usó una
        galería de textos y los mezcló de tal manera que logró hacer un libro de
        textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
        como texto de relleno en documentos electrónicos, quedando esencialmente
        igual al original. Fue popularizado en los 60s con la creación de las
        hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
        recientemente con software de autoedición, como por ejemplo Aldus
        PageMaker, el cual incluye versiones de Lorem Ipsum.
        ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de
        las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
        relleno estándar de las industrias desde el año 1500, cuando un impresor
        (N. del T. persona que se dedica a la imprenta) desconocido usó una
        galería de textos y los mezcló de tal manera que logró hacer un libro de
        textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
        como texto de relleno en documentos electrónicos, quedando esencialmente
        igual al original. Fue popularizado en los 60s con la creación de las
        hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
        recientemente con software de autoedición, como por ejemplo Aldus
        PageMaker, el cual incluye versiones de Lorem Ipsum.
        ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de
        las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
        relleno estándar de las industrias desde el año 1500, cuando un impresor
        (N. del T. persona que se dedica a la imprenta) desconocido usó una
        galería de textos y los mezcló de tal manera que logró hacer un libro de
        textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
        como texto de relleno en documentos electrónicos, quedando esencialmente
        igual al original. Fue popularizado en los 60s con la creación de las
        hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
        recientemente con software de autoedición, como por ejemplo Aldus
        PageMaker, el cual incluye versiones de Lorem Ipsum.
        ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto de relleno de
        las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
        relleno estándar de las industrias desde el año 1500, cuando un impresor
        (N. del T. persona que se dedica a la imprenta) desconocido usó una
        galería de textos y los mezcló de tal manera que logró hacer un libro de
        textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
        como texto de relleno en documentos electrónicos, quedando esencialmente
        igual al original. Fue popularizado en los 60s con la creación de las
        hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
        recientemente con software de autoedición, como por ejemplo Aldus
        PageMaker, el cual incluye versiones de Lorem Ipsum.
      </p>
    </CardView>
  );
}

export default SeeQuestion