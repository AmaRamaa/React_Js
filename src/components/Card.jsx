import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import Title from '../shared/Title';
import Image from '../shared/Image';



class Card extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.node.isRequired,
        style: PropTypes.object,
    };

    static defaultProps = {
        title: 'N/A',
        style: {backgroundColor: 'white',color:'black'},
    };

    render() {
        const { title, children, style, rating, deleteFeedBack, src} = this.props;
        return (
            <div style={{ display: 'Flex', gap: '50px', justifyContent: 'Center', alignContent: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', ...style }}>
            <Title text={title}/>
            
            {rating && <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>{rating}</div>}
            {title && <h3 style={{ margin: '0 0 16px' }}>{title}</h3>}
            <Image src={src}/>
            <div>{children}</div>
            {deleteFeedBack && (
                <button 
                onClick={deleteFeedBack} 
                style={{ padding: '8px 16px', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                ><FaTimes style={{ backgroundColor: 'purple'  }} />
                </button>
            )}
            </div>
        );
    }
}


export default Card;