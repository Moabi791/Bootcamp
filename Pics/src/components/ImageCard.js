import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = { spans:0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const  height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 150);

        this.setState({ spans });
    };


    render() { 
        const {despcription, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd:`span ` }}>
                <img ref={this.imageRef} alt={despcription} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;
