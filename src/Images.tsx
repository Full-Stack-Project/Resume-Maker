import React from "react";
import ImageUploading from "react-images-uploading";

interface Props {
    className?: string;
}

const Images: React.FC<Props> = ({className}) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className={className}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className={`upload__image-wrapper flex w-24 h-32 ${imageList.length === 1 ? "" : "border border-black"}`}>
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className={`${imageList.length === 1 ? "hidden" : ""}`}
            >
              Click or Drop here
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} className="border-2 border-blue-700" onClick={() => onImageUpdate(index)} alt="" width="100"/>
                {/* <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div> */}
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default Images;
