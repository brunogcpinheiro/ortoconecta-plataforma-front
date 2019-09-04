import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Main from "../layouts/main";
import Gallery from 'react-grid-gallery';

const primaryColor = "#ffd32a";

const GalleryAndTitleWrapper = styled.div`
	padding: 16px;
	background: transparent;
	margin: 0 auto;
	max-width: 1366px;

	div {
		text-align: center;
	}

	h2 {
		font-size: 3rem;

		span {
			color: ${primaryColor};
			font-size: 3rem;
			font-weight: bold;
		}
	}

	h2,
	p {
		text-align: center;
	}

  h3 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-top: 10px;
  }
`;

const GalerryWrapper = styled.div`
    padding: 20px;
`

const IMAGES1 =
[
  {
    src: "/static/galeria-1.jpg",
    thumbnail: "/static/galeria-1.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },
  {
    src: "/static/galeria-4.jpg",
    thumbnail: "/static/galeria-4.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-5.jpg",
    thumbnail: "/static/galeria-5.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-6.jpg",
    thumbnail: "/static/galeria-6.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-7.jpg",
    thumbnail: "/static/galeria-7.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-8.jpg",
    thumbnail: "/static/galeria-8.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-9.jpg",
    thumbnail: "/static/galeria-9.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-10.jpg",
    thumbnail: "/static/galeria-10.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-11.jpg",
    thumbnail: "/static/galeria-11.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-12.jpg",
    thumbnail: "/static/galeria-12.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-13.jpg",
    thumbnail: "/static/galeria-13.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-14.jpg",
    thumbnail: "/static/galeria-14.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-15.jpg",
    thumbnail: "/static/galeria-15.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-16.jpg",
    thumbnail: "/static/galeria-16.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-17.jpg",
    thumbnail: "/static/galeria-17.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/galeria-18.jpg",
    thumbnail: "/static/galeria-18.jpg",
    thumbnailWidth: 370,
    thumbnailHeight: 250,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },
]

const GalleryComponent = () => {
	return (
		<Main>
			<Head>
				<title>OrtoConecta | Galeria</title>
			</Head>
      <GalleryAndTitleWrapper>
        <div>
          <h2>Galeria de Fotos</h2>
          <h3>Curso DAT na Ortodontia Contemporânea - Agosto/2019</h3>
        </div>
        <GalerryWrapper>
          <Gallery
            images={IMAGES1}
            rowHeight={250}
            margin={5}
            enableImageSelection={false}
            backdropClosesModal={true}
          />
        </GalerryWrapper>
      </GalleryAndTitleWrapper>
		</Main>
	);
};

export default GalleryComponent;
