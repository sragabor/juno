import React from "react";
import FooterVideo from "../videos/footer.mp4";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className={'video-container'}>
                    <div className={'video-wrapper'}>
                        <video autoPlay={true} loop={true} playsInline={true}>
                            <source src={FooterVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className={'container'}>

                </div>
            </footer>
        );
    }
}

export default Footer;
