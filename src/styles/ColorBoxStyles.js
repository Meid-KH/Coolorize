import chroma from "chroma-js";

// const Lumin = (value) => {
//     if (chroma(value).luminance() >= 0.4) {
//         return "isDark";
//     }
//     else {
//         return "isLight";
//     }
// }

export default {
    colorBox: {
        display: 'inline-block',
        cursor: 'pointer',
        position: 'relative',
        "& span.colorbox_name": {
            color: props =>  chroma(props.background).luminance() >= 0.4 ? '#272727' : '#fff',
            position: 'absolute',
            left: 0,
            bottom: 0,
            fontSize: 12,
            letterSpacing: 1,
        },
        "& .back_button, &:hover span.colorbox_copy": {
            opacity: 1,
        },
        "&.go_back" : {
            backgroundColor: '#272727',
            position: 'relative',
        },
        "& .back_button, & span": {
            textTransform: 'uppercase',
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 500,
            position: 'absolute',
            display: 'inline-block',
            padding: '5px 10px',
            letterSpacing: '.5px',
            lineHeight: 1,
            textDecoration: 'none',
        },
        "& .back_button, & span.colorbox_copy, & span.colorbox_more": {
            color: '#fff',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            userSelect: 'none',
        },
        "& .back_button, & span.colorbox_copy": {
            left: '50%',
            top: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            minWidth: 70,
            padding: '8px 10px',
            borderRadius: 2,
            opacity: 0,
            color: props =>  chroma(props.background).luminance() >= 0.4 ? '#272727' : '#fff',
        },
        "& span.colorbox_more": {
            right: 0,
            bottom: 0,
            color: props =>  chroma(props.background).luminance() >= 0.4 ? '#272727' : '#fff',
        },
    },
    copyOverlay: {
        opacity: 0,
        width: '100%',
        height: '100%',
        zIndex: '-1',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)',
    },
    copyMsg: {
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '4rem',
        transform: 'scale(.1)',
        opacity: 0,
        color: 'white',
        "& h1": {
            fontWeight: 400,
            textShadow: ' 1px 2px #000',
            background: 'rgba(255, 255, 255, 0.2)',
            width: '100%',
            textAlign: 'center',
            margin: 0,
            padding: '1rem',
            textTransform: 'uppercase',
        },
        "& p": {
            fontSize: '2rem',
            fontWeight: '100',
        }
    },    
    show: {
        "& .copy_overlay": {
            opacity: 1,
            transform: 'scale(50)',
            position: 'absolute',
            zIndex: 10,
        },
        "& .copy_msg": {
            transform: 'scale(1)',
            opacity: 1,
            zIndex: 20,
            transition: 'all .4s ease-in-out',
            transitionDelay: '.3s'
        }
    }
     
}