import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimateDletters from "../AnimateLetter";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nr6rgpe", "template_izdm2n6", refForm.current, {
        publicKey: "4dA49o4G7NZndTLe4",
      })
      .then(
        () => {
          alert("Message sent succesfully");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimateDletters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", "", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in freelance opportunities, If you need any help just
            use the form.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail} data-testid="contact-form">
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                    required
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Venkatesh Ramalingam,
          <br />
          Leutzestraße,
          <br />
          73525 Schwäbisch Gmünd,
          <br />
          Germany
          <br />
          <a href="mailto:venkypsd@gmail.com">venkypsd@gmail.com</a>
        </div>
        <div className="map-wrap">
          <MapContainer center={[48.80049645290782, 9.8089590976125]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[48.80049645290782, 9.8089590976125]}>
              <Popup>I'm here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </>
  );
};

export default Contact;
