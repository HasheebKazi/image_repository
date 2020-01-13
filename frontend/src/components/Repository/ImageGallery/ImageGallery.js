import React from 'react';

// css
import classes from './ImageGallery.module.css'

// assets
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';
import image4 from '../../../assets/images/image4.jpg';
import image5 from '../../../assets/images/image5.jpg';
import image6 from '../../../assets/images/image6.jpg';

const ImageGallery = (props) => {
    return (
        <div className={ classes.ImageGallery } >
                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image1 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image2 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image3 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image4 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image5 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image6 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image1 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image2 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image3 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image4 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image5 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                    <div className={ classes.ImageBox } >
                        {/* <figure className={ classes.ImageBox__Figure } > */}
                            <img className={ classes.ImageBox__Image } src={ image6 } alt="natural beauty" />
                            {/* <figcaption className={ classes.ImageBox__Figure_Caption } >an image</figcaption> */}
                        {/* </figure> */}
                    </div>

                </div>
    );
};

export default ImageGallery;