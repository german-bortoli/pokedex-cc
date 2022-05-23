import React from 'react';

import Dropzone from 'react-dropzone-uploader';

// @TODO: This is just a mocked component
const PokemonImageUploader = () => {
    return (
      <Dropzone
        inputContent="Drag a pokemon image here !"
        accept='image/*'
        styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
      />
    );
  };

  export default PokemonImageUploader;