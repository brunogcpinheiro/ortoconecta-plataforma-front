import React, { Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
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
`;

const GalerryWrapper = styled.div`
    padding: 20px;
`

const IMAGES1 =
[
  {
    src: "/static/0-fotocapa.jpg",
    thumbnail: "/static/0-fotocapa.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },
  {
    src: "/static/0-fotocapa.jpg",
    thumbnail: "/static/0-fotocapa.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/0-fotocapa.jpg",
    thumbnail: "/static/0-fotocapa.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/0-fotocapa.jpg",
    thumbnail: "/static/0-fotocapa.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/0-fotocapa.jpg",
    thumbnail: "/static/0-fotocapa.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/0-fotocapa.jpg",
    thumbnail: "/static/0-fotocapa.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/0-fotocapa.jpg",
    thumbnail: "/static/0-fotocapa.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Curso DAT na Ortodontia Contemporânea - Agosto/2019"
  },

  {
    src: "/static/0-fotocapa.jpg",
    thumbnail: "/static/0-fotocapa.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
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
        </div>
        <GalerryWrapper>
          <Gallery
            images={IMAGES1}
            rowHeight={300}
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
