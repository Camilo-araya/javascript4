let propiedades_venta = [
  {
    nombre: "Departamento de Lujo",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "Providencia",
    habitaciones: 4,
    costo: "50.000.000",
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa Rodante",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Disfruta de las hermosas montañas con impresionantes vistas",
    ubicacion: "Cajon del Maipo",
    habitaciones: 2,
    costo: "20.000.000",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de Lujo",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "Chicureo",
    habitaciones: 3,
    costo: "320.000.000",
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa Tradicional",
    src: "https://www.toppropiedades.cl/imagenes/big_c209u446co2c5fd1.JPG",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "Maipu",
    habitaciones: 3,
    costo: "70.000.000",
    smoke: true,
    pets: false,
  },
];

let propiedades_alquiler = [
  {
    nombre: "Departamento en la Ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "Estacion Central",
    habitaciones: 2,
    costo: "500.000",
    smoke: true,
    pets: false,
  },
  {
    nombre: "Departamento En el Mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "Con Con",
    habitaciones: 3,
    costo: "700.000",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio Zona Residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "Peñalolen",
    habitaciones: 3,
    costo: "1.000.000",
    smoke: true,
    pets: false,
  },
  {
    nombre: "Departamento",
    src: "https://http2.mlstatic.com/D_NQ_NP_2X_769064-MLC72665086839_112023-N.webp",
    descripcion:
      "Este elegante departamento moderno está ubicado en una tranquila zona residencial",
    ubicacion: "Providencia",
    habitaciones: 3,
    costo: "500.000",
    smoke: true,
    pets: false,
  },
];



function generarTarjetas(propiedades, contenedor) {
  propiedades.forEach(propiedad => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h2>${propiedad.nombre}</h2>
      <img src="${propiedad.src}" alt="${propiedad.nombre}">
      <p>Ubicación: ${propiedad.ubicacion}</p>
      <p>Habitaciones: ${propiedad.habitaciones}</p>
      <p>Precio: $${propiedad.costo}</p>
      <p>Mascotas: ${propiedad.pets ? 'Permitidas' : 'No permitidas'}</p>
      <p>Fumar: ${propiedad.smoke ? 'Permitido' : 'No permitido'}</p>
    `;
    contenedor.appendChild(card);
  });
}


// Mostrar solo las primeras 3 propiedades
const propiedadesVentaMostrar = propiedades_venta.slice(0, 3);
const propiedadesAlquilerMostrar = propiedades_alquiler.slice(0, 3);

// Generar las tarjetas
generarTarjetas(propiedadesVentaMostrar, document.getElementById('contenedor-venta'));
generarTarjetas(propiedadesAlquilerMostrar, document.getElementById('contenedor-alquiler'));

