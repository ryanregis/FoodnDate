import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Meeting = () => {
    const {id} = useParams();

    useEffect(() => {
      const domain = "https://foodndate.daily.co/";
  
      axios
        .get(`/api/video-call/${id}`)
        .then((res) => {
          if (res.status === 200) {
            const script = document.createElement("script");
            script.innerHTML = `window.DailyIframe.createFrame({
              iframeStyle: {
                position: "relative",
                width: "100%",
                height: "90vh",
                border: "0",
                zIndex: 9999
              },
              showLeaveButton: true,
              showFullscreenButton: true,
            }).join({
              url: "${domain}${id}",
            });`;
  
            document.body.appendChild(script);
          }
        })
        .catch((err) => console.log(err));
    }, [id]);
    return (
        <div>
            
        </div>
    )
}

export default Meeting
