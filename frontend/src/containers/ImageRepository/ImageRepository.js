import React, { Component } from 'react';

// css
import classes from './ImageRepository.module.css';

// assets
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';


class ImageRepository extends Component {
    state = {

    }

    render() {
        return (
            <main className={ classes.MainWrapper } >
                <div className={ classes.Toolbar } >
                    {/* ... image repo controls
                    ... search by
                    ... filter by
                    ... sort by  */}
                    <div className={ classes.Filter } >
                        <div className={ classes.Toolbar__Filter } >Filters: </div>
                        <ul className={ classes.Toolbar__Options }>
                            <li>Cats</li>
                            <li>Dogs</li>
                        </ul>
                    </div>
                    
                    <div className={ classes.Sort } >
                        <div className={ classes.Toolbar__Sort } >Sort By: </div>
                        <ul className={ classes.Toolbar__Options }>
                            <li>Most Recent</li>
                            <li>Price</li>
                        </ul>
                    </div>

                </div>

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
            </main>
        );
    }
}

export default ImageRepository;